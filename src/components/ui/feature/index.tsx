/** @format */

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Eye,
  Globe,
  Laptop,
  MousePointer,
  Smartphone,
  SquareArrowOutUpRight,
  X,
  Zap,
} from "lucide-react";
import { Button, Tabs, TabsList, TabsTrigger } from "@packages/_shared";
import { ShimmerButton } from "@/components/shimmer-btn";
import AnimatedContainer from "@/components/framer/animate-div";
import { useRouter } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Image from "next/image";
import GradientText from "@/components/gradient-text";

const features = [
  {
    id: "templates",
    icon: <Laptop className="h-6 w-6" />,
    emoji: "🎨",
    title: "15+ Professional Templates",
    description:
      "Choose from a growing collection of beautifully crafted portfolio templates, designed to impress.",
    color: "from-violet-600 to-indigo-600",
    glowColor: "group-hover:shadow-violet-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["design"],
  },
  {
    id: "editing",
    icon: <MousePointer className="h-6 w-6" />,
    emoji: "👆",
    title: "Click-to-Edit Inline Editing",
    description:
      "No complicated interfaces. Just click on any text, section, or image and start editing directly.",
    color: "from-blue-600 to-cyan-600",
    glowColor: "group-hover:shadow-blue-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["usability"],
  },
  {
    id: "preview",
    icon: <Eye className="h-6 w-6" />,
    emoji: "🔍",
    title: "Live Template Preview",
    description:
      "Instantly preview templates in real-time before making any changes or committing to one.",
    color: "from-amber-500 to-orange-600",
    glowColor: "group-hover:shadow-amber-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["design"],
  },
  {
    id: "no-code",
    icon: <Code className="h-6 w-6" />,
    emoji: "💻",
    title: "No Coding Required",
    description:
      "Built for designers, freelancers, and developers alike—no technical skills needed.",
    color: "from-green-500 to-emerald-600",
    glowColor: "group-hover:shadow-green-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["usability"],
  },
  {
    id: "export",
    icon: <Zap className="h-6 w-6" />,
    emoji: "⚡",
    title: "Export Your Work Easily",
    description:
      "Download as a Next.js project, export as static HTML/CSS, or deploy directly to Vercel with one click.",
    color: "from-pink-600 to-rose-600",
    glowColor: "group-hover:shadow-pink-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["usability"],
  },
  {
    id: "domain",
    icon: <Globe className="h-6 w-6" />,
    emoji: "🌐",
    title: "Custom Domain Ready",
    description:
      "Host anywhere and easily connect your custom domain after publishing your portfolio.",
    color: "from-violet-500 to-purple-600",
    glowColor: "group-hover:shadow-violet-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["technical"],
  },
  {
    id: "responsive",
    icon: <Smartphone className="h-6 w-6" />,
    emoji: "📱",
    title: "Mobile Responsive Designs",
    description:
      "Every template is fully responsive—your portfolio will look great on any device.",
    color: "from-red-500 to-orange-600",
    glowColor: "group-hover:shadow-red-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["design"],
  },
  {
    id: "nextjs",
    icon: <Code className="h-6 w-6" />,
    emoji: "🛠️",
    title: "Built with Next.js & TypeScript",
    description:
      "Enjoy fast performance, modern architecture, and developer-friendly tooling.",
    color: "from-sky-500 to-blue-600",
    glowColor: "group-hover:shadow-sky-900/20",
    image: "/placeholder.svg?height=400&width=600",
    categories: ["technical"],
  },
  //   {
  //     id: "opensource",
  //     icon: <Code className="h-6 w-6" />,
  //     emoji: "🤝",
  //     title: "Open Source & Community-Driven",
  //     description:
  //       "Completely free and open source—fork, contribute, and build with the community.",
  //     color: "from-teal-500 to-green-600",
  //     glowColor: "group-hover:shadow-teal-900/20",
  //     image: "/placeholder.svg?height=400&width=600",
  //     categories: ["technical"],
  //   },
];

