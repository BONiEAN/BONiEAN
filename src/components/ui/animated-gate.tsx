import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Boniean3DLogo } from './boniean-3d-logo';

type GateOpenReason = 'ready' | 'timeout';

interface AnimatedGateProps {
  children: React.ReactNode;
  /** Session key used to skip the gate after the first visit in the same tab session. */
  sessionKey?: string;
  /** Force the gate to show every load while prototyping. */
  alwaysShow?: boolean;
  /** Opens the gate once the hero media has buffered enough to show cleanly. */
  ready?: boolean;
  /** Minimum time the gate stays visible so the brand animation feels intentional. */
  minDisplayMs?: number;
  /** Maximum time to wait for media readiness before revealing usable page content anyway. */
  maxWaitMs?: number;
  /** Door-opening animation duration. Keep this in sync with the transition styles below. */
  openAnimationMs?: number;
  /** Useful for forcing hero text visible when the gate opens because of timeout. */
  onOpenStart?: (reason: GateOpenReason) => void;
}

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
      try {
        window.sessionStorage.setItem(sessionKey, 'true');
      } catch {
        // Private browsing / blocked storage should not break the homepage.
      }
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
      if (removeTimerRef.current) {
        window.clearTimeout(removeTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#221F26]">
      {children}

      {showGate && (
        <div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#221F26]"
          data-boniean-gate="loading"
          data-gate-opening={opening ? 'true' : 'false'}
          data-gate-ready={ready ? 'true' : 'false'}
          aria-hidden="true"
        >
          <style>{`
            @keyframes gate-pulse {
              0%, 100% { transform: scale(1); opacity: 0.92; }
              50% { transform: scale(1.035); opacity: 1; }
            }
            @keyframes gate-scan {
              0% { transform: translateX(-120%); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateX(120%); opacity: 0; }
            }
            @keyframes gate-grid-drift {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(44px, 44px, 0); }
            }
            @keyframes gate-logo-lock {
              0% { opacity: 0; transform: translateY(10px) scale(0.96); filter: blur(8px); }
              55% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
              100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            }
            @keyframes gate-line-arm {
              0% { transform: scaleX(0); opacity: 0; }
              45% { opacity: 1; }
              100% { transform: scaleX(1); opacity: 1; }
            }
          `}</style>

          {/* Subtle technical background. */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(249,115,22,0.20),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(254,198,161,0.12),transparent_28%),linear-gradient(135deg,#221F26_0%,#17141b_48%,#221F26_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              animation: 'gate-grid-drift 6s linear infinite',
            }}
          />

          {/* Gate halves. */}
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

          {/* Center brand lockup. */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-500 ${
              opening ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
            }`}
          >
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-orange-300/35 bg-white/[0.055] shadow-[0_0_70px_rgba(249,115,22,0.28)] backdrop-blur-md" style={{ animation: 'gate-pulse 1.8s ease-in-out infinite' }}>
              <div className="absolute inset-3 rounded-full border border-white/10" />
              <div className="absolute h-px w-[190vw] origin-center bg-gradient-to-r from-transparent via-orange-400/55 to-transparent" style={{ animation: 'gate-line-arm 700ms ease-out 280ms both' }} />
              <div className="absolute h-[190vw] w-px origin-center bg-gradient-to-b from-transparent via-orange-300/15 to-transparent" />
              <div className="absolute inset-2 z-10">
                <Boniean3DLogo speed={0.45} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/12 to-transparent" style={{ animation: 'gate-scan 1.25s ease-in-out 250ms both' }} />
            </div>

            <div className="mt-7 text-center" style={{ animation: 'gate-logo-lock 780ms ease-out 120ms both' }}>
              <div className="text-sm font-semibold uppercase tracking-[0.42em] text-orange-200/90 sm:text-base">
                BONiEAN
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.28em] text-orange-50/70 sm:text-sm">
                Systems Online
              </div>
            </div>
          </div>

          {/* Opening seam flash. */}
          <div
            className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-300 to-transparent shadow-[0_0_30px_rgba(249,115,22,0.9)] transition-all ${
              opening ? 'opacity-0 scale-y-125' : 'opacity-100 scale-y-100'
            }`}
            style={{ transitionDuration: `${openAnimationMs}ms`, transitionTimingFunction: 'ease-out' }}
          />
        </div>
      )}
    </div>
  );
};
