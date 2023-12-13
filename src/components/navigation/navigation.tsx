"use client";

//#region Imports
import React from "react";

import { NavConfig, NavItem } from "@/types";
import Link from "next/link";
import { Icons } from "../icons";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
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
            height="6rem"
            className="flex max-w-none w-full bg-transparent gap-6 space-between px-10 uppercase"
            isBlurred={false}
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
            <NavbarContent className="flex gap-12" data-justify="null">
                {items?.length ? (
                    <div className="hidden md:flex gap-12 uppercase">
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
                    </div>
                ) : null}
                <NavbarMenuToggle
                    onClick={() =>
                        setShowMobileMenu((prev) => !prev)
                    }></NavbarMenuToggle>
            </NavbarContent>
        </Navbar>
    );
}
