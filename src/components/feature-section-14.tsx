"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/tagline";

export function FeatureSection14() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Built for your goals</Tagline>
          <h2 className="heading-lg text-foreground">
            Turn financial complexity into clarity and confidence.
          </h2>
          <p className="text-muted-foreground text-base">
            Our solutions are designed to help you simplify decisions, protect your future, and grow your wealth with confidence. Every step of the way, we focus on what matters most: your goals, your family, and your lasting financial legacy.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/feature-1.jpg"
                  alt="Card image"
                  fill
                  className="rounded-xl object-cover"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground text-base font-semibold md:text-lg">
                Personalized financial planning
              </h3>
              <p className="text-muted-foreground">
                Every plan begins with understanding your life goals. We tailor strategies that fit your unique needs — not one-size-fits-all formulas. Our process is collaborative, ensuring your voice guides every decision.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/feature-2.jpg"
                  alt="Card image"
                  fill
                  className="rounded-xl object-cover"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground text-base font-semibold md:text-lg">
                Investment management with purpose
              </h3>
              <p className="text-muted-foreground">
                We align your portfolio with your risk tolerance and long-term objectives, balancing growth with security. With ongoing monitoring and adjustments, we keep your investments working for you through every market shift.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/feature-3.jpg"
                  alt="Card image"
                  fill
                  className="rounded-xl object-cover"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground text-base font-semibold md:text-lg">
                Retirement & legacy planning
              </h3>
              <p className="text-muted-foreground">
                From building retirement income to estate strategies, we help ensure your wealth supports future generations. Our goal is to provide confidence that your legacy will be both preserved and honored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
