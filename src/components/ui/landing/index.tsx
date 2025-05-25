/** @format */

import React from "react";
import HeroSection from "./hero-section";
import { FeatureSection } from "./feature-section";
import HowItWorks from "./how-it-works";
import AllTemplateDesign from "./all-templates-feature";
import FeatureScroller from "./feature";
import { AnimatedTestimonialsDemo } from "./testimonial";

const LandingPageComponent = () => {
  return (
    <div className="pt-32">
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <AllTemplateDesign />
      <FeatureScroller />
      <AnimatedTestimonialsDemo />
    </div>
  );
};

export default LandingPageComponent;
