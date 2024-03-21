"use client";

//#region Imports
import React from "react";

import { NavConfig } from "@/types";
import Link from "next/link";
import { Icons } from "../icons";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import { logoConfig } from "@/config/site";
import { DenPopover } from "./popover";
//#endregion

export function Navigation({ items }: NavConfig) {

    return (
        <Navbar
            maxWidth="full"
            height="6rem"
            className="fixed flex bg-transparent px-10 uppercase"
            isBlurred={false}>
            <NavbarBrand>
                <Link
                    className="font-bold flex flex-row items-center gap-2"
                    href={logoConfig.href}>
                    <Icons.logo size={32}/>
                    {logoConfig.title}
                </Link>
            </NavbarBrand>
            <NavbarContent className="flex gap-12" data-justify="null">
                {items?.length ? (
                    <div className="hidden md:flex gap-12">
                        {items.map((item, index) => (
                            <NavbarItem key={index}>
                                <Link
                                    href={item.href}
                                    className="block relative text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60 after:content-[''] after:absolute after:w-full after:h-[.1em] after:bottom-0 after:left-0 after:bg-foreground/80 after:opacity-0 after:transition-all after:-translate-x-full hover:after:opacity-100 hover:after:translate-x-0 overflow-hidden">
                                    {item.title}
                                </Link>
                            </NavbarItem>
                        ))}
                    </div>
                ) : null}
                <DenPopover/>
            </NavbarContent>
        </Navbar>
    );
}
