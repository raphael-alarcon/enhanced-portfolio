import { AboutSection } from "@/components/sections/about-section";
import { HomeSection } from "@/components/sections/home-section";

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
];

export default function IndexPage() {
	return (
		<main>
			{sections.map(({ key, component }) => (
				<section key={key} className="px-10 sm:px-40 flex flex-col justify-around min-h-screen items-center snap-start">
					{component}
				</section>
			))}
		</main>
	);
}
