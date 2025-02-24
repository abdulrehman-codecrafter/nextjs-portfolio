import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects-data";
import Safari from "@/components/ui/safari";
import Android from "@/components/ui/android";

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }) {
    // Made function async to fix the params error
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[900px] mx-auto pt-28 md:pt-36 px-4 dark:text-[#A1A1AA]">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <div className="flex items-center justify-between gap-y-6 flex-wrap">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        {project.title}
                    </h1>
                    <div className="flex items-center gap-6">
                        {project.isApp ? (
                            <a
                            target="_blank"
                            rel="noreferrer"
                            href={project.githubUrlFrontened}
                            className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                        >
                            <span className="text-sm font-medium">
                                Frontened
                            </span>
                            <Github className="w-4 h-4" />
                        </a>
                        
                        ) : (
                            <a
                            target="_blank"
                            rel="noreferrer"
                            href={project.liveUrl}
                            className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
                        >
                            <span className="text-sm font-medium">
                                Live URL
                            </span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                        )}

                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={project.githubUrl}
                            className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                        >
                            <span className="text-sm font-medium">{project.isApp?"Backened":"Github"}</span>
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Preview Image */}
                <div className="rounded-xl overflow-hidden flex justify-center">
                    {project.isApp ? (
                        <div className="flex justify-center">
                            <Android
                                className="size-full w-[90%] h-min rounded-xl"
                                src={project.image}
                            />
                        </div>
                    ) : (
                        <Safari
                            url="magicui.design"
                            className="w-full md:w-[90%] h-min rounded-xl"
                            imageSrc={project.image}
                        />
                    )}
                </div>

                {/* Overview */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Overview</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </section>

                {/* Technologies */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Technologies</h2>
                    <ul className="flex flex-col gap-3 ">
                        {project.technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center w-[200px] gap-3 p-3 rounded-lg transition-all duration-300"
                            >
                                <Image
                                    src={tech.icon}
                                    placeholder="blur"
                                    blurDataURL={tech.icon}
                                    width={24}
                                    height={24}
                                    alt={tech.name}
                                    className="rounded"
                                />
                                <li className="text-gray-600 dark:text-gray-400">
                                    {tech.name}
                                </li>
                            </div>
                        ))}
                    </ul>
                </section>

                {/* Features */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <span className="text-gray-400 font-normal">#</span>{" "}
                        Features
                    </h2>
                    <ul className="grid gap-3 text-gray-600 dark:text-gray-400 list-disc pl-5">
                        {project.features.map((feature, index) => (
                            <li key={index} className="pl-2">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
