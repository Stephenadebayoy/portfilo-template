/** @format */

import React from "react";
import Image from "next/image";
import AnimatedContainer from "@/components/framer/animate-div";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full h-[90vh]  flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-smoke.jpg"
            alt="Templates Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        <AnimatedContainer className="relative z-10 px-4 max-w-3xl mx-auto text-white">
          <h1
            style={{ lineHeight: "70px" }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Choose a Professional Portfolio Template{" "}
          </h1>
          <AnimatedContainer className="w-full mx-auto">
            <p className="text-lg text-gray-200 mb-6">
              Professionally designed and fully customizable templates to
              showcase your work beautifully.
            </p>
          </AnimatedContainer>

          <a
            href="#all-templates"
            className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-200 transition"
          >
            Browse Templates
          </a>
        </AnimatedContainer>
      </section>
    </>
  );
};

export default HeroSection;
