import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects-data";
import Safari from "@/components/ui/safari";
import { div } from "motion/react-client";

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[900px] mx-auto pt-20 px-4 dark:text-[#A1A1AA]">
            <div className="max-w-6xl mx-auto space-y-12 pt-20">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl md:text-5xl">{project.title}</h1>
                    <div className="flex items-center gap-4">
                        <Link
                            href={project.liveUrl}
                            className="flex items-center gap-2"
                        >
                            <span>Live URL</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href={project.githubUrl}
                            className="flex items-center gap-2"
                        >
                            <span>GitHub</span>
                            <Github className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Preview Image */}
                <div className="rounded-lg overflow-hidden">
                    
                    <Safari
                        url="magicui.design"
                        className="w-[90%] h-min rounded-lg"
                        imageSrc={project.image}
                    />
                </div>

                {/* Overview */}
                <section className="space-y-4">
                    <h2 className="text-2xl">Overview</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </section>

                {/* Technologies */}
                <section className="space-y-4">
                    <h2 className="text-2xl">Technologies</h2>
                    <ul className="space-y-4 text-gray-400">
                        {project.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center gap-2 ">
                            <Image src={tech
                            .icon} width={22} height={22} alt={tech.name} />
                            <li >{tech.name}</li>


                          </div>
                        ))}
                    </ul>
                </section>

                {/* Features */}
                <section className="space-y-4">
                    <h2 className="text-2xl flex items-center gap-2">
                        <span className="text-gray-400">#</span> Features
                    </h2>
                    <ul className="space-y-2 text-gray-400 list-disc pl-5">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
