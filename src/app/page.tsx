/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import ExploreButton from "../components/ui/explore-btn";
import { BlurFade } from "@/components/ui/blur-fade";
import {
    GitHubButton,
    InstagramButton,
    LinkedInButton,
    WhatsAppButton,
} from "@/components/custom/social-links";
import { ChevronRight, Cpu, Rocket, Smartphone, Zap } from "lucide-react";

import ChooseMeCard from "@/components/custom/choose-me-card";
import HighlightedProject from "@/components/custom/highlighted-project";
import Link from "next/link";
export default function Home() {
    return (
        <div className="w-[93%] sm:[80%] md:w-[85%] lg:w-[80%] max-w-[1300px] mx-auto pt-16 px-4 dark:text-[#A1A1AA]">
            {/* Hero Section */}
            <div className="flex items-center justify-between flex-col-reverse md:flex-row mt-10 lg:mt-20 pt-10">
                {/* Hero Introduction */}
                <div className="self-start ">
                    <BlurFade delay={0.01} inView direction="right">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Hi, I'm
                            <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                                {" "}
                                Abdul Rahman
                            </span>
                            <br />
                            Software Engineer
                        </h1>
                    </BlurFade>
                    <BlurFade delay={0.1} inView direction="right">
                        <div className="text-lg mt-4 ">
                            I like to build beautiful web and mobile apps with
                            code. <br /> I also talk and write about those
                            things.
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.2} inView direction="right">
                        <div className="my-8">
                            <Link href="/about">
                                <ExploreButton />
                            </Link>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.3} inView direction="down">
                        <div className="flex gap-5 mt-10">
                            <LinkedInButton />
                            <GitHubButton />
                            <InstagramButton />
                            <WhatsAppButton />
                        </div>
                    </BlurFade>
                </div>

                {/* Hero Image */}
                <BlurFade inView direction="right">
                    <Image
                        src="/assets/images/profile1.png"
                        alt="logo"
                        priority
                        width={370}
                        height={370}
                    />
                </BlurFade>
            </div>

            {/* Why Choose Me */}

            <div className="mt-8">
                <BlurFade delay={0.4} direction="down" inView>
                    <h1 className="text-violet-500 dark:text-violet-400 font-semibold text-[22px] mb-6">
                        Why Choose Me
                    </h1>
                </BlurFade>
                <BlurFade delay={0.5} direction="down" inView>
                    <div className="flex gap-4 flex-wrap mt-10">
                        <ChooseMeCard
                            icon={<Cpu size={24} />}
                            title="Scalable Web Apps"
                            webLink="https://medium.com/theymakedesign/scalable-web-applications-be3231ef47e8"
                            description="Building high-performance web applications with modern frameworks like React, Next.js, and Node.js."
                            iconBgColor="#6c8ae4" // Lighter shade of #185adb
                        />
                        <ChooseMeCard
                            icon={<Smartphone size={24} />}
                            title="Robust Mobile Solutions"
                            webLink="https://www.techtarget.com/searchmobilecomputing/definition/cross-platform-mobile-development"
                            
                            description="Creating cross-platform and native mobile applications with React Native for seamless user experiences."
                            iconBgColor="#ff6b8b" // Lighter shade of #ff3e67
                            />
                        <ChooseMeCard
                            icon={<Zap size={24} />}
                            title="Optimized Performance"
                            webLink="https://www.castsoftware.com/glossary/software-performance-application-engineering-tuning-monitoring"
                            description="Ensuring fast, secure, and efficient code for smooth functionality across web and mobile devices."
                            iconBgColor="#8bc78a" // Lighter shade of #62b15c
                        />
                    </div>
                </BlurFade>
            </div>

            {/* HighLighted Projects */}

            <div className="mt-12">
                <BlurFade direction="down" inView>
                    <h1 className=" text-violet-500 dark:text-violet-400 font-semibold text-[22px] ">
                        What I've been working on
                    </h1>
                </BlurFade>
                <BlurFade delay={0.05} direction="down" inView>
                    <p className=" text-[#6A6A6A] font-medium text-[18px] mb-4">
                        Highlighted Projects
                    </p>
                </BlurFade>
                <BlurFade delay={0.1} direction="down" inView>
                    <div className="flex flex-wrap mt-1 gap-10">
                        <HighlightedProject />
                    </div>
                    <Link href={"/projects"}>
                    <button className="border px-4 py-2 mt-4 rounded-lg flex hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-100">
                        See all projects{" "}
                        <ChevronRight size={18} className="ml-0.5 mt-1 transition-all duration-100" />
                    </button>
                    </Link>
                </BlurFade>
            </div>

            {/* Contact  */}
            <BlurFade delay={0.15} direction="down" inView>
                <div className="my-6">
                    <h1 className=" text-violet-500 dark:text-violet-400 font-semibold text-[22px] mt-12">
                        Get in Touch
                    </h1>
                    <p className=" text-[#6A6A6A] font-medium text-[18px] mb-4">
                        Let's Connect
                    </p>
                    <div className="bg-[#d4d4d434] dark:bg-[#27272B66] p-6 rounded-lg max-w-[1000px]">
                        {/* <ContactCard /> */}
                        <div className="flex gap-3">
                            <Rocket size={24} />
                            <h3 className="text-lg font-semibold">
                                Let's work together!
                            </h3>
                        </div>
                        <p>
                            I'm available for freelance projects and would love
                            to explore potential collaborations. Feel free to
                            email me, and let's discuss how we can work
                            together!
                        </p>
                        <Link href="/contact">
                            <button className="bg-violet-500 text-white px-4 py-2 mt-4 rounded-lg">
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}
