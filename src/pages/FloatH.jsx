import React, { useMemo } from "react";
import "../styles/H.css";

export default function FloatingHearts({ count = 25 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,           // позиция по ширине
      size: 10 + Math.random() * 30,       // размер
      delay: Math.random() * 10,           // задержка старта
      duration: 8 + Math.random() * 10,    // скорость подъёма
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, [count]);

  return (
    <div className="hearts-bg">
      {hearts.map(h => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
          }}
        >
          💗
        </span>
      ))}
    </div>
  );
}