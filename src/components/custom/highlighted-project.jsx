import { useTheme } from "next-themes";
import Safari from "@/components/ui/safari";
import TechBadge from "@/components/custom/badge";
import Link from "next/link";

export default function HighlightedProjects() {
    const theme = useTheme();
    const projects = [
        {
            title: "Food Ordering Website",
            slug:"foodman",
            description:
                "A seamless online food ordering app built with the MERN stack. Features real-time order tracking, secure payments, and a user-friendly interface.",
            imageSrc: "/assets/images/foodman.png",
            stack: [
                { name: "React", imageSrc: "/assets/icons/reactjs.svg" },
                { name: "Firebase", imageSrc: "/assets/icons/firebase.svg" },
                { name: "Vite", imageSrc: "/assets/icons/vitejs.svg" },
            ],
        },
        {
            title: "Meditrack",
            slug:"meditrack",
            description:
                "Meditrack is a medical store billing web app that allows users to manage and track sales, inventory, and billing. The app features a user-friendly interface.",
            imageSrc: "/assets/images/meditrack.png",
            stack: [
                { name: "Nextjs", imageSrc: "/assets/icons/nextjs2.svg" },
                { name: "Firebase", imageSrc: "/assets/icons/firebase.svg" },
                { name: "Tailwind CSS", imageSrc: "/assets/icons/tailwindcss.svg" },

            ],
        },
        
    ];

    return (
        <>
            {projects.map((project, index) => (
                <Link href={`/projects/${project.slug}`} key={index}>
                    <div
                    className="bg-[#d4d4d434] dark:bg-[#27272B66] cursor-pointer flex whitespace-nowrap text-4xl shadow-sm w-[350px] sm:w-[450px] md:w-[500px] lg:w-[380px] xl:w-[470px] rounded-xl "
                >
                    <div className="project-card py-[25px] rounded-lg w-fit">
                        <div className="flex justify-center overflow-hidden">
                            <Safari
                                className="w-[90%] h-min rounded-lg"
                                imageSrc={project.imageSrc}
                            />
                        </div>
                        <div className="px-5">
                            <h2 className="font-semibold text-xl my-3">
                                {project.title}
                            </h2>
                            <p className="font-light text-base text-wrap">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.stack.map((tech, index) => (
                                    <TechBadge
                                        key={index}
                                        name={tech.name}
                                        imageSrc={tech.imageSrc}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </>
    );
}
