import {
    DollarSign,
    Pizza,
    MessageSquare,
    ListTodo,
    Cloud,
    ShoppingCart,
    Hammer,
} from "lucide-react";

export const projects = [
    {
        isApp: false,
        icon: <Pizza color="#fc7f09" className="w-6 h-6" />,
        title: "Foodman",
        description:
            "Foodman is a food ordering app that allows users to order food from a single local restaurant. The app features a user-friendly interface and responsive design for mobile and desktop devices. It also includes features like admin dashboard, order history, check order status.",
        href: "/projects/foodman",
        slug: "foodman",
        image: "/assets/images/foodman.png",
        liveUrl: "https://hackathon-1e232.web.app/",
        githubUrl:
            "https://github.com/abdulrehman-codecrafter/Saylai-Hackathon.git",
        technologies: [
            { name: "React (Vite)", icon: "/assets/icons/vitejs.svg" },
            { name: "Firebase", icon: "/assets/icons/firebase.svg" },
            { name: "Vanilla CSS", icon: "/assets/icons/css3.svg" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],
        features: [
            "User-friendly food ordering interface",
            "Dashboard for restaurant owner",
            "Responsive design for mobile and desktop",
            "Order history",
            "Check order status",
        ],
    },
    {
        isApp: false,
        icon: <DollarSign color="#16a34a" className="w-6 h-6 " />,
        title: "Meditrack",
        description:
            "Meditrack is a medical store billing web app that allows users to manage and track sales, inventory, and billing. The app features a user-friendly interface and responsive design for mobile and desktop devices. It also includes advanced features like sales analytics, customer management, and automated invoice generation.",
        href: "/projects/meditrack",
        slug: "meditrack",
        image: "/assets/images/meditrack.png",
        liveUrl: "https://store-billing.web.app/",
        githubUrl:
            "https://github.com/abdulrehman-codecrafter/medical-store.git",
        technologies: [
            { name: "Nextjs", icon: "/assets/icons/nextjs2.svg" },
            { name: "Firebase", icon: "/assets/icons/firebase.svg" },
            { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],
        features: [
            "User-friendly billing interface",
            "Inventory management",
            "Responsive design for mobile and desktop",
            "Sales analytics",
            "Automated invoice generation",
        ],
    },
    {
        isApp: true,
        icon: <MessageSquare color="#4c28c6" className="w-6 h-6" />,
        title: "ChatApp",
        description:
            "ChatApp is a mobile chat application that allows users to send friend requests, accept or reject them, and chat in real-time. The app features a user-friendly interface and responsive design for mobile devices. It also includes features like chat history, and online status.",
        href: "/projects/chatapp",
        slug: "chatapp",
        image: "/assets/images/chatapp.png",
        liveUrl: "",
        githubUrlFrontened: "https://github.com/abdulrehman-codecrafter/ChatApp-Frontened.git",
        githubUrl: "https://github.com/abdulrehman-codecrafter/chatapp-backened.git",

        technologies: [
            { name: "React Native", icon: "/assets/icons/expo.svg" },
            { name: "Websockets", icon: "/assets/icons/sockets.svg" },
            { name: "Monoodb", icon: "/assets/icons/mongodb.svg" },
            { name: "Nodejs", icon: "/assets/icons/nodejs.svg" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],
        features: [
            "Send friend requests",
            "Accept or reject friend requests",
            "Real-time chat",
            "Chat history",
            "Online status",
        ],
    },
    {
        isApp: false,
        icon: <ListTodo color="#c0aae5" className="w-6 h-6" />,
        title: "Tasks Optimizer",
        description:
            "Tasks Optimizer is a web app for managing todos. It allows users to create, update, and delete tasks. The app features a user-friendly interface and responsive design for mobile and desktop devices. It also includes features like task prioritization, due dates, and reminders.",
        href: "/projects/tasks-optimizer",
        slug: "tasks-optimizer",
        image: "/assets/images/todo.png",
        liveUrl: "https://tasks-optimzer.netlify.app/",
        githubUrl: "https://github.com/abdulrehman-codecrafter/react-todo-.git",
        technologies: [
            { name: "React (Vite)", icon: "/assets/icons/vitejs.svg" },
            { name: "SCSS", icon: "/assets/icons/sass.svg" },
            { name: "Bootstrap", icon: "/assets/icons/bootstrap4.svg" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],
        features: [
            "Create, update, and delete tasks",
            "Task prioritization",
            "Due dates",
            "Responsive design for mobile and desktop",
        ],
    },
    {
        isApp: false,
        icon: <Cloud color="#00aaff" className="w-6 h-6" />,
        title: "Weather App",
        description:
            "Weather App is a web application that provides real-time weather updates for any location. The app features a user-friendly interface and responsive design for mobile devices. It includes features like current weather, 7-day forecast, and weather alerts.",
        href: "/projects/weather-app",
        slug: "weather-app",
        image: "/assets/images/weather.png",
        liveUrl: "https://abdulrahman-weather-app.netlify.app/",
        githubUrl: "https://github.com/abdulrehman-codecrafter/Weather-app.git",
        technologies: [
            { name: "HTML", icon: "/assets/icons/html5.svg" },
            { name: "CSS", icon: "/assets/icons/css3.svg" },
            { name: "OpenWeather API", icon: "/assets/images/openweather.png" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],
        features: [
            "Real-time weather updates",
            "Weather alerts",
            "Responsive design for web and mobile devices",
        ],
    },
    {
        isApp: false,
        icon: <ShoppingCart color="#ff6347" className="w-6 h-6" />,
        title: "E-commerce Website",
        description:
            "E-commerce Website is a web application that provides a platform for users to browse and purchase products online. The app features a user-friendly interface and responsive design for mobile and desktop devices. It includes features like user authentication, product browsing, and shopping cart.",
        href: "/projects/ecommerce-website",
        slug: "ecommerce-website",
        image: "/assets/images/ecommerce.png",
        liveUrl: "https://abdulrahman-ecommerce.netlify.app/",
        githubUrl:
            "https://github.com/abdulrehman-codecrafter/Electronic-Ecommerce.git",
        technologies: [
            { name: "React (Vite)", icon: "/assets/icons/vitejs.svg" },
            { name: "Firebase", icon: "/assets/icons/firebase.svg" },
            { name: "Bootstrap", icon: "/assets/icons/bootstrap4.svg" },
            { name: "SCSS", icon: "/assets/icons/sass.svg" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],
        features: [
            "User authentication",
            "Product browsing",
            "Shopping cart",
            "Responsive design for mobile and desktop",
        ],
    },
    {
        isApp: false,
        icon: <Hammer color="#007bff" className="w-6 h-6" />,
        title: "Br Architects",
        description:
            "Br Architects is a static website built using Bootstrap to showcase a responsive design. The website features a clean and modern interface, optimized for both mobile and desktop devices. It includes sections like home, about, services, and contact.",
        href: "/projects/br-achitects",
        slug: "br-architects",
        image: "/assets/images/br-architect.png",
        liveUrl: "https://imperfect--coal.surge.sh/",
        githubUrl:
            "https://github.com/abdulrehman-codecrafter/BOOTSTRAP-With-Animation.git",
        technologies: [
            { name: "HTML", icon: "/assets/icons/html5.svg" },
            { name: "CSS", icon: "/assets/icons/css3.svg" },
            { name: "Bootstrap", icon: "/assets/icons/bootstrap4.svg" },
            { name: "JavaScript", icon: "/assets/icons/js.svg" },
        ],
        features: [
            "Responsive design for mobile and desktop",
            "Clean and modern interface",
            "Home, About, Services, and Contact sections",
            "Optimized for performance",
        ],
    },
];
