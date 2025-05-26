/** @format */

import React from "react";
import { FloatingDock } from "../floating-dock";
import { Linkedin, User } from "lucide-react";
import { GitHub } from "react-feather";
import { IoLogoInstagram } from "react-icons/io5";
import { Logo } from "../logo";
const Footer = () => {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/adebayo-stephen-152a7922b/",
    },

    {
      title: "Instagram",
      icon: (
        <IoLogoInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/i_am_stephanos/",
    },
    {
      title: "Github",
      icon: (
        <GitHub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Stephenadebayoy",
    },
    {
      title: "Twitter",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "https://x.com/i_am_stephanos",
    },
    {
      title: "Portfolio",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://my-portfolio-gilt-alpha-40.vercel.app/",
    },
  ];
  return (
    <section className="bg-white">
      <div className="flex  max-w-screen-custom px-4 mx-auto items-center justify-between  h-20">
        <div>
          <Logo />
          <p className="text-sm mt-2 text-[#1f1f1f]">
            &copy; {new Date().getFullYear()} Builder. All rights reserved.
          </p>
        </div>
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </section>
  );
};

export default Footer;
