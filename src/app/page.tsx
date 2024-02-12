import { AboutSection } from "@/components/sections/about-section";
import { HomeSection } from "@/components/sections/home-section";

type Section = {
	key: string;
	Component: React.ReactNode;
};

const sections: Section[] = [
	{
		key: "home",
		Component: <HomeSection/>,
	},
	{
		key: "about",
		Component: <AboutSection/>,
	},
];

export default function IndexPage() {
	return (
		<main>
			{sections.map(({ key, Component }) => (
				<section key={key} className="px-10 sm:px-40 flex flex-col justify-around min-h-screen items-center snap-start">
					{Component}
				</section>
			))}
		</main>
	);
}
