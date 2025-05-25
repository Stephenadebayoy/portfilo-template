/** @format */
"use client";
import { cn } from "@/_shared/_utils/cn";
import { faqData } from "@/_shared/_utils/data";
import AnimatedContainer from "@/components/framer/animate-div";
import GradientText from "@/components/gradient-text";
import { MagicCard } from "@/components/magic-card";
import SearchInput from "@/components/search-input";
import { Button, Skeleton } from "@packages/_shared";
import BlurIn from "@packages/_shared/animations/blur-animation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const FaqComponents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null);
  const [chatView, setChatView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filteredFAQs = faqData.filter(
    (item) =>
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (id: string, index: number) => {
    setSelectedFaq(id);
    setActiveIndex(index);
  };

  const handleNextQuestion = () => {
    if (activeIndex === null || filteredFAQs.length === 0) return;

    const nextIndex = (activeIndex + 1) % filteredFAQs.length;
    setActiveIndex(nextIndex);
    setSelectedFaq(filteredFAQs[nextIndex].id);
  };

  const handlePrevQuestion = () => {
    if (activeIndex === null || filteredFAQs.length === 0) return;

    const prevIndex =
      (activeIndex - 1 + filteredFAQs.length) % filteredFAQs.length;
    setActiveIndex(prevIndex);
    setSelectedFaq(filteredFAQs[prevIndex].id);
  };
  return (
    <div className="pt-32 max-w-screen-custom px-4 mx-auto ">
      <div className="relative max-w-screen-lgs mx-auto h-[500px] pr-4">
        <div className="h-full bg-[#1f1f1f] border border-gray-800 shadow-lg rounded-2xl p-2 ">
          <AnimatedContainer
            direction="zoomIn"
            className="h-full relative top-8 left-6 bg-primary  shadow-xl rounded-2xl z-10"
            style={{
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex p-6 flex-col space-y-3">
              <div className="space-y-2 w-fit p-4 rounded-md bg-white/10 shadow-md backdrop-blur-md border border-white/20">
                <Skeleton className="h-5 w-[250px] bg-white/20" />
                <Skeleton className="h-5 w-[200px] bg-white/20" />
              </div>
              <div className="space-y-2 w-fit p-4 rounded-md shadow-md bg-white/10 backdrop-blur-md border border-white/20">
                <Skeleton className="h-5 w-[200px] bg-white/20" />
              </div>
            </div>

            <section className="absolute left-0 right-0 flex justify-center top-0 items-center h-full">
              <section className="relative">
                <h1 className="text-6xl font-light">
                  I Have a <span className="font-bold">Question</span>
                </h1>
                <section className="absolute top-[-10px] right-[-10px] animate-bounceSlow">
                  <FaQuestion className="text-yellow" size={24} />
                </section>
                <section className="text-xl ">🤔</section>
              </section>
            </section>
            <section className="flex justify-end absolute top-0 right-0">
              <div className="flex p-6 flex-col space-y-3">
                <div className="space-y-2 w-fit p-4 rounded-md bg-white/10 shadow-md backdrop-blur-md border border-white/20">
                  <Skeleton className="h-3 w-[200px] bg-white/20" />
                </div>
              </div>
            </section>
          </AnimatedContainer>
        </div>
      </div>
      <AnimatedContainer className="space-y-2  rounded-md bg-white/10 shadow-md backdrop-blur-md border border-white/20  w-1/2 mx-auto z-30   p-4 relative bottom-4">
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search service you need ..."
          className="bg-transparent text-white"
          iconColor="#ffffff"
        />{" "}
      </AnimatedContainer>
      <section className="mt-10">
        <BlurIn
          word={
            <h1 className="text-4xl font-semibold text-center">
              Frequently{" "}
              <span>
                Asked{" "}
                <GradientText
                  colors={[
                    "#ffffff",
                    "#512da8",
                    "#40ffaa",
                    "#512da8",
                    "#512da8",
                  ]}
                  animationSpeed={10}
                  showBorder={false}
                  className="   "
                >
                  Questions
                </GradientText>{" "}
              </span>{" "}
            </h1>
          }
        />
        <section className="my-16">
          <Button
            variant="outline"
            className={cn(
              "mb-6 flex items-center gap-2 bg-white text-primary font-semibold"
            )}
            onClick={() => setChatView(!chatView)}
          >
            <MessageCircle className="h-4 w-4" />
            {chatView ? "Switch to Card View" : "Switch to Chat View"}
          </Button>
          <section>
            {chatView ? (
              <div className="bg-muted/40 rounded-lg p-6 ">
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {selectedFaq ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-lg">❓</span>
                        </div>
                        <div className="bg-muted rounded-lg p-4 rounded-tl-none">
                          <p className="font-medium">
                            {
                              faqData.find((item) => item.id === selectedFaq)
                                ?.question
                            }
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-lg">💬</span>
                        </div>
                        <div className=" bg-white/10 shadow-md backdrop-blur-md border border-white/20 rounded-lg p-4 rounded-tl-none">
                          <p>
                            {
                              faqData.find((item) => item.id === selectedFaq)
                                ?.answer
                            }
                          </p>
                        </div>
                      </div>
                      <div className="pt-2 flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedFaq(null)}
                          className="bg-white font-semibold"
                        >
                          Back to questions
                        </Button>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="border border-white"
                            onClick={handlePrevQuestion}
                          >
                            <ArrowLeft className="h-4 w-4 text-white" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={handleNextQuestion}
                            className="border border-white"
                          >
                            <ArrowRight className="h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-muted-foreground mb-4">
                        Select a question to see the answer:
                      </p>
                      <AnimatePresence>
                        {filteredFAQs.map((faq, index) => (
                          <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Button
                              variant="ghost"
                              className="w-full justify-between text-left h-auto py-3 px-4 mb-2"
                              onClick={() => handleCardClick(faq.id, index)}
                            >
                              <span>{faq.question}</span>
                              <ArrowRight className="h-4 w-4 shrink-0" />
                            </Button>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFAQs.map((faq, index) => (
                  <AnimatedContainer key={index}>
                    <MagicCard
                      gradientColor={"#262626"}
                      className="p-0 rounded-xl"
                      key={index}
                    >
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <div
                          className={cn(
                            "h-60    shadow-md backdrop-blur-md border border-white/20 rounded-lg p-5 hover:shadow-md transition-all cursor-pointer bg-white/5 relative overflow-hidden",
                            selectedFaq === faq.id ? "ring-2 ring-primary" : ""
                          )}
                          onClick={() => handleCardClick(faq.id, index)}
                        >
                          {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary" /> */}

                          <div className="flex items-center mb-3">
                            <div className="text-2xl mr-2">
                              {faq.question.split(" ")[0]}
                            </div>
                          </div>

                          <h3 className="font-semibold mb-3 group-hover:text-white transition-colors text-white text-lg">
                            {faq.question.split(" ").slice(1).join(" ")}
                          </h3>

                          <div
                            className="relative overflow-hidden transition-all duration-300"
                            style={{
                              maxHeight:
                                selectedFaq === faq.id ? "200px" : "80px",
                            }}
                          >
                            <p className="text-sm text-gray-400">
                              {faq.answer}
                            </p>
                            {selectedFaq !== faq.id && (
                              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-card to-transparent" />
                            )}
                          </div>

                          <div className="mt-3 flex justify-end">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardClick(faq.id, index);
                              }}
                            >
                              {selectedFaq === faq.id
                                ? "Show less"
                                : "Read more"}
                              <ArrowRight
                                className={cn(
                                  "ml-1 h-3 w-3 transition-transform",
                                  selectedFaq === faq.id ? "rotate-90" : ""
                                )}
                              />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </MagicCard>
                  </AnimatedContainer>
                ))}
              </div>
            )}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">
                  No matching questions found. Try a different search term.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-white text-primary font-semibold"
                  onClick={() => setSearchQuery("")}
                >
                  Reset search
                </Button>
              </div>
            )}
          </section>
        </section>
      </section>
    </div>
  );
};

export default FaqComponents;
