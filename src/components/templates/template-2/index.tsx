/** @format */

import { allSkills, SOCIAL_PLATFORMS } from "@/_shared/_utils/data";
import { EditableImage } from "@/components/edit-components/image-edit";
import { SkillsEditor } from "@/components/edit-components/skills/frontend";
import { ProjectEditor } from "@/components/edit-components/skills/project-editor";
import { SocialMediaEditor } from "@/components/edit-components/social-media-edit-links";
import { EditableText } from "@/components/edit-components/text-edit";
import AnimatedContainer from "@/components/framer/animate-div";
import GeneralFooter from "@/components/general-footer";
import { Project, Template } from "@/types/types";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@packages/_shared";
import BlurIn from "@packages/_shared/animations/blur-animation";
import { Badge } from "@packages/_shared/badge";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  Users,
  TrendingUp,
  Target,
  Edit,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  data: Template;
}

export default function Template2Editor({ data }: Props) {
  const [skills, setSkills] = useState<any>(() => {
    return (data.skillsSection ?? []).map((title) => {
      const skill = allSkills.find(
        (s) => s.title.toLowerCase() === title.toLowerCase()
      );
      return skill ?? { title, icon: null };
    });
  });
  const [projects, setProjects] = useState<Project[] | undefined>(
    data.projectsSection
  );
  const socialsArray = Object.entries(data.socials ?? {})
    .filter(([url]) => url)
    .map(([platform, url]) => ({ platform, url: url! }));
  const [socials, setSocials] = useState(socialsArray);

  return (
    <div className="min-h-screen ">
      <nav className="sticky top-0 z-50 w-full border-b bg-white  ">
        <div className="max-w-screen-custom mx-auto px-4 flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <div className="mr-6 flex items-center space-x-2">
              <EditableText
                id={`template-${data.id}-name`}
                text={data.title}
                className="hidden font-bold sm:inline-block"
              />
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="transition-colors hover:text-foreground/80"
              >
                Experience
              </Link>
              <Link
                href="#portfolio"
                className="transition-colors hover:text-foreground/80"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="sm" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-blacky flex justify-center items-center">
        <section className=" max-w-screen-custom mx-auto space-y-6 pb-8 pt-6 px-4 md:pb-12 md:pt-10 lg:pt-32 lg:pb-16">
          <div className="flex  flex-col items-center gap-2">
            <BlurIn
              word={
                <EditableText
                  id={`template-${data.id}-role`}
                  text={"Product Manager & Strategic Leader"}
                  className="text-3xl font-bold leading-tight tracking-tighter !text-center md:text-4xl lg:text-5xl lg:leading-[1.1] text-white "
                />
              }
            />

            <EditableText
              id={`template-${data.id}-description`}
              text={
                " Transforming ideas into successful products that users love. 8+ years of experience driving product strategy, leading cross-functional teams, and delivering measurable business impact."
              }
              className="max-w-[750px] text-muted-foreground text-gray-300 text-center sm:text-lg"
              multiline
              animate
            />
          </div>
          <AnimatedContainer className="flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#portfolio">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="flex justify-center"
            >
              <Link href="/resume.pdf" target="_blank" className="text-white">
                Download Resume
              </Link>
            </Button>
          </AnimatedContainer>
          <AnimatedContainer className="flex items-center justify-center text-white space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <EditableText
                id={`template-${data.id}-location`}
                text={" San Francisco, CA"}
                className=" text-muted-foreground text-gray-300 text-center "
              />
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <EditableText
                id={`template-${data.id}-location`}
                text={"sarah.chen@email.com"}
                className=" text-muted-foreground text-gray-300 text-center "
              />
            </div>
          </AnimatedContainer>
          <AnimatedContainer className="relative flex justify-center ">
            <EditableImage
              id={`template-${data.id}-thumbnail`}
              src={data.thumbnail ?? ""}
              height={300}
              width={300}
            />
          </AnimatedContainer>
        </section>
      </section>
      <section className="max-w-screen-custom mx-auto px-4">
        <AnimatedContainer id="about" className="container space-y-6 py-12 ">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1]  md:text-4xl">
              About Me
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground  sm:leading-7">
              I&apos;m a passionate product manager with a proven track record
              of building products that scale. My approach combines data-driven
              decision making with user-centric design thinking.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-2" />
                <CardTitle>Team Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Led cross-functional teams of 15+ engineers, designers, and
                  analysts to deliver complex products on time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 mb-2" />
                <CardTitle>Growth Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Drove 300% user growth and 150% revenue increase through
                  strategic product initiatives and optimization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 mb-2" />
                <CardTitle>Strategic Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Developed product roadmaps aligned with business objectives,
                  resulting in successful market expansion.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedContainer>

        <AnimatedContainer className="">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1]  md:text-4xl">
              Skills & Expertise
            </h2>
          </div>
          <SkillsEditor
            defaultSkills={skills}
            onChange={(updatedSkills) => {
              setSkills(updatedSkills);
            }}
            containerClassName="flex mt-6 flex-wrap justify-center gap-3"
            renderSkill={(skill, onRemove, editMode) => (
              <div key={skill.title} className=" relative">
                <Badge variant="secondary"> {skill.title}</Badge>
                {editMode && (
                  <button
                    onClick={onRemove}
                    className="absolute top-[-5px] bg-white w-5 h-5 rounded-full flex justify-center items-center border shadow-sm right-0"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            )}
          />
        </AnimatedContainer>

        {/* Experience Section */}
        <AnimatedContainer
          id="experience"
          className="container space-y-6 py-12 "
        >
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">
              Experience
            </h2>
          </div>
          <div className="mx-auto max-w-[980px] space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Senior Product Manager</CardTitle>
                    <CardDescription className="text-base">
                      TechCorp Inc. • San Francisco, CA
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    2021 - Present
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>
                    Led product strategy for B2B SaaS platform serving 10,000+
                    enterprise customers
                  </li>
                  <li>
                    Increased user engagement by 45% through data-driven feature
                    optimization
                  </li>
                  <li>
                    Managed product roadmap and coordinated with engineering,
                    design, and marketing teams
                  </li>
                  <li>
                    Launched 3 major product features resulting in $2M
                    additional ARR
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Product Manager</CardTitle>
                    <CardDescription className="text-base">
                      StartupXYZ • Palo Alto, CA
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    2019 - 2021
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Built mobile app from 0 to 100K+ users in 18 months</li>
                  <li>
                    Conducted user research and usability testing to inform
                    product decisions
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver features
                    on schedule
                  </li>
                  <li>
                    Implemented analytics framework to track user behavior and
                    product performance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Associate Product Manager</CardTitle>
                    <CardDescription className="text-base">
                      BigTech Solutions • Mountain View, CA
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    2017 - 2019
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>
                    Supported senior PM in managing enterprise software product
                    line
                  </li>
                  <li>
                    Conducted competitive analysis and market research for new
                    feature development
                  </li>
                  <li>
                    Created detailed product requirements and user stories for
                    development team
                  </li>
                  <li>
                    Assisted in go-to-market strategy for 2 major product
                    launches
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </AnimatedContainer>

        {/* Portfolio Section */}
        <AnimatedContainer
          id="portfolio"
          className="container space-y-6 py-8 md:pt-10  bg-muted/50"
        >
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1]  md:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground  sm:leading-7">
              Here are some of the key products and features I&apos;ve led from
              conception to launch.
            </p>
          </div>
          <div className="">
            <ProjectEditor
              defaultProjects={projects}
              onChange={(updatedProjects) => {
                setProjects(updatedProjects);
              }}
              containerClassName="grid grid-cols-3 w-full items-center gap-3 mb-4 h-full"
              renderProjectCard={({ project, onEdit, onRemove, editMode }) => (
                <Card className="overflow-hidden relative h-[450px] w-full group">
                  <section className="flex flex-col justify-between h-full">
                    <div>
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                      <section className="p-4">
                        <CardHeader className="p-0">
                          <CardTitle>{project?.title}</CardTitle>
                          <p className="py-2 text-sm line-clamp-2">
                            {project?.description}
                          </p>
                        </CardHeader>

                        <div className="space-y-4 mt-1">
                          <section className="flex flex-wrap gap-2">
                            {project.tags?.map((data: string) => (
                              <Badge key={data} variant="outline">
                                {data}
                              </Badge>
                            ))}
                          </section>
                        </div>
                      </section>
                    </div>

                    <div className="flex gap-2 p-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/case-study-1">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Case Study
                        </Link>
                      </Button>
                    </div>
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
          </div>
        </AnimatedContainer>

        {/* Contact Section */}
        <AnimatedContainer id="contact" className="container space-y-6 pt-10">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1]  md:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground  sm:leading-7">
              I&apos;m always interested in discussing new opportunities and
              challenging product problems.
            </p>
          </div>
          <div className="mx-auto flex max-w-[980px] justify-center">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Ready to discuss your next product challenge?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 w-full flex flex-col items-center justify-center ">
                <SocialMediaEditor
                  defaultSocialMedia={socials}
                  onChange={setSocials}
                  renderSocialCard={({
                    social,
                    editMode,
                    onEdit,
                    onRemove,
                  }) => {
                    const Icon =
                      SOCIAL_PLATFORMS.find((p) => p.value === social.platform)
                        ?.icon || Mail;
                    return (
                      <div
                        key={social.platform}
                        className="custom-social-card "
                      >
                        <Button
                          className="group  relative "
                          variant={"outline"}
                        >
                          <Icon className="w-4 h-4" />

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
                        </Button>
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

                <Button className="w-full" size="lg" asChild>
                  <Link href="mailto:sarah.chen@email.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </AnimatedContainer>
      </section>

      {/* Footer */}
      <section className="pt-10">
        <GeneralFooter />
      </section>
    </div>
  );
}
