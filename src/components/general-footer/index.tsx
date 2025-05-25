/** @format */

import React from "react";

const GeneralFooter = () => {
  return (
    <section className="bg-white">
      <div className="flex  max-w-screen-custom px-4 mx-auto items-center justify-between  h-20">
        <div>
          <h1 className="font-semibold text-[#1f1f1f] text-2xl uppercase tracking-wide">
            Portfolio Builder
          </h1>
          <p className="text-sm mt-2 text-[#1f1f1f]">
            &copy; {new Date().getFullYear()} Builder. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralFooter;
