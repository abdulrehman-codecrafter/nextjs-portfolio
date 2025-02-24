"use client";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import {projects} from "@/data/projects-data"
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <div className="w-[95%] sm:[90%] md:w-[85%] lg:w-[80%] max-w-[1300px] mx-auto pt-28 md:pt-36 px-4 dark:text-[#A1A1AA]">
            <div className="">
                <BlurFade  direction="right" inView>
                    <h1 className="text-5xl font-bold">
                        <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                            {" "}
                            Projects
                        </span>
                    </h1>
                </BlurFade>
                <BlurFade delay={0.1} direction="right" inView>
                <p className=" text-lg mb-12 max-w-3xl mt-8">
                    I&apos;ve worked on tons of little projects over the years
                    but these are the ones that I&apos;m most proud of. Many of
                    them are open-source, so if you see something that piques
                    your interest, check out the code and contribute if you have
                    ideas on how it can be improved.
                </p>
                </BlurFade>
                <BlurFade delay={0.2} direction="right" inView>
                <div className="flex flex-wrap gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="px-4 cursor-pointer w-[350px] md:w-[300px] lg:w-[32%] rounded-2xl  bg-[#d4d4d434] dark:bg-[#27272B66] hover:border-l-4 hover:border-violet-400 transition-all duration-300 pr-6"
                            
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="flex-1 min-w-[300px] px-4 py-6 rounded-lg"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="shrink-0 ps-2 pt-1 rounded-lg">
                                        {project.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center justify-between">
                                        <h2 className="text-xl mb-1 truncate  dark:text-gray-50">
                                            {project.title}
                                        </h2>
                                        <ArrowUpRight size={18} color="#3b5672a8" className="" />
                                        </div>
                                        <p className=" line-clamp-2 leading-relaxed ">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                </BlurFade>
            </div>
        </div>
    );
}
