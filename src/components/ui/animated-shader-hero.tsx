import React, { useCallback, useEffect, useRef, useState } from 'react';

interface HeroProps {
  trustBadge?: { text: string; icons?: string[] };
  headline: { line1: string; line2: string };
  subtitle: string;
  buttons?: {
    primary?: { text: string; onClick?: () => void };
    secondary?: { text: string; onClick?: () => void };
  };
  className?: string;
  /** Tells the outer gate that the video has a paintable first frame. */
  onVideoFrameReady?: () => void;
  /** Tells the outer gate that actual video playback has started. */
  onVideoReady?: () => void;
  /** Lets the outer gate reveal text immediately if media playback times out. */
  forceShowContent?: boolean;
}

const HAVE_CURRENT_DATA = 2;
const PLAYBACK_RETRY_WINDOW_MS = 45000;

const Hero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = "",
  onVideoFrameReady,
  onVideoReady,
  forceShowContent,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameReadySentRef = useRef(false);
  const playbackReadySentRef = useRef(false);
  const [videoFrameReady, setVideoFrameReady] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const markVideoFrameReady = useCallback(() => {
    setVideoFrameReady(true);
    setShowContent(true);

    if (!frameReadySentRef.current) {
      frameReadySentRef.current = true;
      onVideoFrameReady?.();
    }
  }, [onVideoFrameReady]);

  const markPlaybackStarted = useCallback(() => {
    markVideoFrameReady();
    setVideoReady(true);
    setShowContent(true);

    if (!playbackReadySentRef.current) {
      playbackReadySentRef.current = true;
      onVideoReady?.();
    }
  }, [markVideoFrameReady, onVideoReady]);

  const syncFrameState = useCallback(() => {
    const video = videoRef.current;
    if (video && video.readyState >= HAVE_CURRENT_DATA) {
      markVideoFrameReady();
      return true;
    }
    return false;
  }, [markVideoFrameReady]);

  const hasPlaybackStarted = useCallback(() => {
    const video = videoRef.current;
    return Boolean(
      video &&
        !video.paused &&
        !video.ended &&
        video.readyState >= HAVE_CURRENT_DATA
    );
  }, []);

  const syncPlaybackState = useCallback(() => {
    syncFrameState();
    if (hasPlaybackStarted()) {
      markPlaybackStarted();
      return true;
    }
    return false;
  }, [hasPlaybackStarted, markPlaybackStarted, syncFrameState]);

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile Safari is picky. Set these imperatively before every play()
    // attempt, not only as JSX attributes, so autoplay stays inline + muted.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('disablepictureinpicture', '');
    video.setAttribute('controlslist', 'nodownload noplaybackrate noremoteplayback');

    syncFrameState();

    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          syncPlaybackState();
        })
        .catch(() => {
          // If iOS Low Power Mode or autoplay policy blocks playback, keep the
          // video covered by the fallback layer instead of revealing Safari's
          // ugly native play button over the hero. User gestures below keep
          // trying to start playback silently.
          if (!syncPlaybackState()) {
            setVideoReady(false);
          }
        });
    } else {
      syncPlaybackState();
    }
  }, [syncFrameState, syncPlaybackState]);

  const kickVideo = useCallback(() => {
    attemptPlay();
    syncPlaybackState();
  }, [attemptPlay, syncPlaybackState]);

  const restartLoop = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari can fail to honor the native loop attribute for large inline
    // autoplay videos. Force the loop manually so it never parks on the final
    // frame with a play button.
    try {
      video.currentTime = 0.05;
    } catch {
      video.load();
    }
    kickVideo();
  }, [kickVideo]);

  const keepLoopAlive = useCallback(() => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 1) return;

    if (video.currentTime >= video.duration - 0.35) {
      restartLoop();
    }
  }, [restartLoop]);

  const handleLoadedMetadata = useCallback(() => {
    kickVideo();
  }, [kickVideo]);

  const handleLoadedData = useCallback(() => {
    markVideoFrameReady();
    kickVideo();
  }, [kickVideo, markVideoFrameReady]);

  const handleCanPlay = useCallback(() => {
    markVideoFrameReady();
    kickVideo();
  }, [kickVideo, markVideoFrameReady]);

  const handlePlaying = useCallback(() => {
    syncPlaybackState();
  }, [syncPlaybackState]);

  const handlePause = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.ended) return;

    setVideoReady(false);
    window.setTimeout(() => {
      kickVideo();
    }, 160);
  }, [kickVideo]);

  const handlePlaybackProgress = useCallback(() => {
    syncPlaybackState();
    keepLoopAlive();
  }, [keepLoopAlive, syncPlaybackState]);

  useEffect(() => {
    if (forceShowContent) {
      setShowContent(true);
      kickVideo();
    }
  }, [forceShowContent, kickVideo]);

  useEffect(() => {
    kickVideo();

    const retryPlayback = window.setInterval(() => {
      if (syncPlaybackState()) {
        window.clearInterval(retryPlayback);
        return;
      }
      attemptPlay();
    }, 500);

    const stopRetrying = window.setTimeout(
      () => window.clearInterval(retryPlayback),
      PLAYBACK_RETRY_WINDOW_MS
    );

    // Fallback: show content after 4s even if video autoplay is blocked
    // (mobile/slow connections). The fallback layer still hides the native
    // paused-video play button until real playback starts.
    const fallback = window.setTimeout(() => setShowContent(true), 4000);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        kickVideo();
      }
    };

    window.addEventListener('pageshow', kickVideo);
    window.addEventListener('focus', kickVideo);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', kickVideo, { passive: true });
    document.addEventListener('pointerdown', kickVideo, { passive: true });

    return () => {
      window.clearInterval(retryPlayback);
      window.clearTimeout(stopRetrying);
      window.clearTimeout(fallback);
      window.removeEventListener('pageshow', kickVideo);
      window.removeEventListener('focus', kickVideo);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', kickVideo);
      document.removeEventListener('pointerdown', kickVideo);
    };
  }, [attemptPlay, kickVideo, syncPlaybackState]);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-[#221F26] ${className}`}
      data-hero-video-frame-ready={videoFrameReady ? 'true' : 'false'}
      data-hero-video-ready={videoReady ? 'true' : 'false'}
    >
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }

        #boniean-hero-video {
          pointer-events: none;
          -webkit-user-select: none;
          user-select: none;
        }

        #boniean-hero-video::-webkit-media-controls,
        #boniean-hero-video::-webkit-media-controls-enclosure,
        #boniean-hero-video::-webkit-media-controls-panel,
        #boniean-hero-video::-webkit-media-controls-overlay-play-button,
        #boniean-hero-video::-webkit-media-controls-play-button,
        #boniean-hero-video::-webkit-media-controls-start-playback-button {
          display: none !important;
          -webkit-appearance: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>

      <video
        ref={videoRef}
        id="boniean-hero-video"
        aria-hidden="true"
        tabIndex={-1}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        onLoadedMetadata={handleLoadedMetadata}
        onLoadedData={handleLoadedData}
        onCanPlay={handleCanPlay}
        onPlay={handlePlaying}
        onPlaying={handlePlaying}
        onPause={handlePause}
        onEnded={restartLoop}
        onTimeUpdate={handlePlaybackProgress}
        className="absolute inset-0 h-full w-full object-cover brightness-[0.82] saturate-[0.95]"
      >
        <source src="/boniean-shader-loop-hevc.mp4" type='video/mp4; codecs="hvc1"' />
        <source src="/boniean-shader-loop.mp4" type="video/mp4" />
        <source src="/boniean-shader-loop.webm" type="video/webm" />
      </video>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500 ${
          videoFrameReady ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(249,115,22,0.18) 0%, transparent 48%), ' +
            'linear-gradient(160deg, #221F26 0%, #17131d 48%, #221F26 100%)',
        }}
      />

      {showContent && (
        <div className="absolute inset-0 z-10 flex flex-col items-center text-white">
          {/* Badge — pinned to top */}
          {trustBadge && (
            <div className="absolute top-20 sm:top-28 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-xs sm:text-sm">
                {trustBadge.icons && (
                  <div className="flex">
                    {trustBadge.icons.map((icon, index) => (
                      <span key={index} className={`text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : 'amber'}-300`}>{icon}</span>
                    ))}
                  </div>
                )}
                <span className="text-black">{trustBadge.text}</span>
              </div>
            </div>
          )}

          {/* Headline + Subtitle — vertically centered */}
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-4 sm:space-y-6 max-w-5xl">
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-fade-in-up animation-delay-200">
                  {(() => {
                    const words = headline.line1.split(' ');
                    const last = words.pop();
                    return <>{words.join(' ')} <span className="text-amber-900 drop-shadow-[0_2px_14px_rgba(255,255,255,0.35)]">{last}</span></>;
                  })()}
                </h1>
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 drop-shadow-[0_2px_14px_rgba(255,255,255,0.35)] animate-fade-in-up animation-delay-400">
                  {headline.line2}
                </h1>
              </div>
              <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black font-normal leading-relaxed drop-shadow-[0_1px_10px_rgba(255,255,255,0.45)]">{subtitle}</p>
              </div>
            </div>
          </div>

          {/* Buttons — pinned to bottom */}
          {buttons && (
            <div className="absolute bottom-20 sm:bottom-28 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in-up animation-delay-800">
              {buttons.primary && (
                <button onClick={buttons.primary.onClick} className="w-full sm:w-48 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button onClick={buttons.secondary.onClick} className="w-full sm:w-48 px-6 sm:px-8 py-3 sm:py-4 bg-white/30 hover:bg-white/50 border border-white/40 hover:border-white/70 text-black rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
