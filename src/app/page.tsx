"use client";

import { AboutSection } from "@/components/sections/about-section";
import { HomeSection } from "@/components/sections/home-section";
import { WorkSection } from "@/components/sections/work-section";
import useCurrentSection from "@/hooks/use-current-section";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

type Section = {
	key: string;
	component: React.ReactNode;
};

const sections: Section[] = [
	{
		key: "home",
		component: <HomeSection/>,
	},
	{
		key: "about",
		component: <AboutSection/>,
	},
	{
		key: "work",
		component: <WorkSection/>,
	},
];

export default function IndexPage() {
	const currentSection = useCurrentSection();

	return (
		<main>
			{sections.map(({ key, component }) => (
				<section key={key} id={key} className="px-10 sm:px-40 flex flex-col justify-around min-h-screen items-center snap-start">
					{component}
				</section>
			))}

			<Breadcrumbs className="fixed bottom-4 ml-4">
				<BreadcrumbItem href="/">Home</BreadcrumbItem>
				<BreadcrumbItem href="/currentSection">{ currentSection }</BreadcrumbItem>
			</Breadcrumbs>
		</main>
	);
}
