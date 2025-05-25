/** @format */

import AnimatedContainer from "@/components/framer/animate-div";
import { InfiniteMovingCards } from "@/components/infinity-scrolling";

const features = [
  {
    quote:
      "Customize your layout visually in real-time with our drag-and-drop editor.",
    name: "Drag & Drop",
    title: "Live Preview Editor",
  },
  {
    quote: "Connect your custom domain and make your portfolio truly yours.",
    name: "Custom Domains",
    title: "Brand it your way",
  },
  {
    quote:
      "Easily integrate Google Analytics to track visitors and engagement.",
    name: "Analytics",
    title: "Google Integration",
  },
  {
    quote: "Get discovered with SEO-optimized pages and metadata.",
    name: "SEO",
    title: "Optimized for Google",
  },
  {
    quote: "Allow visitors to contact you directly from your portfolio.",
    name: "Contact Form",
    title: "Built-in & Customizable",
  },
  {
    quote: "Switch between dark and light themes effortlessly.",
    name: "Themes",
    title: "Dark/Light Mode",
  },
];

export default function FeatureScroller() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <AnimatedContainer>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-[#1f1f1f]">
          Powerful Features for Your Portfolio
        </h2>
      </AnimatedContainer>
      <InfiniteMovingCards
        items={features}
        direction="left"
        speed="normal"
        className="mx-auto"
      />
    </section>
  );
}
