/** @format */
"use client";
import { templates } from "@/_shared/_utils/data";
import AnimatedContainer from "@/components/framer/animate-div";
import { Button } from "@packages/_shared";
// import { toast } from "@packages/_shared/toaster/toaster-provider";
import { ThumbsUp, X } from "lucide-react";
import React, { useEffect, useId, useRef, useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRouter } from "next/navigation";
import { ImageComponent } from "@/components/imageComponent";

const ListOfTemplate = () => {
  const router = useRouter();
  const [active, setActive] = useState<
    (typeof templates)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
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

  const featured = templates[2];
  const [selectedTemplate, setSelectedTemplate] = useState<
    (typeof templates)[0] | null
  >(null);

  const handleClick = (template: (typeof templates)[0]) => {
    setSelectedTemplate(template);
  };
  // const handleToaster = () => {
  //   toast({
  //     title: "Coming Soon 🚧",
  //     description:
  //       "This open-source template will be available soon. Stay tuned for the release!",
  //     duration: 5000,
  //     type: "neutral",
  //     direction: "top-right",
  //   });
  // };

  const handleClickNav = (template: number) => {
    router.push(`/preview/${template}`);
  };

  return (
    <div>
      <AnimatedContainer className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🔥 Featured Template
        </h2>

        <div className="bg-gray-900 h-fit rounded-xl overflow-hidden w-full shadow-lg md:flex items-center gap-6 p-6">
          <div className="relative w-1/2 h-full">
            {featured?.thumbnail && (
              <ImageComponent
                src={featured.thumbnail}
                alt={featured.title ?? ""}
                width={0}
                height={0}
                unoptimized
                priority
                className="w-full h-full object-contain"
              />
            )}
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm bg-primary px-4 py-2 rounded-md flex items-center gap-2"
              >
                <SquareArrowOutUpRight size={18} />
                Live View
              </a>
            </div>
          </div>

          <AnimatedContainer>
            <h3 className="text-2xl font-semibold mb-2">{featured.title}</h3>
            <p className="text-gray-400 mb-4">
              A high-quality, modern design perfect for portfolios, landing
              pages, and more.
            </p>
            <Button
              onClick={() => handleClick(featured)}
              className="inline-block text-sm bg-primary text-white px-5 py-2 rounded-md font-semibold transition"
            >
              Preview Template
            </Button>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm  h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <div id="all-templates" className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold   mb-12">
          📁 All Templates
        </h2>
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
                <div className="p-4 bg-white/10 backdrop-blur-md">
                  {selectedTemplate && (
                    <div className=" h-full space-y-4">
                      <div className="h-full w-full">
                        <ImageComponent
                          src={selectedTemplate.thumbnail}
                          alt={selectedTemplate.title ?? ""}
                          width={0}
                          height={0}
                          className="rounded-lg w-full h-60 object-contain"
                          unoptimized
                          priority
                        />
                      </div>
                      <p className="text-white mt-4">
                        {selectedTemplate.description ||
                          selectedTemplate?.about?.description}
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-100">
                        {selectedTemplate.features?.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      {selectedTemplate?.tools && (
                        <div>
                          <h4 className="text-white font-semibold">Tools</h4>
                          <p className="text-sm mt-1 text-gray-100">
                            {selectedTemplate?.tools.join(", ")}
                          </p>
                        </div>
                      )}

                      <Button
                        // onClick={handleToaster}
                        onClick={() =>
                          handleClickNav(selectedTemplate?.id as any)
                        }
                        className={`w-full py-2  rounded-md text-sm font-semibold  `}
                      >
                        Use Template
                      </Button>

                      {selectedTemplate?.tools && (
                        <a
                          href={selectedTemplate.link}
                          className="flex text-primary justify-center gap-x-2 cursor-pointer"
                        >
                          <SquareArrowOutUpRight
                            size={16}
                            className="relative top-1 text-white"
                          />
                          <h5 className="font-bold relative top-0.5 text-sm text-center text-white">
                            Live view
                          </h5>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {templates.map((template) => (
            <motion.div
              layoutId={`card-${template.title}-${id}`}
              key={template.title}
              onClick={() => setActive(template)}
              className={`group   backdrop-blur-md border border-white/20 rounded-lg  hover:shadow-md  transition-all cursor-pointer bg-white/5 `}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col gap-4">
                <section onClick={() => handleClick(template)}>
                  <motion.div className="relative">
                    <ImageComponent
                      src={template.thumbnail}
                      alt={template.title ?? ""}
                      width={400}
                      height={250}
                      className="w-full h-52 object-contain"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                      <AnimatedContainer className="text-3xl text-white">
                        <ThumbsUp />
                      </AnimatedContainer>
                    </div>
                  </motion.div>

                  <div className="mt-4 p-4 ">
                    <motion.h3 className="text-xl font-semibold mb-1">
                      {template.title}
                    </motion.h3>
                    <motion.p className="text-gray-400 text-sm mb-2">
                      {template.description || template?.about?.description}
                    </motion.p>
                    <section className="flex justify-between items-center">
                      <motion.span className="text-green-400 text-sm font-semibold">
                        {template.available ? "Available" : "Coming soon..."}
                      </motion.span>

                      <motion.div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <span
                              key={index}
                              className={
                                index < template.rating.split("⭐").length - 1
                                  ? "text-yellow"
                                  : "text-gray-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                      </motion.div>
                    </section>
                  </div>
                </section>
                <div className="p-4 ">
                  <Button
                    onClick={() => handleClick(template)}
                    className="inline-block  bg-primary  px-4  w-full  text-sm shadow-md text-white font-semibold  transition"
                  >
                    Preview Template
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfTemplate;
