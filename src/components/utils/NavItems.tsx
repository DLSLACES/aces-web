import { 
    GithubLogo,
    ProjectorScreenChart, 
} from "@phosphor-icons/react/dist/ssr";

export const NavItems = [
    {
        title: "Github",
        href: "https://github.com/DLSLACES",
        target: "_blank",
        icon: <GithubLogo size={24} />
    },
    {
        title: "Projects",
        href: "/projects",
        target: "_self",
        icon: <ProjectorScreenChart size={24} />
    },
    // Don't really need these rn
    // {
    //     title: "Projects 📁",
    //     href: "/projects",
    // },
    // {
    //     title: "Announcements 📢",
    //     href: "/posts",
    // },
];