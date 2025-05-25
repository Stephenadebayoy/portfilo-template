/** @format */

"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparkleEffectProps {
  children: ReactNode;
  colors?: {
    first: string;
    second: string;
  };
  sparklesCount?: number;
}

const LoveSparkEffect: React.FC<SparkleEffectProps> = ({
  children,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  sparklesCount = 10,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const generateSparkle = (): Sparkle => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeSparkles = () => {
      const newSparkles = Array.from(
        { length: sparklesCount },
        generateSparkle
      );
      setSparkles(newSparkles);
    };

    const updateSparkles = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((sparkle) => {
          if (sparkle.lifespan <= 0) {
            return generateSparkle();
          } else {
            return { ...sparkle, lifespan: sparkle.lifespan - 0.1 };
          }
        })
      );
    };

    if (showSparkles) {
      initializeSparkles();
      const interval = setInterval(updateSparkles, 100);
      return () => clearInterval(interval);
    }
  }, [showSparkles, colors.first, colors.second, sparklesCount]);

  return (
    <div
      className="relative inline-block z-30"
      onMouseEnter={() => setShowSparkles(true)}
      onMouseLeave={() => setShowSparkles(false)}
    >
      {showSparkles && (
        <>
          {sparkles.map((sparkle) => (
            <Sparkle key={sparkle.id} {...sparkle} />
          ))}
        </>
      )}
      {children}
    </div>
  );
};

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={color}
      />
    </motion.svg>
  );
};

export default LoveSparkEffect;
