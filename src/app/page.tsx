import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
	return (
		<main className="flex-1">
			<section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 flex flex-row">
				<div className="gap-4 container text-center flex items-center flex-col max-w-[82rem]">
					<Link href={siteConfig.links.github} className="flex items-center rounded-2xl bg-ghost mx-2 px-4 py-1.5 text-sm font-medium gap-2" target="_blank">
						Visit my <Icons.gitHub className="h-4 w-4" />
					</Link>
					<h1 className="font-heading text-5xl sm:text-5xl md:text-6xl lg:text-7xl">I'm Raphaël, the web developper you need to fully express yourself.</h1>
					<p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
						Thanks to our long experience in web developpement and web design, we are the best option to chose to give birth to your next project.
					</p>
				</div>
				<div></div>
			</section>
		</main>
	);
}
