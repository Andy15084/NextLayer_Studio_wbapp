"use client";
import { useEffect, useRef, useState } from "react";

interface TypewriterOnViewProps {
  text: string;
  speed?: number;
  showCursor?: boolean;
  animatedDots?: boolean;
}

export default function TypewriterOnView({ text, speed = 40, showCursor = true, animatedDots = false }: TypewriterOnViewProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursorState, setShowCursorState] = useState(true);
  const [inView, setInView] = useState(false);
  const [dotIndex, setDotIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    setDisplayed("");
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        setTimeout(type, speed);
      }
    };
    type();
  }, [inView, text, speed]);

  // Animated blinking dots (in sequence)
  useEffect(() => {
    if (!inView || !animatedDots) return;
    if (displayed !== text) return;
    const interval = setInterval(() => {
      setDotIndex((d) => (d + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, [inView, displayed, text, animatedDots]);

  // Blinking cursor
  useEffect(() => {
    if (!inView || !showCursor) return;
    const cursorInterval = setInterval(() => {
      setShowCursorState((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [inView, showCursor]);

  return (
    <span ref={ref}>
      {displayed}
      {displayed === text && animatedDots && (
        <span className="inline-block w-6 align-middle" style={{ color: "inherit" }}>
          <span className={dotIndex > 0 ? "opacity-100" : "opacity-30"}>.</span>
          <span className={dotIndex > 1 ? "opacity-100" : "opacity-30"}>.</span>
          <span className={dotIndex > 2 ? "opacity-100" : "opacity-30"}>.</span>
        </span>
      )}
      {showCursor && (
        <span className="inline-block w-2 align-middle" style={{ color: "inherit" }}>
          {showCursorState ? "|" : " "}
        </span>
      )}
    </span>
  );
} 