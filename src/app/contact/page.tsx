import {
    GitHubButton,
    InstagramButton,
    LinkedInButton,
    WhatsAppButton,
} from "@/components/custom/social-links";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
// import { FaTwitter, FaLinkedin, FaGithub } from "lucide-react";

export default function Contact() {
    return (
        <div className="w-[93%] sm:w-[80%] md:w-[85%] lg:w-[80%] max-w-[1300px] mx-auto pt-24  px-4 md:pt-36 dark:text-[#A1A1AA]">
            <div>
                <BlurFade direction="down" inView>
                    <h1 className="text-4xl font-bold">
                        <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                            {" "}
                            Contact Me
                        </span>
                    </h1>
                </BlurFade>

                <BlurFade delay={0.1} direction="down" inView>
                    <p className="font-medium text-[17px] text-[#6A6A6A] mt-2 mb-8">
                        Let&apos;s get in touch!
                    </p>
                </BlurFade>
                <a className="text-muted-foreground mb-12"></a>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                <div className="w-full max-w-[500px]">
                    <BlurFade direction="down" inView>
                        <h2 className="text-2xl font-semibold mb-6 dark:text-gray-50">
                            Get in Touch
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <input
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 focus:border-l-[3px] transition-all duration-100 shadow-sm focus:border-violet-500 outline-none rounded-lg bg-[#d4d4d424] dark:bg-[#27272bb4]"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 focus:border-l-[3px] transition-all duration-100 shadow-sm focus:border-violet-500 outline-none rounded-lg bg-[#d4d4d434] dark:bg-[#27272bb4]"
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Subject"
                                    className="w-full px-4 py-2 focus:border-l-[3px] transition-all duration-100 shadow-sm focus:border-violet-500 outline-none rounded-lg bg-[#d4d4d434] dark:bg-[#27272bb4]"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 focus:border-l-[3px] transition-all duration-100 shadow-sm focus:border-violet-500 outline-none rounded-lg min-h-[150px] bg-[#d4d4d434] dark:bg-[#27272bb4]"
                                />
                            </div>
                            <button className="w-full px-4 py-2 focus:border-l-[3px] transition-all duration-100 shadow-sm focus:border-violet-500 outline-none bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </BlurFade>
                </div>

                <div className="w-full max-w-[500px]">
                    <BlurFade direction="down" inView>
                        <h1 className="  font-semibold text-[22px] mb-5 dark:text-gray-50">
                            Contact Information
                        </h1>
                    </BlurFade>

                    <div className="space-y-6">
                        <BlurFade delay={0.05} direction="down" inView>
                            <div className="flex gap-x-10 gap-y-6 flex-wrap">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1 dark:text-gray-200">
                                            Location
                                        </h3>
                                        <a
                                            target="_blank"
                                            href="https://maps.app.goo.gl/iSDzcAAeqYy8b33S7"
                                            className="text-muted-foreground flex"
                                        >
                                            Faisalabad, Pakistan
                                            <ArrowUpRight
                                                className="mt-0.5 ms-2"
                                                size={18}
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-gray-400 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1 dark:text-gray-200 flex justify-between items-center">
                                        Phone
                                    </h3>
                                    <a
                                        target="_blank"
                                        href="tel:+923237449306"
                                        className="text-muted-foreground flex"
                                    >
                                        +92 323 7449306
                                        <ArrowUpRight
                                            className="mt-0.5 ms-2"
                                            size={18}
                                        />
                                    </a>
                                </div>
                            </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-gray-400 mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1 dark:text-gray-200">
                                            Email
                                        </h3>
                                        <a
                                            target="_blank"
                                            href="mailto:abdulrahman.sde@gmail.com"
                                            className="text-muted-foreground flex"
                                        >
                                            abdulrahman.sde@gmail.com
                                            <ArrowUpRight
                                                className="mt-0.5 ms-2"
                                                size={18}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </BlurFade>
                    </div>
                    <div className="mt-8">
                        <BlurFade direction="down" inView>
                            <h1 className="  font-semibold text-[21px] dark:text-gray-50">
                                Follow Me
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.05} direction="down" inView>
                            <p className=" text-[#6A6A6A] font-medium text-[15px] mb-4">
                                Social Media Links
                            </p>
                        </BlurFade>
                        <BlurFade delay={0.1} direction="down" inView>
                            <div className="flex gap-5">
                                <LinkedInButton />
                                <GitHubButton />
                                <InstagramButton />
                                <WhatsAppButton />
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    );
}
