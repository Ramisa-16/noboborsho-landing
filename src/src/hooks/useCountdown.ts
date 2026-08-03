import { useState, useEffect, useCallback } from 'react';
import type { CountdownState } from '../types';
import { padStart } from '../utils/helpers';

const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function toBengaliNum(str: string): string {
  return str.split('').map((c) => {
    const idx = parseInt(c, 10);
    return !isNaN(idx) ? bengaliDigits[idx] : c;
  }).join('');
}

function getTargetDate(): Date {
  const now = new Date();
  const target = new Date(now.getFullYear(), 3, 14); // April 14
  if (now > target) {
    target.setFullYear(target.getFullYear() + 1);
  }
  return target;
}

export function useCountdown() {
  const [state, setState] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const tick = useCallback(() => {
    const now = new Date();
    const target = getTargetDate();
    const diff = Math.max(0, target.getTime() - now.getTime());

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }, []);

  useEffect(() => {
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  const display = {
    days: toBengaliNum(padStart(state.days, 2)),
    hours: toBengaliNum(padStart(state.hours, 2)),
    minutes: toBengaliNum(padStart(state.minutes, 2)),
    seconds: toBengaliNum(padStart(state.seconds, 2)),
  };

  return display;
}
