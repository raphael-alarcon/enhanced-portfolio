import "./globals.css";
import type { Metadata } from "next";
import { navConfig, siteConfig } from "@/config/site";
import { Navigation } from "@/components/navigation/navigation";

import { Inter, Onest } from "next/font/google";
import { cn } from "@/lib/utils";

export const fontSans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontHeading = Onest({
	weight: "700",
	subsets: ["latin"],
	variable: "--font-heading",
});

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
			<head></head>
			<body className={cn("min-h-screen antialiased font-sans flex-col", fontSans.variable, fontHeading.variable)}>
				<Navigation items={navConfig.items} />
				{children}
			</body>
		</html>
	);
}
