/** @format */

"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import AnimatedContainer from "../framer/animate-div";
import { Button } from "@packages/_shared";
import { useRouter } from "next/navigation";
import { ChevronsRight } from "lucide-react";

export const HeroParallax = ({
  products,
  handleClick,
}: {
  // products: {
  //   title: string;
  //   link: string;
  //   thumbnail: string;
  // }[];
  products: any;
  handleClick: (product: any) => void;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product: any) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              handleClick={() => handleClick(product)}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product: any) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              handleClick={() => handleClick(product)}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product: any) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              handleClick={() => handleClick(product)}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const router = useRouter();
  return (
    <AnimatedContainer className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full z-40 left-0 top-0">
      <h1
        className="text-2xl md:text-7xl font-bold dark:text-white"
        style={{ lineHeight: "80px" }}
      >
        Craft Your Perfect <br /> Website
      </h1>
      <p className="max-w-2xl text-base md:text-lg mt-8 dark:text-neutral-200">
        Explore our stunning templates crafted for every purpose—portfolios,
        stores, blogs, and more. Pick one and make it your own with just a few
        clicks. Whether you&apos;re a designer, entrepreneur, or developer, our
        flexible layouts and intuitive tools help you create a
        professional-looking site that reflects your unique style and goals. No
        coding required—just creativity and your vision.
      </p>
      <Button
        onClick={() => router.push("/templates")}
        className="group   mt-6 bg-primary px-4 py-2 w-40 h-14 rounded-full text-sm shadow-md text-white font-semibold flex items-center gap-x-2 transition-all duration-300"
      >
        Explore Now{" "}
        <ChevronsRight className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
      </Button>
    </AnimatedContainer>
  );
};

export const ProductCard = ({
  product,
  translate,
  handleClick,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  handleClick: () => void;
}) => {
  return (
    <>
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product h-96 w-[30rem] relative shrink-0"
        onClick={handleClick}
      >
        <div className="block group-hover/product:shadow-2xl ">
          <img
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
        </div>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    </>
  );
};
