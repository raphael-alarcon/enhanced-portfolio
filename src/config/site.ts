import { ProjectCard } from "@/components/sections/work/project-card";
import {
	BackgroundConfig,
	NavConfig,
	NavItem,
	Project,
	SiteConfig,
} from "@/types";

//#region SiteConfig
export const siteConfig: SiteConfig = {
	title: "Portfolio",
	description:
		"My open source portfolio crafted with NextJS, Shadcn/UI, and Bun.",
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
//#endregion

//#region Navigation
export const logoConfig: NavItem = {
	title: "Raphaël Alarçon",
	href: "#home",
};

export const navConfig: NavConfig = {
	items: [
		{
			title: "About",
			href: "#about",
		},
		{
			title: "My work",
			href: "#work",
		},
		{
			title: "Contact",
			href: "#contact",
		},
	],
};
//#endregion

//#region Background
export const backgroundConfig: BackgroundConfig = {
	opacity: "0.2",
	filter: {
		frequency: 5,
		nbOctaves: 3,
	},
};
//#endregion

//#region Projects
export const projectsConfig: Project[] = [
	{
		title: "Bookzy",
		icon: "bookzy",
		description: "Test",
		image: "/images/projects/work-placeholder.png",
		url: "",
	},
	{
		title: "MADPS",
		icon: "github",
		description: "Test",
		image: "/images/projects/work-placeholder.png",
		url: "",
	},
	{
		title: "IUT Onboarding",
		description:
			"Onboarding screen for the IUT of Bordeaux's computer science department.",
		image: "/images/projects/iut-onboarding.png",
		url: "",
		color: "#6c647c",
		icon: "iut",
		github: "https://github.com/raphael-alarcon/iut-onboarding",
	},
];
//#endregion
