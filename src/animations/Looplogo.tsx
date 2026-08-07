import { useEffect, useRef } from 'react';
import { IoIosStarOutline } from "react-icons/io";
import sonicRunning from "../assets/sonic-running.gif"

import gsap from 'gsap';

export interface LoopItem {
  name: string;
  href?: string;
}

export interface LogoLoopProps {
  items: LoopItem[];
  speed?: number;
  direction?: 'left' | 'right';
  fontSize?: number;
  gap?: number;
  pauseOnHover?: boolean;
  className?: string;
  textColor?: string;
  fontFamily?: string;
}

function LogoLoop({
  items,
  speed = 100,
  direction = 'left',
  fontSize = 48,
  gap = 60,
  pauseOnHover = true,
  className = '',
  textColor = '#000',
  fontFamily = "'Domine', serif",
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstSet = track.querySelector('[data-set="0"]') as HTMLElement;
    if (!firstSet) return;

    // Small delay to let fonts render
    const timer = setTimeout(() => {
      const setWidth = firstSet.offsetWidth;
      if (setWidth === 0) return;

      if (tweenRef.current) {
        tweenRef.current.kill();
      }

      const duration = setWidth / speed;

      gsap.set(track, { x: direction === 'right' ? -setWidth : 0 });

      tweenRef.current = gsap.to(track, {
        x: direction === 'left' ? -setWidth : 0,
        duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            const val = parseFloat(String(x));
            return ((val % setWidth) + setWidth) % setWidth * (direction === 'left' ? -1 : 1);
          }),
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
      }
    };
  }, [items, speed, direction, gap, fontSize]);

  const handleMouseEnter = () => {
    if (pauseOnHover && tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5, ease: 'power2.in' });
    }
  };

  const copies = 4;

  return (
    <div
      className={`overflow-hidden w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
        style={{ width: 'max-content' }}
      >
        {Array.from({ length: copies }, (_, copyIndex) => (
          <div
            key={copyIndex}
            data-set={copyIndex}
            className="flex items-center shrink-0"
            style={{ gap: `${gap}px`, paddingRight: `${gap}px` }}
          >
            {items.map((item, i) => (
                <>
                  <img width={70} src={sonicRunning} alt="" />
                <span
                key={i}
                className="shrink-0 select-none  whitespace-nowrap"
                style={{
                  fontSize: `${fontSize}px`,
                  fontFamily,
                  color: textColor,
                  fontWeight: 700,
                }}
              >
                {item.name}
              </span>
                
                </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoLoop;