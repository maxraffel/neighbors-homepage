import { ContactSection4 } from "@/components/contact-section-4";
import { FeatureSection14 } from "@/components/feature-section-14";
import { HeroSection1 } from "@/components/hero-section-1";
import { TeamSection2 } from "@/components/team-section-2";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection1 />
      <FeatureSection14 />
      <TeamSection2 />
      <ContactSection4 />
   </div>
  );
}
