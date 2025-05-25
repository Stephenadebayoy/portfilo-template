/** @format */
"use client";
import { allSkills, SOCIAL_PLATFORMS } from "@/_shared/_utils/data";
import { EditableImage } from "@/components/edit-components/image-edit";
import { SkillsEditor } from "@/components/edit-components/skills/frontend";
import { ProjectEditor } from "@/components/edit-components/skills/project-editor";
import { SocialMediaEditor } from "@/components/edit-components/social-media-edit-links";
import { EditableText } from "@/components/edit-components/text-edit";
import AnimatedContainer from "@/components/framer/animate-div";
import GeneralFooter from "@/components/general-footer";
import { Template } from "@/types/types";
import { Button, Card } from "@packages/_shared";
import { Edit, Mail, Trash2 } from "lucide-react";
import ImageComponent from "next/image";
import { useState } from "react";

interface Props {
  data: Template;
}

export const Template1Editor = ({ data }: Props) => {
  const [skills, setSkills] = useState<any>(() => {
    return (data.skillsSection ?? []).map((title) => {
      const skill = allSkills.find(
        (s) => s.title.toLowerCase() === title.toLowerCase()
      );
      return skill ?? { title, icon: null };
    });
  });
  const [projects, setProjects] = useState<any>(data.projectsSection);

  const socialsArray = Object.entries(data.socials ?? {})
    .filter(([url]) => url)
    .map(([platform, url]) => ({ platform, url: url! }));
  const [socials, setSocials] = useState(socialsArray);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">TG</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            >
              About me
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            >
              Projects
            </button>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 font-medium">
              CONTACT ME
            </Button>
          </div>
        </div>
      </nav>
      <div className="flex min-h-screen ">
        <div className="flex-1 bg-gray-100 relative">
          <div className="absolute top-0 right-0 w-32 h-full bg-black transform skew-x-12 origin-top-right"></div>

          <div
            className="relative z-10 flex max-w-[750px] ml-auto
           flex-col justify-center h-full px-8 md:px-16 lg:px-24"
          >
            <AnimatedContainer className=" gap-3 flex flex-col ">
              <EditableText
                id={`template-${data.id}-greeting`}
                text={"Hi, I am"}
                className="!text-lg md:!text-xl text-gray-600 "
              />

              <EditableText
                id={`template-${data.id}-name`}
                text={data.title}
                className="!text-4xl md:!text-5xl lg:!text-6xl font-bold text-black  leading-tight"
              />

              <EditableText
                id={`template-${data.id}-role`}
                text={data.description ?? ""}
                multiline
                className=" md:!text-base text-gray-600 "
              />
              <SocialMediaEditor
                defaultSocialMedia={socials}
                onChange={setSocials}
                renderSocialCard={({ social, editMode, onEdit, onRemove }) => {
                  const Icon =
                    SOCIAL_PLATFORMS.find((p) => p.value === social.platform)
                      ?.icon || Mail;
                  return (
                    <div key={social.platform} className="custom-social-card">
                      <div className="group relative flex items-center gap-2 bg-black text-white rounded-full p-3 transition-colors">
                        <Icon className="w-5 h-5" />

                        {editMode && (
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
                        )}
                      </div>
                      {editMode && (
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
                      )}
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
              <EditableImage
                id={`template-${data.id}-thumbnail`}
                src={data.thumbnail ?? ""}
                height={350}
                width={350}
              />
            </AnimatedContainer>
          </div>
        </div>
      </div>
      <div id="about" className="bg-white px-8 md:px-16 lg:px-24 py-16">
        <AnimatedContainer className="max-w-5xl flex items-center flex-col gap-4 mx-auto text-center">
          <EditableText
            id={`template-${data.id}-about-title`}
            text={data.about?.title ?? ""}
            className="!text-3xl text-center md:!text-4xl font-bold"
          />
          <EditableText
            id={`template-${data.id}-about-description`}
            text={data?.about?.description ?? ""}
            multiline
            className="text-gray-700 text-center text-lg leading-relaxed"
          />
          <Button className="bg-black text-white hover:bg-gray-800 rounded-md  text-sm font-medium">
            View My Work
          </Button>
        </AnimatedContainer>
      </div>
      <section id="skills" className="max-w-screen-custom mx-auto px-4">
        <AnimatedContainer className=" max-w-5xl mx-auto">
          <h3 className="!text-3xl mb-10 text-center md:!text-4xl font-bold">
            Skills
          </h3>

          <SkillsEditor
            defaultSkills={skills}
            onChange={(updatedSkills) => {
              setSkills(updatedSkills);
            }}
            containerClassName="flex flex-wrap justify-center gap-3"
          />
        </AnimatedContainer>
      </section>
      <section id="projects" className="mt-12 ">
        <AnimatedContainer className="">
          <h3 className="!text-3xl mb-10 text-center md:!text-4xl font-bold">
            Projects
          </h3>
          <section className="h-full max-w-5xl mx-auto px-4">
            <ProjectEditor
              defaultProjects={projects}
              onChange={(updatedProjects) => {
                setProjects(updatedProjects);
              }}
              containerClassName="grid grid-cols-3 w-full items-center gap-3 mb-4 h-full"
              renderProjectCard={({ project, editMode, onEdit, onRemove }) => (
                <Card
                  key={project.id}
                  className="group relative flex flex-col items-center gap-2 rounded-lg h-full"
                >
                  <section className="w-full">
                    {project.thumbnail && (
                      <ImageComponent
                        src={
                          "https://aceternity.com/images/products/thumbnails/new/editorially.png"
                        }
                        width={0}
                        height={0}
                        alt={project.title}
                        priority
                        unoptimized
                        className="w-full h-40 object-cover  mb-2"
                      />
                    )}
                  </section>
                  <section className="w-full p-4 flex flex-col gap-2">
                    <h3 className="font-semibold text-black text-lg">
                      {project.title}
                    </h3>
                    <p className="text-sm  ">{project.description}</p>
                    <section className="w-full flex justify-center items-center rounded-md cursor-pointer bg-black p-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white w-full text-center rounded-md text-sm font-medium"
                      >
                        Visit Link
                      </a>
                    </section>
                  </section>
                  {editMode && (
                    <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 w-6 p-0 bg-white"
                        onClick={() => onEdit && onEdit(project)}
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 w-6 p-0 bg-white"
                        onClick={() => onRemove && onRemove(project.id)}
                      >
                        <Trash2 className="w-3 h-3 text-black" />
                      </Button>
                    </div>
                  )}
                </Card>
              )}
            />
          </section>
        </AnimatedContainer>
      </section>
      <section className="mt-10">
        <GeneralFooter />
      </section>{" "}
    </div>
  );
};
