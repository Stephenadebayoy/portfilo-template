/** @format */
"use client";
import { features } from "@/_shared/_utils/data";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import AnimatedContainer from "@/components/framer/animate-div";
import { MagicCard } from "@/components/magic-card";
import { ShimmerButton } from "@/components/shimmer-btn";
import React from "react";

export const FeatureSection = () => {
  return (
    <section className=" px-4 max-w-7xl mx-auto text-center">
      <AnimatedContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Choose Our Portfolio Builder?
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          We’ve simplified everything. Select a template, fill a form, and go
          live with a responsive, SEO-ready portfolio that stands out.
        </p>
      </AnimatedContainer>

      <AnimatedContainer className="">
        <div className="grid w-1/2 grid-cols-1 mx-auto gap-8  md:grid-cols-2 ">
          {features.map((feature, i) => (
            <MagicCard
              gradientColor={"#262626"}
              className="p-0 rounded-2xl relative"
              key={i}
            >
              <CardContainer key={i} containerClassName="w-full cursor-pointer">
                <CardBody className="w-full h-full">
                  <CardItem
                    translateZ={40}
                    className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 w-full text-left text-white shadow-xl h-72 border border-zinc-700 flex flex-col justify-center  "
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                    <a className="mt-4" href="/templates">
                      <ShimmerButton
                        background="#1f1f1f"
                        borderRadius="40px"
                        className="h-10 w-36 shadow-md pt-0 py-0 m-0 my-0"
                      >
                        <p className="text-sm font-medium"> Explore Now</p>
                      </ShimmerButton>
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </MagicCard>
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
};
