import { CallToAction } from "@/components/call-to-action";
import { Circle } from "@/components/circle";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
    return (
        <main className="flex-1 flex min-h-full min-w-full sm:pb-60">
            <section className="lg:px-60 sm:px-10 md:pb-12 md:pt-10 lg:py-32 flex flex-col pb-40 justify-center gap-10 sm:justify-around sm:items-center">
                <div className="flex flex-col sm:text-left text-center sm:items-start">
                    <h1 className="max-w-[68rem] font-heading text-3xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">
                        I&rsquo;m Raphaël, the web developper you need to fully
                        express yourself.
                    </h1>
                    {/* <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Thanks to my long experience in web developpement and
                        web design, i&apos;m the best option to chose to bring
                        to life your next wonderful idea.
                    </p> */}
                </div>
                <CallToAction />
                <Circle
                    color="primary"
                    height={600}
                    width={600}
                    x={-10}
                    y={60}
                />
            </section>
        </main>
    );
}
