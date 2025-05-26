/** @format */
"use client";
import GradientText from "@/components/gradient-text";
import { TextHoverEffect } from "@/components/text-hover";
import React from "react";
import ImageCarousel from "../components/image-carosuel";
import { ShimmerButton } from "@/components/shimmer-btn";
import BlurIn from "@packages/_shared/animations/blur-animation";
import AnimatedContainer from "@/components/framer/animate-div";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const sampleImages = [
    {
      id: 1,
      text: "",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      text: "",
      image:
        "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      text: "",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      text: "",
      image:
        "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className=" max-w-screen-custom px-4 mx-auto">
      <section className="">
        <TextHoverEffect text="Portlify " />
      </section>

      <BlurIn
        word={
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 text-center w-4/5 mx-auto"
            style={{
              lineHeight: "80px",
              transform: "perspective(500px) rotateX(0deg)",
              textShadow: `
      0 1px 1px rgba(0,0,0,0.15),
      0 2px 2px rgba(0,0,0,0.1),
      0 3px 3px rgba(0,0,0,0.05)
    `,
              transformStyle: "preserve-3d",
              transition: "transform 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "perspective(500px) rotateX(15deg) translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                "perspective(500px) rotateX(0deg)")
            }
          >
            Build Your Stunning{" "}
            <GradientText
              colors={["#ffffff", "#512da8", "#40ffaa", "#512da8", "#512da8"]}
              animationSpeed={10}
              showBorder={false}
              className="   "
            >
              Portfolio{" "}
            </GradientText>
            in Minutes
          </h1>
        }
      />

      <AnimatedContainer className="w-1/2 mx-auto">
        <p className=" text-xl text-center  ">
          No coding needed. Choose a template, customize your style, and launch
          your personal brand with ease.
        </p>
      </AnimatedContainer>
      <AnimatedContainer className="flex justify-center mt-6">
        <ShimmerButton
          borderRadius="30px"
          background="#512da8"
          onClick={() => router.push("/auth/register")}
        >
          <p className="text-sm">Get Started Free</p>
        </ShimmerButton>
      </AnimatedContainer>
      <AnimatedContainer>
        <ImageCarousel items={sampleImages} />
      </AnimatedContainer>
    </div>
  );
};

export default HeroSection;