const FeatureComponent = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [active, setActive] = useState<
    (typeof features)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as any, () => setActive(null));

  const filteredFeatures = features.filter((feature) => {
    if (activeTab === "all") return true;
    return feature.categories.includes(activeTab);
  });

  return (
    <section className="pt-32 pb-16 px-4 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
      <div className=" max-w-screen-custom px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <GradientText
              colors={["#ffffff", "#512da8", "#40ffaa", "#512da8", "#512da8"]}
              animationSpeed={10}
              showBorder={false}
              className="   "
            >
              Powerful Features
            </GradientText>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Everything you need to create a stunning portfolio website without
            writing a single line of code.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-12"
        >
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-1 border border-white/10  ">
              <TabsTrigger
                value="all"
                className="px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:via-[#424242] data-[state=active]:text-white 
     data-[state=active]:from-[#666666] via-[#424242] data-[state=active]:to-[#666666] shadow-md"
              >
                All Features
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:via-[#424242] data-[state=active]:text-white 
     data-[state=active]:from-[#666666] via-[#424242] data-[state=active]:to-[#666666] shadow-md"
              >
                Design
              </TabsTrigger>
              <TabsTrigger
                value="usability"
                className="px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:via-[#424242] data-[state=active]:text-white 
     data-[state=active]:from-[#666666] via-[#424242] data-[state=active]:to-[#666666] shadow-md"
              >
                Usability
              </TabsTrigger>
              <TabsTrigger
                value="technical"
                className="px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:via-[#424242] data-[state=active]:text-white 
     data-[state=active]:from-[#666666] via-[#424242] data-[state=active]:to-[#666666] shadow-md"
              >
                Technical
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm  h-full w-full z-10"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed w-96 mx-auto inset-0 grid place-items-center z-40">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center  rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <X />
              </motion.button>

              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full h-full md:h-fit md:max-h-[90%] flex flex-col  dark:bg-neutral-900 sm:rounded-xl overflow-hidden"
              >
                <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className={`bg-gradient-to-r ${active.color} w-full h-48 flex items-center justify-center`}
                >
                  <div className="text-6xl">{active.emoji}</div>
                </motion.div>

                <div className="p-6 bg-white/10 backdrop-blur-md">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-white dark:text-neutral-200 text-lg"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-gray-200 dark:text-neutral-400 text-sm mt-2"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                    <div className="shrink-0">{active.icon}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredFeatures.map((feature) => (
            <motion.div
              layoutId={`card-${feature.title}-${id}`}
              key={feature.id}
              onClick={() => setActive(feature)}
              className={`group p-6  ${feature.glowColor} backdrop-blur-md border border-white/20 rounded-lg p-5 hover:shadow-md  transition-all cursor-pointer bg-white/5 `}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col gap-4">
                <motion.div
                  layoutId={`image-${feature.title}-${id}`}
                  className={`bg-gradient-to-r ${feature.color} w-full h-32 rounded-lg flex items-center justify-center text-4xl`}
                >
                  {feature.emoji}
                </motion.div>

                <div className="flex items-center  gap-4">
                  <div className="mt-1 shrink-0">{feature.icon}</div>

                  <motion.h3
                    layoutId={`title-${feature.title}-${id}`}
                    className="font-medium text-white dark:text-neutral-200 "
                  >
                    {feature.title}
                  </motion.h3>
                </div>
                <motion.p
                  layoutId={`description-${feature.description}-${id}`}
                  className="text-gray-400 text-[15px] leading-relaxed dark:text-neutral-400 mt-1"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 rounded-2xl overflow-hidden border border-zinc-800 backdrop-blur-sm "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block rounded-full   py-1.5 text-sm font-medium uppercase tracking-widest text-blue-400 mb-6">
                Featured Highlight
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Create Your Dream Portfolio in Minutes
              </h3>
              <p className="text-zinc-400 mb-6">
                Our intuitive editor combines the power of professional design
                with the simplicity of click-to-edit functionality. Choose a
                template, customize it to your liking, and publish your
                portfolio in just a few clicks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/70 text-white"
                >
                  Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  View Templates
                </Button>
              </div>
            </div>
            <div className="relative w-full h-full group">
              {/* Image */}
              <Image
                src="/images/preview.png"
                alt="Portfolio Builder Demo"
                className="absolute inset-0 w-full h-full object-contain"
                fill
              />

              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <a
                className="absolute top-4 left-4 bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium backdrop-blur-md border border-white/20 shadow-md opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300"
                href="https://my-portfolio-gilt-alpha-40.vercel.app/"
                target="_blank"
              >
                <SquareArrowOutUpRight size={16} className=" w-4 h-4 " />
                Live Preview
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Templates", value: "15+" },
            { label: "Happy Users", value: "10k+" },
            { label: "Portfolios Created", value: "25k+" },
            { label: "Countries", value: "120+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-cyan-200">
                {stat.value}
              </div>
              <div className="text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to build your portfolio?
          </h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have created stunning portfolios
            with our template builder.
          </p>
          <AnimatedContainer className="flex justify-center mt-6">
            <ShimmerButton
              background="#1f1f1f"
              borderRadius="40px"
              className="h-10 w-40 shadow-md pt-0 py-0 m-0 my-0"
              onClick={() => router.push("/auth/register")}
            >
              <p className="text-sm">Get Started for Free</p>
            </ShimmerButton>
          </AnimatedContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComponent;
