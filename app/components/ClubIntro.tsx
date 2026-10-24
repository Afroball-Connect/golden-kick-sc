'use client';

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';

const SESSION_KEY = 'golden-kick-intro-seen-v1';

interface ClubIntroProps {
  replayToken: number;
  replayTriggerRef: RefObject<HTMLButtonElement | null>;
  onVisibleChange: (visible: boolean) => void;
}

export default function ClubIntro({ replayToken, replayTriggerRef, onVisibleChange }: ClubIntroProps) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [run, setRun] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const closingRef = useRef(false);

  const dismiss = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    const previous = returnFocusRef.current;
    window.setTimeout(() => {
      setOpen(false);
      if (previous?.isConnected) window.setTimeout(() => previous.focus({ preventScroll: true }), 0);
    }, reducedMotion ? 40 : 360);
  }, [reducedMotion]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(SESSION_KEY) === '1';
      if (!alreadySeen) window.sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // Storage can be unavailable in private contexts; the short, skippable intro remains safe.
    }
    if (alreadySeen) return;
    returnFocusRef.current = null;
    closingRef.current = false;
    setRun(value => value + 1);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (replayToken === 0) return;
    returnFocusRef.current = replayTriggerRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(reduce);
    closingRef.current = false;
    setClosing(false);
    setRun(value => value + 1);
    setOpen(true);
  }, [replayToken, replayTriggerRef]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    onVisibleChange(true);
    window.requestAnimationFrame(() => skipRef.current?.focus({ preventScroll: true }));
    const duration = reducedMotion ? 740 : 3900;
    const timer = window.setTimeout(dismiss, duration);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
      } else if (event.key === 'Tab') {
        // The Skip button is intentionally the intro's only focusable control.
        event.preventDefault();
        skipRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      onVisibleChange(false);
      if (skipRef.current === document.activeElement) {
        const previous = returnFocusRef.current;
        if (previous?.isConnected) window.setTimeout(() => previous.focus({ preventScroll: true }), 0);
      }
    };
  }, [open, run, reducedMotion, dismiss, onVisibleChange]);

  if (!open) return null;

  return (
    <div className={`intro-overlay${closing ? ' is-closing' : ''}${reducedMotion ? ' is-reduced' : ''}`} key={run}>
      <section className="intro-dialog" role="dialog" aria-modal="true" aria-labelledby="intro-title" aria-describedby="intro-description">
        <span className="intro-flash" aria-hidden="true" />
        <p className="intro-wordmark"><span className="intro-wordmark-dot" /> GOLDEN KICK SC <span>ACCRA · GHANA</span></p>
        <div className="intro-emblem" aria-hidden="true">
          <span className="intro-orbit" />
          <img src="/images/crest.svg" alt="" />
        </div>
        <p className="intro-kicker">EST. 2016&nbsp; · &nbsp;ROOTED IN ACCRA</p>
        <h1 id="intro-title">BUILT FOR<br /><em>WHAT’S NEXT.</em></h1>
        <p className="intro-description" id="intro-description">Football, development and opportunity.<br />One club. Many dreams.</p>
        <div className="intro-progress" aria-hidden="true"><span /></div>
        <button className="intro-skip" type="button" ref={skipRef} onClick={dismiss} aria-label="Skip the Golden Kick SC introduction">
          SKIP INTRO <span aria-hidden="true">↗</span>
        </button>
      </section>
    </div>
  );
}
