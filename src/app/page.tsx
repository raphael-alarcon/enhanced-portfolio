import { CallToAction } from "@/components/call-to-action";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
	return (
		<main className="flex-1 flex min-h-full items-center">
			<section className="pb-8 pt-8 md:pb-12 md:pt-10 lg:py-32 flex flex-col items-center">
				<div className="gap-4 container flex items-center flex-col max-w-[82rem] relative text-center sm:text-left sm:items-start">
					<Link
						href={siteConfig.links.github}
						className="flex absolute -top-10 items-center rounded-2xl bg-primary px-4 py-1.5 text-sm font-medium gap-2"
						target="_blank">
						Visit my <Icons.gitHub className="h-4 w-4" />
					</Link>
					<h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
						I&rsquo;m Raphaël, the web developper you need to fully
						express yourself.
					</h1>
					<p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
						Thanks to my long experience in web developpement and
						web design, i&apos;m the best option to chose to bring
						to life your next wonderful idea.
					</p>
					<CallToAction />
				</div>
			</section>
		</main>
	);
}
