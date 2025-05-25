/** @format */
"use client";
import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

interface ICarouselItem {
  id: number;
  text: string;
  image: string;
}

interface IImageCarouselProps {
  items: ICarouselItem[];
}

export default function ImageCarousel({
  items: initialItems,
}: IImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialItems.length);
  };

  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + initialItems.length) % initialItems.length
  //   );
  // };

  const visibleIndices = [
    (currentIndex - 1 + initialItems.length) % initialItems.length,
    currentIndex,
    (currentIndex + 1) % initialItems.length,
  ];

  const visibleItems = visibleIndices.map((index) => initialItems[index]);

  return (
    <div
      className="carousel-container relative h-[500px] w-full overflow-hidden    p-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* <div
        onClick={handlePrev}
        className="navigation-item-left absolute left-0 top-[50%] z-20 flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg bg-gray-400 bg-opacity-40 bg-clip-padding backdrop-blur-sm backdrop-filter"
      >
        <ChevronLeft className="text-gray-800" />
      </div>
      <div
        onClick={handleNext}
        className="navigation-item-right absolute right-0 top-[50%] z-20 flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg bg-gray-300 bg-opacity-40 bg-clip-padding backdrop-blur-sm backdrop-filter"
      >
        <ChevronRight className="text-gray-800" />
      </div> */}
      {visibleItems.map((item, index) => (
        <div
          key={item.id}
          className="absolute left-[50%] top-[20%] z-10 h-[250px] w-[200px] rounded-xl  transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            transform:
              index === 1
                ? "translateX(-50%) scale(1.1)"
                : index === 0
                ? "translateX(-150%) rotate(-20deg)"
                : "translateX(50%) rotate(20deg)",
            transition: "transform 0.7s ease, filter 0.7s ease",
            filter: index === 1 ? "none" : "blur(4px)",
            zIndex: index === 1 ? 3 : 1,
          }}
        ></div>
      ))}
    </div>
  );
}
