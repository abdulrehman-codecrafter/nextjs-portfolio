"use client"
import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { useTheme } from "next-themes";

const highPriorityTechStacks = [
    {
        name: "Next.js",
        colorIcon: "/assets/icons/nextjs2.svg",
    },
    
    {
        name: "Node.js",
        colorIcon: "/assets/icons/nodejs.svg",
    },
    {
        name: "MongoDB",
        colorIcon: "/assets/icons/mongodb.svg",
    },
    {
        name: "MySQL",
        colorIcon: "/assets/icons/mysql.svg",
    },
    {
        name:"Web Sockets",
        colorIcon:"/assets/icons/sockets.svg",
    },
    
    {
        name: "Redis",
        colorIcon: "/assets/icons/redis.svg",
    },
    {
        name: "JavaScript",
        colorIcon: "/assets/icons/js.svg",
    },
    
    
];

const lowPriorityTechStacks = [
    {
        name: "HTML5",
        colorIcon: "/assets/icons/html5.svg",
    },
    {
        name: "CSS3",
        colorIcon: "/assets/icons/css3.svg",
    },
    {
        name: "Bootstrap",
        colorIcon: "/assets/icons/bootstrap4.svg",
    },
    {
        name: "Tailwind",
        colorIcon: "/assets/icons/tailwindcss.svg",
    },
    {
        name: "SASS",
        colorIcon: "/assets/icons/sass.svg",
    },
    
    {
        name: "Firebase",
        colorIcon: "/assets/icons/firebase.svg",
    },
    {
        name: "React",
        colorIcon: "/assets/icons/reactjs.svg",
    },
    {
        name: "Vite",
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

