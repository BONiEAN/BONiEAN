import React, { useCallback, useEffect, useRef, useState } from 'react';

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

/** Expanding pulse ring from center */
const PulseRing: React.FC = () => (
  <div
    className="absolute rounded-full border border-orange-400/20 pointer-events-none"
    style={{
      width: '80px',
      height: '80px',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      animation: 'gate-pulse-ring 2.4s ease-out infinite',
    }}
  />
);

/** Floating ambient particles */
const Particles: React.FC<{ count?: number }> = ({ count = 8 }) => {
  const particles = useRef(
    Array.from({ length: count }).map(() => ({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 160,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 3,
      opacity: 0.15 + Math.random() * 0.3,
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
            boxShadow: `0 0 ${p.size * 2}px rgba(249,115,22,0.3)`,
          }}
        />
      ))}
    </div>
  );
};

/** Loading dots under the brand text */
const LoadingDots: React.FC = () => (
  <div className="flex items-center justify-center gap-2 mt-5">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-orange-400/50"
        style={{
          animation: `gate-dot-bounce 1.3s ease-in-out ${i * 0.2}s infinite`,
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

  const openGate = useCallback((reason: GateOpenReason) => {
    if (hasOpenedRef.current) return;
    hasOpenedRef.current = true;
    onOpenStart?.(reason);
    setOpening(true);

    removeTimerRef.current = window.setTimeout(() => {
      try { window.sessionStorage.setItem(sessionKey, 'true'); } catch {}
      setShowGate(false);
    }, openAnimationMs + 160);
  }, [onOpenStart, openAnimationMs, sessionKey]);

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
      if (removeTimerRef.current) window.clearTimeout(removeTimerRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#221F26]">
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
            @keyframes gate-logo-lock {
              0% { opacity: 0; transform: translateY(10px) scale(0.96); filter: blur(8px); }
              55% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
              100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            }
            @keyframes gate-pulse-ring {
              0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.6; }
              100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
            }
            @keyframes gate-particle-float {
              0%, 100% { transform: translate(0, 0); opacity: 0.2; }
              25% { transform: translate(8px, -10px); opacity: 0.5; }
              50% { transform: translate(-5px, -16px); opacity: 0.15; }
              75% { transform: translate(-10px, -4px); opacity: 0.45; }
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
            @keyframes gate-glow-shift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>

          {/* ── Background layers ────────────────────────── */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 45%, rgba(249,115,22,0.12) 0%, transparent 40%), ' +
                'radial-gradient(ellipse at 50% 60%, rgba(120,80,200,0.05) 0%, transparent 30%), ' +
                'linear-gradient(160deg, #221F26 0%, #1a1620 40%, #221F26 100%)',
              backgroundSize: '200% 200%',
              animation: 'gate-glow-shift 6s ease-in-out infinite',
            }}
          />

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), ' +
                'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.4) 100%)',
            }}
          />

          {/* ── Gate halves (doors) ──────────────────────── */}
          <div
            className={`absolute inset-y-0 left-0 w-1/2 bg-[#221F26] shadow-[inset_-1px_0_0_rgba(249,115,22,0.45)] transition-transform ${
              opening ? '-translate-x-full' : 'translate-x-0'
            }`}
            style={{
              transitionDuration: `${openAnimationMs}ms`,
              transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)',
            }}
          />
          <div
            className={`absolute inset-y-0 right-0 w-1/2 bg-[#221F26] shadow-[inset_1px_0_0_rgba(249,115,22,0.45)] transition-transform ${
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
              opening ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
            }`}
          >
            {/* Pulse ring */}
            <PulseRing />

            {/* Floating particles */}
            <Particles count={10} />

            {/* Brand text */}
            <div
              className="relative text-center"
              style={{ animation: 'gate-logo-lock 780ms ease-out 120ms both' }}
            >
              <div className="absolute left-1/2 top-1/2 h-20 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/8 blur-2xl" />
              <div className="text-sm font-semibold uppercase tracking-[0.42em] text-orange-200/90 sm:text-base">
                BONiEAN
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.28em] text-orange-50/70 sm:text-sm">
                Digital Solutions
              </div>
            </div>

            {/* Loading dots */}
            <LoadingDots />

            {/* Corner accent sweeps */}
            <div className="absolute top-8 left-8 w-12 h-12 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-orange-400/30 to-transparent"
                style={{ animation: 'gate-corner-sweep 3s ease-out infinite' }}
              />
              <div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-400/30 to-transparent"
                style={{ animation: 'gate-corner-sweep 3s ease-out 0.3s infinite' }}
              />
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 pointer-events-none">
              <div
                className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-orange-400/30 to-transparent"
                style={{ animation: 'gate-corner-sweep 3s ease-out 1.5s infinite' }}
              />
              <div
                className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-orange-400/30 to-transparent"
                style={{ animation: 'gate-corner-sweep 3s ease-out 1.8s infinite' }}
              />
            </div>
          </div>

          {/* ── Center seam glow ─────────────────────────── */}
          <div
            className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-300 to-transparent shadow-[0_0_30px_rgba(249,115,22,0.9)] transition-all ${
              opening ? 'opacity-0 scale-y-125' : 'opacity-100 scale-y-100'
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
