"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tagline } from "@/components/tagline";

export function TeamSection2() {
  const teamMembers = [
    {
      name: "Scott Bowman",
      role: "Managing Partner",
      description:
        "Leads the company with a clear vision, guiding strategic growth and fostering innovation to ensure long-term success.",
      image: "/ScottBowman.png",
    },
    {
      name: "Melinda Yu",
      role: "Managing Partner",
      description:
        "Drives innovation efforts, exploring new technologies and strategies to keep the company ahead of industry trends.",
      image: "/melibdenum.png",
    },
  ];

  return (
    <section className="bg-muted/40 section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-12 lg:gap-16">
          <div className="section-title-gap-lg flex flex-col w-full lg:w-1/2">
            <Tagline>Our experts</Tagline>
            <h2 className="heading-lg text-foreground">
              Behind every client success story is a dedicated team of advisors who treat you like family.
            </h2>
            <p className="text-muted-foreground">
              We pride ourselves on treating every client like a neighbor, not a number. By blending financial expertise with genuine care, we create strategies that help you and your family thrive.<br></br><br></br>
Our team brings together years of experience across investments, retirement planning, and legacy building to provide well-rounded, trustworthy guidance. By working collaboratively and keeping your goals at the center, we ensure that every decision feels clear, personal, and built for your long-term success.
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <Avatar className="aspect-[3/3] h-auto w-full rounded-xl">
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-foreground text-base font-semibold">
                      {member.name}
                    </p>
                    <p className="text-muted-foreground text-base">
                      {member.role}
                    </p>
                  </div>
                </div>
                {/* <p className="text-muted-foreground text-base">
                  {member.description}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
