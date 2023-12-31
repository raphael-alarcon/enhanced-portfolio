//#region Imports
import "./globals.css";
import type { Metadata } from "next";
import { navConfig, siteConfig } from "@/config/site";
import { Navigation } from "@/components/navigation/navigation";

import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Compose, providers } from "@/components/compose";
import { SideNavigation } from "@/components/navigation/side-navigation";
import { Background } from "@/components/background";
//#endregion

//#region Fonts
const fontSans = Inter({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontHeading = localFont({
	src: "../../public/fonts/TAN-PEARL.woff2",
	weight: "700",
	variable: "--font-heading",
});
//#endregion

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	authors: {
		name: siteConfig.author,
		url: "",
	},
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen antialiased font-sans overflow-hidden",
					fontHeading.variable,
					fontSans.variable
				)}>
				<Compose providers={providers}>
					<div className="flex flex-row min-h-screen min-w-full">
						<Background />
						<SideNavigation />
						<div className="flex-1">
							<Navigation items={navConfig.items} />
							{children}
						</div>
					</div>
				</Compose>
			</body>
		</html>
	);
}
