/** @format */

"use client";

import { PinContainer } from "@/components/pin-card";
import Image from "next/image";

export const FounderSection = () => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Stephen Adebayo – Full Stack Developer"
        href="https://github.com/Stephenadebayoy"
        className="p-0 px-0 w-96 m-0"
        containerClassName="p-0 w-96"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2  h-full ">
          <Image
            src="/images/steve.webp"
            alt="Stephen Adebayo"
            width={0}
            height={0}
            unoptimized
            priority
            style={{ backgroundSize: "contain" }}
            className="w-full  h-96 border border-white/10 rounded-lg shadow-lg"
          />
          <h3 className="mt-4 font-bold  text-base text-slate-100">
            Stephen Adebayo{" "}
          </h3>
          <div className="text-sm  !m-0 !p-0 font-normal">
            <span className="text-white ">
              Founder & Developer of this Portfolio Template Builder
            </span>
          </div>
          <p className="text-gray-500 mt-4 ">
            He built this portfolio template to help developers, designers, and
            creators showcase their personal brand with ease — no complex setup,
            just clean design and smooth customization.
          </p>
        </div>
      </PinContainer>
    </div>
    // <PinContainer
    //   title="Stephen Adebayo – Full Stack Developer"
    //   href="https://github.com/Stephenadebayoy"
    //   containerClassName="w-full flex justify-center"
    // >
    //   <div className="flex flex-col items-center justify-center space-y-4">
    //     <Image
    //       src="/images/steve.webp"
    //       alt="Stephen Adebayo"
    //       width={120}
    //       height={120}
    //       className="rounded-full border border-white/10 shadow-lg"
    //     />
    //     <h3 className="text-white text-lg font-semibold">Stephen Adebayo</h3>
    //     <p className="text-sm text-gray-400">Full Stack Developer & Founder</p>
    //   </div>
    // </PinContainer>
  );
};

export default FounderSection;
