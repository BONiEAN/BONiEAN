import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Boniean3DLogo } from './boniean-3d-logo';

type GateOpenReason = 'ready' | 'timeout';

interface AnimatedGateProps {
  children: React.ReactNode;
  sessionKey?: string;
  alwaysShow?: boolean;
  ready?: boolean;
  minDisplayMs?: number;
  maxWaitMs?: number;
  openAnimationMs?: number;
  onOpenStart?: (reason: GateOpenReason) => void;
}

// ── Sub-components ──────────────────────────────────────────────

/** Expanding pulse rings from the center — sci-fi energy feel */
const PulseRings: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-orange-400/25"
        style={{
          width: `${120 + i * 60}px`,
          height: `${120 + i * 60}px`,
          animation: `gate-pulse-ring ${2.2 + i * 0.6}s ease-out ${i * 0.35}s infinite`,
        }}
      />
    ))}
  </div>
);

/** Floating particle dots around the logo */
const FloatingParticles: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const particles = useRef(
    Array.from({ length: count }).map(() => ({
      x: (Math.random() - 0.5) * 280,
      y: (Math.random() - 0.5) * 240,
      size: 1.5 + Math.random() * 3,
      delay: Math.random() * 4,
      duration: 2.5 + Math.random() * 3,
      opacity: 0.2 + Math.random() * 0.4,
    }))
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.current.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-orange-300"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            opacity: p.opacity,
            animation: `gate-particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: `0 0 ${p.size * 2}px rgba(249,115,22,0.4)`,
          }}
        />
      ))}
    </div>
  );
};

/** Subtle loading progress dots under the brand text */
const LoadingDots: React.FC = () => (
  <div className="flex items-center justify-center gap-1.5 mt-3">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-orange-400/60"
        style={{
          animation: `gate-dot-bounce 1.2s ease-in-out ${i * 0.18}s infinite`,
        }}
      />
    ))}
  </div>
);

// ── Main Component ──────────────────────────────────────────────

export const AnimatedGate: React.FC<AnimatedGateProps> = ({
  children,
  sessionKey = 'boniean-gate-seen',
  alwaysShow = false,
  ready = false,
  minDisplayMs = 900,
  maxWaitMs = 4200,
  openAnimationMs = 900,
  onOpenStart,
}) => {
  const debugHoldGate =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('gateDebug');

  const [showGate, setShowGate] = useState(() => {
    if (alwaysShow || debugHoldGate || typeof window === 'undefined') return true;
    try {
      return window.sessionStorage.getItem(sessionKey) !== 'true';
    } catch {
      return true;
    }
  });
  const [opening, setOpening] = useState(false);
  const [minElapsed, setMinElapsed] = useState(false);
  const [maxElapsed, setMaxElapsed] = useState(false);
  const hasOpenedRef = useRef(false);
  const removeTimerRef = useRef<number | null>(null);

  const openGate = useCallback(
    (reason: GateOpenReason) => {
      if (hasOpenedRef.current) return;
      hasOpenedRef.current = true;
      onOpenStart?.(reason);
      setOpening(true);

      removeTimerRef.current = window.setTimeout(() => {
        try {
          window.sessionStorage.setItem(sessionKey, 'true');
        } catch {
          // Private browsing — fine.
        }
        setShowGate(false);
      }, openAnimationMs + 160);
    },
    [onOpenStart, openAnimationMs, sessionKey]
  );

  useEffect(() => {
    if (!showGate || debugHoldGate) return;
    const minTimer = window.setTimeout(() => setMinElapsed(true), minDisplayMs);
    const maxTimer = window.setTimeout(() => setMaxElapsed(true), maxWaitMs);
    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
    };
  }, [debugHoldGate, maxWaitMs, minDisplayMs, showGate]);

  useEffect(() => {
    if (!showGate || opening || debugHoldGate || !minElapsed) return;
    if (ready) {
      openGate('ready');
      return;
    }
    if (maxElapsed) {
      openGate('timeout');
    }
  }, [debugHoldGate, maxElapsed, minElapsed, openGate, opening, ready, showGate]);

  useEffect(() => {
    return () => {
      if (removeTimerRef.current) {
        window.clearTimeout(removeTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1a1620]">
      {children}

      {showGate && (
        <div
          className="fixed inset-0 z-[9999] overflow-hidden"
          data-boniean-gate="loading"
          data-gate-opening={opening ? 'true' : 'false'}
          data-gate-ready={ready ? 'true' : 'false'}
          aria-hidden="true"
        >
          <style>{`
            /* ── Gate keyframes ──────────────────────────── */
            @keyframes gate-pulse {
              0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(249,115,22,0.25); }
              50% { transform: scale(1.04); box-shadow: 0 0 90px rgba(249,115,22,0.4); }
            }
            @keyframes gate-pulse-ring {
              0% { transform: scale(0.8); opacity: 0.5; }
              100% { transform: scale(2.2); opacity: 0; }
            }
            @keyframes gate-scan {
              0% { transform: translateX(-130%); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateX(130%); opacity: 0; }
            }
            @keyframes gate-grid-drift {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(44px, 44px, 0); }
            }
            @keyframes gate-logo-lock {
              0% { opacity: 0; transform: translateY(12px) scale(0.94); filter: blur(10px); }
              55% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
              100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            }
            @keyframes gate-line-arm {
              0% { transform: scaleX(0); opacity: 0; }
              40% { opacity: 1; }
              100% { transform: scaleX(1); opacity: 1; }
            }
            @keyframes gate-particle-float {
              0%, 100% { transform: translate(0, 0); opacity: 0.3; }
              25% { transform: translate(6px, -8px); opacity: 0.7; }
              50% { transform: translate(-4px, -14px); opacity: 0.2; }
              75% { transform: translate(-8px, -4px); opacity: 0.6; }
            }
            @keyframes gate-glow-shift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes gate-dot-bounce {
              0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
              30% { transform: translateY(-6px); opacity: 0.9; }
            }
            @keyframes gate-corner-sweep {
              0% { opacity: 0; transform: scale(0.3); }
              25% { opacity: 0.5; }
              100% { opacity: 0; transform: scale(1.5); }
            }
          `}</style>

          {/* ── Background layers ────────────────────────── */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 45%, rgba(249,115,22,0.22) 0%, transparent 42%), ' +
                'radial-gradient(ellipse at 30% 25%, rgba(180,120,255,0.08) 0%, transparent 35%), ' +
                'radial-gradient(ellipse at 70% 65%, rgba(254,198,161,0.06) 0%, transparent 30%), ' +
                'linear-gradient(160deg, #1a1620 0%, #141118 40%, #1a1620 100%)',
              backgroundSize: '200% 200%',
              animation: 'gate-glow-shift 6s ease-in-out infinite',
            }}
          />

          {/* Animated tech grid */}
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), ' +
                'linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              animation: 'gate-grid-drift 6s linear infinite',
            }}
          />

          {/* Vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
            }}
          />

          {/* ── Gate halves (doors) ──────────────────────── */}
          <div
            className={`absolute inset-y-0 left-0 w-1/2 bg-[#1a1620] shadow-[inset_-2px_0_8px_rgba(249,115,22,0.25)] transition-transform ${
              opening ? '-translate-x-full' : 'translate-x-0'
            }`}
            style={{
              transitionDuration: `${openAnimationMs}ms`,
              transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)',
            }}
          />
          <div
            className={`absolute inset-y-0 right-0 w-1/2 bg-[#1a1620] shadow-[inset_2px_0_8px_rgba(249,115,22,0.25)] transition-transform ${
              opening ? 'translate-x-full' : 'translate-x-0'
            }`}
            style={{
              transitionDuration: `${openAnimationMs}ms`,
              transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)',
            }}
          />

          {/* ── Center brand lockup ──────────────────────── */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-500 ${
              opening
                ? 'opacity-0 scale-95 blur-sm'
                : 'opacity-100 scale-100 blur-0'
            }`}
          >
            {/* Pulse rings behind the logo */}
            <PulseRings count={3} />

            {/* Floating particles */}
            <FloatingParticles count={24} />

            {/* Logo circle container */}
            <div
              className="relative flex h-36 w-36 items-center justify-center rounded-full border border-orange-300/30 bg-white/[0.04] backdrop-blur-sm"
              style={{
                animation: 'gate-pulse 1.8s ease-in-out infinite',
                boxShadow:
                  '0 0 80px rgba(249,115,22,0.22), inset 0 0 40px rgba(249,115,22,0.08)',
              }}
            >
              {/* Inner ring accent */}
              <div className="absolute inset-2.5 rounded-full border border-white/8" />
              <div className="absolute inset-1 rounded-full border border-orange-400/15" />

              {/* Horizontal scan line */}
              <div
                className="absolute h-px w-[200vw] origin-center bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"
                style={{
                  animation: 'gate-line-arm 700ms ease-out 280ms both',
                }}
              />

              {/* Vertical crosshair line */}
              <div className="absolute h-[200vw] w-px origin-center bg-gradient-to-b from-transparent via-orange-300/10 to-transparent" />

              {/* 3D logo */}
              <div className="absolute inset-3 z-10">
                <Boniean3DLogo
                  speed={0.45}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Top-down scan shimmer */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{
                  animation: 'gate-scan 1.4s ease-in-out 250ms both',
                }}
              />
            </div>

            {/* ── Brand text ──────────────────────────────── */}
            <div
              className="mt-8 text-center"
              style={{
                animation: 'gate-logo-lock 800ms ease-out 150ms both',
              }}
            >
              <div className="text-base font-bold uppercase tracking-[0.45em] text-orange-200/90 sm:text-lg">
                BONiEAN
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.32em] text-orange-50/55 sm:text-xs">
                Digital Solutions
              </div>
            </div>

            {/* Loading dots */}
            <LoadingDots />

            {/* Corner accent sweeps */}
            <div className="absolute top-8 left-8 w-16 h-16 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-orange-400/40 to-transparent"
                style={{ animation: 'gate-corner-sweep 3s ease-out infinite' }}
              />
              <div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-400/40 to-transparent"
                style={{
                  animation: 'gate-corner-sweep 3s ease-out 0.3s infinite',
                }}
              />
            </div>
            <div className="absolute bottom-8 right-8 w-16 h-16 pointer-events-none">
              <div
                className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-orange-400/40 to-transparent"
                style={{
                  animation: 'gate-corner-sweep 3s ease-out 1.5s infinite',
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-orange-400/40 to-transparent"
                style={{
                  animation: 'gate-corner-sweep 3s ease-out 1.8s infinite',
                }}
              />
            </div>
          </div>

          {/* ── Center seam glow ─────────────────────────── */}
          <div
            className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-300/80 to-transparent shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all ${
              opening
                ? 'opacity-0 scale-y-125'
                : 'opacity-100 scale-y-100'
            }`}
            style={{
              transitionDuration: `${openAnimationMs}ms`,
              transitionTimingFunction: 'ease-out',
            }}
          />
        </div>
      )}
    </div>
  );
};
