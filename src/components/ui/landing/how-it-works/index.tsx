/** @format */

import AnimatedContainer from "@/components/framer/animate-div";
import { StickyScroll } from "@/components/sticky-scroll";
import React from "react";

const HowItWorks = () => {
  const howItWorksContent = [
    {
      title: "Choose a Template",
      description:
        "Start by selecting a professionally designed template that suits your content and goals.",
      content: (
        <img
          src="/images/choose.webp"
          alt="Choose Template"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Customize Your Content",
      description:
        "With our intuitive inline editing feature, simply click on any text or image to instantly edit it—no need for complex code. You can easily update your content to reflect your brand’s voice or remove unwanted elements with just a click. It's that simple!",
      content: (
        <img
          src="/images/customize.png"
          alt="Customize Content"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Publish Instantly",
      description:
        "Launch your site or share your content with just one click. It’s live in seconds!",
      content: (
        <img
          src="/images/publish.png"
          alt="Publish Instantly"
          className="h-full w-  object-cover"
        />
      ),
    },
    {
      title: "",
      description: "",
      content: (
        <img
          src="/images/publish.png"
          alt="Publish Instantly"
          className="h-full w-  object-cover"
        />
      ),
    },
  ];

  return (
    <div className="pt-20  max-w-screen-custom px-4 mx-auto">
      <AnimatedContainer className="mb-12  ">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className=" w-[500px] text-base text-slate-300">
          Create and launch your website in three simple steps. Whether
          you&apos;re building a personal blog or a business site, our platform
          makes it effortless.
        </p>
      </AnimatedContainer>
      <AnimatedContainer>
        <StickyScroll content={howItWorksContent} />
      </AnimatedContainer>{" "}
    </div>
  );
};

export default HowItWorks;
