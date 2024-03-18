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
            <NavbarBrand className="grow-0">
                <Link
                    className="font-bold flex flex-row items-center gap-2"
                    href={logoConfig.href}
                    passHref>
                    <Icons.logo size={32} />
                    {logoConfig.title}
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
                <DenPopover/>
            </NavbarContent>
        </Navbar>
    );
}
