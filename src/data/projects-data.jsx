import {
    DollarSign,
    Star,
    Rocket,
    Home,
    FileText,
    Camera,
    Brain,
    Pizza,
} from "lucide-react";

// const  = [
//     {
//       ,
//     {
//       slug: "legendarysuni",
//       title: "Legendarysuni",
//       description: "Legendarysuni is a digital Electronic Press Kit (EPK) for a singer/songwriter, showcasing their music, bio, and portfolio in an elegant and easy-to-navigate format. The app features sections for press releases, upcoming events, music releases, and media, aimed at providing a comprehensive view of the artist’s career for fans, journalists, and promoters.",
//       image: "/assets/images/suni.png",
//       liveUrl: "#",
//       githubUrl: "#",
//       technologies: [
//         "React (Vite)",
//         "Node.js",
//         "Express",
//         "Vanilla CSS",
//         "JavaScript",
//       ],
//       features: [
//         "Press releases and upcoming events section",
//         "Music streaming and download links",
//         "Elegant design ensuring smooth navigation across devices",
//         "Artist biography and portfolio",
//       ],
//     },
//     {
//       slug: "space-explorer",
//       title: "Space Explorer",
//       description: "Space Explorer is an educational app that allows users to explore the universe, learn about celestial bodies, and view detailed information about planets, moons, stars, and galaxies. It integrates NASA's API to provide live data about space missions, astronomical events, and upcoming launches.",
//       image: "/assets/images/space-explorer.png",
//       liveUrl: "#",
//       githubUrl: "#",
//       technologies: [
//         "React (Vite)",
//         "Node.js",
//         "Three.js",
//         "NASA API",
//         "JavaScript",
//       ],
//       features: [
//         "Interactive 3D models of the solar system and celestial bodies",
//         "Live data from NASA's API for space missions and astronomical events",
//         "Educational tool for students, educators, and space enthusiasts",
//         "Searchable database of planets, moons, stars, and galaxies",
//       ],
//     },
//     // Add the rest of your projects with similar data
//   ];

export const projects = [
    {
        icon: <Pizza className="w-6 h-6 text-blue-400" />,
        title: "Foodman",
        description:
            " Foodman is a food delivery app that allows users to order food from local restaurants and track their orders in real-time. The app features a user-friendly interface, integration with various payment gateways, and responsive design for mobile and desktop devices.",
        href: "/projects/foodman",
        slug: "foodman",
        image: "/assets/images/foodman.png",
        liveUrl: "https://hackathon-1e232.web.app/",
        githubUrl: "https://github.com/abdulrehman-codecrafter/Saylai-Hackathon.git",
        technologies: [
            { name: "React (Vite)", icon: "/assets/icons/vitejs.svg" },

            { name: "Firebase", icon: "/assets/icons/firebase.svg" },
            { name: "Vanilla CSS", icon: "/assets/icons/css3.svg" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],

        features: [
            "User-friendly food ordering interface",
            "Real-time order tracking",
            "Integration with various payment gateways",
            "Responsive design for mobile and desktop",
        ],
    },
    
];
