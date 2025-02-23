import TechStack from "@/components/custom/tech-stack";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-[95%] sm:[90%] md:w-[85%] lg:w-[80%] max-w-[1300px] mx-auto pt-20 px-4 dark:text-[#A1A1AA]">
            <div className="flex flex-col-reverse md:flex-row items-start gap-12 pt-20">
                {/* Left Section */}
                <div className="flex-1">
                    <BlurFade direction="up" inView>
                        <h1 className="text-5xl font-bold">
                            <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                                {" "}
                                About
                            </span>
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.1} direction="up" inView>
                        <p className="font-medium text-[20px] text-[#6A6A6A] mt-4 mb-8">
                            A short story of me
                        </p>
                    </BlurFade>

                    <div className="space-y-5 max-w-[900px]:">
                        <BlurFade delay={0.2} direction="up" inView>
                            <p className="text-lg">
                                I am a self-driven, career-oriented software
                                engineer specializing in front-end development
                                and open-source, currently pursuing a bachelor's
                                degree in computer science. My expertise lies in
                                building interactive web and mobile
                                applications, primarily using ,
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    React.js
                                </span>
                                ,
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    Next.js
                                </span>
                                ,
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    Node.js
                                </span>
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    React Native
                                </span>
                                , and
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    TypeScript
                                </span>
                                .
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.3} direction="up" inView>
                            <p className="text-lg">
                                I strongly believe in continuous learning and
                                improving myself, so I try my best to learn in ,
                                and I am always eager to take on new challenges
                                that push my boundaries and help me grow both
                                personally and professionally..
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.4} direction="up" inView>
                            <p className="text-lg">
                                Outside of coding, I love playing
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    video games
                                </span>{" "}
                                and
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    football
                                </span>
                                , which help me unwind and keep my creativity
                                flowing. Whether it's strategizing in a game or
                                making plays on the field, I enjoy challenges
                                that push me to think differently.
                            </p>
                        </BlurFade>
                        <BlurFade delay={0.5} direction="up" inView>
                            <p className="text-lg">
                                I am always looking for opportunities to work on
                                exciting projects, collaborate with talented and
                                make a positive impact. Feel free to reach out
                                if you have any questions or just want to
                                connect!.
                            </p>
                        </BlurFade>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-[450px] md:w-[310px] lg:w-[400px] pt-16">
                    <BlurFade direction="right" inView>
                        <div className="rounded-2xl overflow-hidden w-full mt-6">
                            <Image
                                src="/assets/images/profile2.jpg"
                                alt="Profile photo at the beach"
                                width={370}
                                height={370}
                                className="object-cover mb-6 rounded-[55px] border-8 border-gray-200 dark:border-gray-400 "
                            />
                        </div>

                        <div className="flex flex-col w-full space-y-4">
                            <Link
                                href="#"
                                className="w-full flex items-center justify-between px-6 py-3 rounded-lg border border-gray-300 dark:border-secondary"
                            >
                                <span>View Resume</span>
                                <Download className="w-5 h-5 text-[#00FF85]" />
                            </Link>

                            <Link
                                href="mailto:abdulrahman.sde@gmail.com"
                                className="w-full flex items-center justify-between px-6 py-3 rounded-lg border border-gray-300 dark:border-secondary"
                            >
                                <span>abdulrahman.sde@gmail.com</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </BlurFade>
                </div>
            </div>

            {/* Tech Stack Section */}
            <BlurFade delay={0.2} direction="down" inView>
                <div className="mt-10">
                    <h2 className="text-violet-500 dark:text-violet-400 font-semibold text-[22px] mb-6">
                        Tech Stack and Tools
                    </h2>
                    <div className="">
                        <TechStack />
                    </div>
                </div>
            </BlurFade>

            {/* Experience Section */}
            <BlurFade delay={0.1} direction="up" inView>
                <div className="mt-16 max-w-[900px]">
                    <h2 className="text-2xl font-semibold mb-6 text-violet-500 dark:text-violet-400 flex items-center">
                        Experience
                    </h2>
                    <div className="flex gap-4">
                        <div>
                            <Image
                                src="/assets/images/freelancer.png"
                                alt="GCUF Logo"
                                width={80}
                                height={40}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-6 mt-[-5px]">
                            <div>
                                <p className="text-lg font-semibold dark:text-gray-50">
                                    Freelance Full Stack Developer
                                </p>
                                <p className="text-md dark:text-gray-200 mt-1 mb-3">
                                    June 2023 - Present
                                </p>
                                <p className="text-medium ">
                                    Worked with various clients to build
                                    responsive and interactive web applications
                                    using React.js, Next.js, Firebase, Nodejs .
                                    Delivered high-quality code and collaborated
                                    on UI/UX improvements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlurFade>

            {/* Education Section */}
            <BlurFade delay={0.1} direction="up" inView>
                <div className="mt-16 max-w-[900px]">
                    <h2 className="text-2xl font-semibold mb-6 text-violet-500 dark:text-violet-400">
                        Education
                    </h2>
                    <div className="space-y-9">
                        <div className="flex gap-4 ">
                            <div>
                                <Image
                                    src="/assets/images/gcuf-logo.png"
                                    alt="GCUF Logo"
                                    width={80}
                                    height={40}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="mt-[-5px]">
                                <p className="text-lg font-semibold dark:text-gray-50">
                                    Bachelor of Computer Science
                                </p>
                                <p className="text-md dark:text-gray-200 mt-1 mb-3">
                                    GCUF Faisalabad, 2022 - Present
                                </p>
                                <p className="text-medium">
                                    Currently pursuing a degree in Computer
                                    Science with a focus on software
                                    development, algorithms, and data
                                    structures. Its my 6th semester and i have
                                    maintained a CGPA{" "}
                                    <span className="text-violet-400">
                                        3.82 / 4.0
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div>
                                <Image
                                    src="/assets/images/rcs-logo.png"
                                    alt="RCS Logo"
                                    width={90}
                                    height={40}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="mt-[-5px]">
                                <p className="text-lg font-semibold dark:text-gray-50">
                                    Faculty of Science FSC
                                </p>
                                <p className="text-md dark:text-gray-200 mt-1 mb-3">
                                    RCS Narowal, 2018 - 2020
                                </p>
                                <p className="text-medium">
                                    Completed intermediate studies with a focus
                                    on science subjects, achieving an
                                    outstanding score of{" "}
                                    <span className="text-violet-400">96%</span>
                                    . This period helped me build a strong
                                    foundation in analytical thinking and
                                    problem-solving skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}
