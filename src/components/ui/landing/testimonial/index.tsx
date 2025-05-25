/** @format */

import { testimonials } from "@/_shared/_utils/data";
import { AnimatedTestimonials } from "@/components/testimonial-animate";
import { TypewriterEffectSmooth } from "@/components/typewriter";

export function AnimatedTestimonialsDemo() {
  const words = [
    {
      text: "What",
    },
    {
      text: "People",
    },
    {
      text: "Are",
    },
    {
      text: "Saying",
    },
  ];
  return (
    <section className="max-w-screen-custom pt-20 px-4 mx-auto">
      <TypewriterEffectSmooth
        words={words}
        cursorClassName="bg-white"
        className="text-white justify-center"
        textStyle="text-white"
      />

      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
