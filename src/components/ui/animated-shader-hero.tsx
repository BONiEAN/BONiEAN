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
}

const Hero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = ""
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile Safari is picky. Set these imperatively before play(),
    // not only as JSX attributes, so autoplay stays inline + muted.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('disablepictureinpicture', '');
    video.setAttribute('controlslist', 'nodownload noplaybackrate noremoteplayback');

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // If iOS Low Power Mode blocks autoplay, keep the video hidden instead
        // of showing Safari's ugly native play button over the hero.
      });
    }
  }, []);

  const restartLoop = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari can fail to honor the native loop attribute for large
    // inline autoplay videos. Force the loop manually so it never parks on
    // the final frame with a play button.
    try {
      video.currentTime = 0.05;
    } catch {
      video.load();
    }
    attemptPlay();
  }, [attemptPlay]);

  const keepLoopAlive = useCallback(() => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 1) return;

    if (video.currentTime >= video.duration - 0.35) {
      restartLoop();
    }
  }, [restartLoop]);

  useEffect(() => {
    attemptPlay();
    const retry = window.setTimeout(attemptPlay, 300);
    return () => window.clearTimeout(retry);
  }, [attemptPlay]);

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-black ${className}`}>
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

        #boniean-hero-video::-webkit-media-controls,
        #boniean-hero-video::-webkit-media-controls-panel,
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
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        onLoadedMetadata={attemptPlay}
        onLoadedData={attemptPlay}
        onCanPlay={attemptPlay}
        onPlaying={() => setVideoReady(true)}
        onEnded={restartLoop}
        onTimeUpdate={keepLoopAlive}
        className={`absolute inset-0 w-full h-full object-cover brightness-[0.82] saturate-[0.95] transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/boniean-shader-loop.mp4" type="video/mp4" />
        <source src="/boniean-shader-loop.webm" type="video/webm" />
      </video>

      {videoReady && (
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
