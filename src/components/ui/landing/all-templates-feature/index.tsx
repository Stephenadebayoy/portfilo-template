/** @format */
"use client";
import { templates } from "@/_shared/_utils/data";
import { HeroParallax } from "@/components/hero-parallex";
import Modal from "@/components/modal";
import { Button } from "@packages/_shared";
import { toast } from "@packages/_shared/toaster/toaster-provider";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const AllTemplateDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<
    (typeof templates)[0] | null
  >(null);
  const handleClick = (template: (typeof templates)[0]) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };
  const handleToaster = () => {
    toast({
      title: "Coming Soon 🚧",
      description:
        "This open-source template will be available soon. Stay tuned for the release!",
      duration: 5000,
      type: "neutral",
      direction: "top-right",
    });
  };

  return (
    <>
      <HeroParallax products={templates} handleClick={handleClick} />{" "}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedTemplate?.title}
        className="max-w-96 "
        border
      >
        {selectedTemplate && (
          <div className="p-4 space-y-4">
            <Image
              src={selectedTemplate.thumbnail}
              alt={selectedTemplate.title ?? ""}
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <p className="text-gray-900">{selectedTemplate.description}</p>
            <ul className="list-disc list-inside text-sm text-[#1f1f1f]">
              {selectedTemplate.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {selectedTemplate?.tools && (
              <div>
                <h4 className="text-[#1f1f1f] font-semibold">Tools</h4>
                <p className="text-sm mt-1 text-gray-600">
                  {selectedTemplate?.tools.join(", ")}
                </p>
              </div>
            )}

            <Button
              onClick={handleToaster}
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
                  className="relative top-1 text-primary"
                />
                <h5 className="font-bold relative top-0.5 text-sm text-center ">
                  Live view
                </h5>
              </a>
            )}
          </div>
        )}
      </Modal>
      ;
    </>
  );
};

export default AllTemplateDesign;
