/** @format */

"use client";

import React, { useState } from "react";
import ImageComponent from "next/image";
import AnimatedContainer from "@/components/framer/animate-div";
import CustomDrawer from "@/components/edit-drawer";
import { Template } from "@/types/types";
import { HeroEditorForm } from "./components";
import { useHeroSection } from "@/hooks/useHeroSection";
import { Button } from "@packages/_shared";
import { Edit, Mail, Trash2 } from "lucide-react";
import { SOCIAL_PLATFORMS } from "@/_shared/_utils/data";
import { SocialMediaEditor } from "@/components/edit-components/social-media-edit-links";

interface Props {
  data: Template;
}

export const Template1Editor = ({ data }: Props) => {
  const {
    isOpen,
    setIsOpen,
    greetingId,
    titleId,
    descId,
    greeting,
    title,
    description,
    greetingStyles,
    titleStyles,
    descStyles,
    handleFieldClick,
    submitData,
  } = useHeroSection(String(data.id), {
    title: data.title,
    description: data.description ?? "",
  });

  const socialsArray = Object.entries(data.socials ?? {})
    .filter(([url]) => url)
    .map(([platform, url]) => ({ platform, url: url! }));
  const [socials, setSocials] = useState(socialsArray);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex">
      <section
        className={`${
          isOpen ? "mr-[400px]" : "mr-0"
        } transition-all duration-300 ease-in-out flex-1`}
      >
        <section className="flex min-h-screen">
          <div className="flex-1 bg-gray-100 relative transition-[margin] duration-300 ease-in-out">
            <div className="absolute top-0 right-0 w-32 h-full bg-black transform skew-x-12 origin-top-right"></div>
            <div className="relative z-10 flex ml-auto flex-col justify-center h-full px-8 md:px-16 lg:px-24">
              <AnimatedContainer className="gap-3 flex flex-col w-3/4 2xl:w-1/2 ml-auto">
                <h2
                  id={greetingId}
                  className={`cursor-pointer ${
                    greetingStyles.fontSize ? "" : "text-lg md:text-xl"
                  }`}
                  onClick={() => handleFieldClick(greetingId, greeting)}
                  style={{
                    color: greetingStyles.color,
                    fontFamily: greetingStyles.fontFamily,
                    ...(greetingStyles.fontSize
                      ? { fontSize: greetingStyles.fontSize }
                      : {}),
                  }}
                >
                  {greeting}
                </h2>

                <h1
                  id={titleId}
                  className={`cursor-pointer font-bold whitespace-pre-line ${
                    titleStyles.fontSize
                      ? ""
                      : "!text-4xl md:!text-5xl lg:!text-6xl"
                  }`}
                  onClick={() => handleFieldClick(titleId, title)}
                  style={{
                    color: titleStyles.color,
                    fontFamily: titleStyles.fontFamily,
                    ...(titleStyles.fontSize
                      ? { fontSize: titleStyles.fontSize }
                      : {}),
                  }}
                >
                  {title}
                </h1>

                <p
                  id={descId}
                  className={`cursor-pointer whitespace-pre-line ${
                    descStyles.fontSize ? "" : "md:text-base"
                  }`}
                  onClick={() => handleFieldClick(descId, description)}
                  style={{
                    color: descStyles.color,
                    fontFamily: descStyles.fontFamily,
                    ...(descStyles.fontSize
                      ? { fontSize: descStyles.fontSize }
                      : {}),
                  }}
                >
                  {description}
                </p>
                <SocialMediaEditor
                  defaultSocialMedia={socials}
                  onChange={setSocials}
                  renderSocialCard={({
                    social,

                    onEdit,
                    onRemove,
                  }) => {
                    const Icon =
                      SOCIAL_PLATFORMS.find((p) => p.value === social.platform)
                        ?.icon || Mail;
                    return (
                      <div key={social.platform} className="custom-social-card">
                        <div className="group relative flex items-center gap-2 bg-black text-white rounded-full p-3 transition-colors">
                          <Icon className="w-5 h-5" />

                          {/* {editMode && ( */}
                          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 bg-white w-6 p-0"
                              onClick={() =>
                                onEdit(social.platform, social.url)
                              }
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0 bg-white"
                              onClick={() => onRemove(social.platform)}
                            >
                              <Trash2 className="w-3 h-3 text-black" />
                            </Button>
                          </div>
                          {/* )} */}
                        </div>
                        {/* {editMode && ( */}
                        <>
                          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 bg-white w-6 p-0"
                              onClick={() =>
                                onEdit(social.platform, social.url)
                              }
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0 bg-white"
                              onClick={() => onRemove(social.platform)}
                            >
                              <Trash2 className="w-3 h-3 text-black" />
                            </Button>
                          </div>
                        </>
                        {/* )} */}
                      </div>
                    );
                  }}
                />
              </AnimatedContainer>
            </div>
          </div>
          <div className="flex-1 bg-black relative flex items-center justify-center">
            <div className="relative max-w-md">
              <AnimatedContainer direction="right" className="relative">
                {data.thumbnail ? (
                  <ImageComponent
                    id={`template-${data.id}-thumbnail`}
                    src={data.thumbnail}
                    height={350}
                    width={350}
                    alt={`${data.title} Thumbnail`}
                    priority
                  />
                ) : null}
              </AnimatedContainer>
            </div>
          </div>
        </section>
      </section>

      <CustomDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit content"
        drawerWidth={400}
      >
        <HeroEditorForm
          submitData={submitData}
          onClose={() => setIsOpen(false)}
        />
      </CustomDrawer>
    </div>
  );
};
