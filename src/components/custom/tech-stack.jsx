"use client"
import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { useTheme } from "next-themes";

const highPriorityTechStacks = [
    {
        name: "Next.js",
        grayIcon: "/assets/icons/nextjs2-grey.svg",
        colorIcon: "/assets/icons/nextjs2.svg",
    },
    {
        name: "React",
        grayIcon: "/assets/icons/reactjs-grey.svg",
        colorIcon: "/assets/icons/reactjs.svg",
    },
    {
        name: "Node.js",
        grayIcon: "/assets/icons/nodejs-grey.svg",
        colorIcon: "/assets/icons/nodejs.svg",
    },
    {
        name: "MongoDB",
        grayIcon: "/assets/icons/mongodb-grey.svg",
        colorIcon: "/assets/icons/mongodb.svg",
    },
    {
        name: "MySQL",
        grayIcon: "/assets/icons/mysql-grey.svg",
        colorIcon: "/assets/icons/mysql.svg",
    },
    {
        name: "HTML5",
        grayIcon: "/assets/icons/html5-grey.svg",
        colorIcon: "/assets/icons/html5.svg",
    },
    {
        name: "CSS3",
        grayIcon: "/assets/icons/css3-grey.svg",
        colorIcon: "/assets/icons/css3.svg",
    },
    
];

const lowPriorityTechStacks = [
    {
        name: "Bootstrap",
        grayIcon: "/assets/icons/bootstrap4-grey.svg",
        colorIcon: "/assets/icons/bootstrap4.svg",
    },
    {
        name: "Tailwind",
        grayIcon: "/assets/icons/tailwindcss-grey.svg",
        colorIcon: "/assets/icons/tailwindcss.svg",
    },
    {
        name: "SASS",
        grayIcon: "/assets/icons/sass-grey.svg",
        colorIcon: "/assets/icons/sass.svg",
    },
    {
        name: "JavaScript",
        grayIcon: "/assets/icons/js-grey.svg",
        colorIcon: "/assets/icons/js.svg",
    },
    {
        name: "Redis",
        grayIcon: "/assets/icons/redis-grey.svg",
        colorIcon: "/assets/icons/redis.svg",
    },
    {
        name: "Firebase",
        grayIcon: "/assets/icons/firebase-grey.svg",
        colorIcon: "/assets/icons/firebase.svg",
    },
    {
        name: "Vite",
        grayIcon: "/assets/icons/vitejs-grey.svg",
        colorIcon: "/assets/icons/vitejs.svg",
    },
]






function StackCard({ stackData }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 cursor-pointer rounded-lg transition-colors duration-300 bg-[#d4d4d434] dark:bg-[#26262656] hover:bg-[#d4d4d4] dark:hover:bg-[#262626]">
      <img src={stackData.colorIcon} alt={stackData.name} className="w-6 h-6" />
      <span className="whitespace-nowrap">{stackData.name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <div className="space-y-1">
      <div className="w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] py-3">
          {highPriorityTechStacks.map((stack, index) => (
            <StackCard key={index} stackData={stack} />
          ))}
        </Marquee>
      </div>
      <div className="w-full overflow-hidden">
        <Marquee pauseOnHover reverse className="[--duration:30s] py-3">
          {lowPriorityTechStacks.map((stack, index) => (
            <StackCard key={index} stackData={stack} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

