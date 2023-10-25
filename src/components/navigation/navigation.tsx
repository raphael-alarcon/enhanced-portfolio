"use client";

//#region Imports
import React from "react";

import { NavConfig, NavItem } from "@/types";
import Link from "next/link";
import { Icons } from "../icons";
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { cva } from "class-variance-authority";
//#endregion

const logoItem: NavItem = {
	title: "Raphaël Alarçon",
	href: "/",
};

export function Navigation({ items }: NavConfig) {
	const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

	return (
		<Navbar
			maxWidth="full"
			className="flex justify-start max-w-none w-full bg-transparent gap-6 space-between border-b-1 border-menu"
			shouldHideOnScroll>
			<NavbarBrand className="grow-0">
				<Link
					className="font-bold flex flex-row items-center gap-2"
					href={logoItem.href}
					passHref>
					<Icons.logo size={32} />
					{logoItem.title}
				</Link>
			</NavbarBrand>
			{items?.length ? (
				<NavbarContent
					className="hidden justify-end md:flex gap-6"
					data-justify={null}>
					{items.map((item, index) => (
						<NavbarItem key={index}>
							<Link
								href={item.href}
								passHref
								className="link-menu">
								{item.title}
							</Link>
						</NavbarItem>
					))}
				</NavbarContent>
			) : null}
		</Navbar>
	);
}
