"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/tagline";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function HeroSection1() {
  return (
    <section
      className="dark bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="dark container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Your future, made simple</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl text-foreground">
              Building lasting wealth starts with trusted <span className="text-accent-1">neighbors</span> by your side.
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              At Neighbors Wealth Management, we help individuals, families, and businesses create personalized strategies for financial security and growth. No matter your background or goals, our advisors focus on what matters most — your future, your community, and your peace of mind.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" className="dark">Chat with our experts</Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/HighFive.jpg"
              alt="Hero section visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
