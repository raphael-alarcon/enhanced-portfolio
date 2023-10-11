import { NavConfig, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
    title: "Portfolio",
    description: "My open source portfolio crafted with NextJS, Shadcn/UI, and Bun.",
    author: "Raphael ALARCON",
    url: "",
    email: "raph.alarcon1@gmail.com",
    logo: "",
    links: {
        twitter: "https://twitter.com/SalutCDensetsu",
        github: "https://github.com/raphael-alarcon",
        linkedin: "https://www.linkedin.com/in/raphael-alarcon/",
    },
};

export const navConfig: NavConfig = {
    items: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],
};
