/** @format */

"use client";

import { Button, Input } from "@packages/_shared";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Logo } from "@/components/logo";
import { useRouter } from "next/navigation";
import AnimatedContainer from "@/components/framer/animate-div";

const RegisterComponent = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <div className="relative w-full max-w-96 px-6 py-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
        <AnimatedContainer direction="right" className="absolute top-4 right-4">
          <Button
            className="text-xs text-white/70 hover:text-white bg-white/10 px-3 py-1 rounded-full border border-white/20 transition "
            onClick={() => router.push("/auth/login")}
          >
            Login
          </Button>
        </AnimatedContainer>

        <AnimatedContainer
          direction="zoomIn"
          className="flex justify-center mb-6"
        >
          <Logo width={50} height={50} />
        </AnimatedContainer>
        <AnimatedContainer>
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Create Account
          </h2>
        </AnimatedContainer>
        <div className="space-y-4">
          <AnimatedContainer>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Full Name
            </label>
            <Input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
              placeholder="John Doe"
            />
          </AnimatedContainer>

          <AnimatedContainer>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Email
            </label>
            <Input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
              placeholder="your@email.com"
            />
          </AnimatedContainer>

          <AnimatedContainer>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Password
            </label>
            <Input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
              placeholder="••••••••"
            />
          </AnimatedContainer>

          <AnimatedContainer className="pt-6">
            <Button
              type="submit"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/15 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-white/5"
            >
              Register
            </Button>
          </AnimatedContainer>
        </div>

        <AnimatedContainer className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/10" />
          <span className="mx-4 text-xs text-white/50">or continue with</span>
          <div className="flex-grow h-px bg-white/10" />
        </AnimatedContainer>
        <AnimatedContainer className="flex justify-center gap-4">
          <Button
            type="button"
            className="flex items-center gap-2 px-4 py-2 w-full justify-center rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm">Google</span>
          </Button>

          <Button
            type="button"
            className="flex items-center gap-2 px-4 py-2 w-full justify-center rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            <FaGithub size={20} />
            <span className="text-sm">GitHub</span>
          </Button>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default RegisterComponent;
