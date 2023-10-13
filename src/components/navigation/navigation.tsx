"use client";

import * as React from "react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavConfig, NavItem } from "@/types";
import { NavigationButton } from "./navigation-button";
import { NavigationLogo } from "./navigation-logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Icons } from "../icons";

const logoItem: NavItem = {
    title: "Raphaël Alarcon",
    href: "/",
};

export function Navigation({ items }: NavConfig) {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="container z-40 flex items-center">
            <NavigationMenu className="flex h-20 min-w-full justify-between py-4">
                <NavigationMenuList className="flex gap-6 md:gap-10">
                    <NavigationLogo item={logoItem} />
                    {items?.length ? (
                        <div className="flex items-center">
                            {items.map((item, index) => (
                                <NavigationButton key={index} item={item} />
                            ))}
                        </div>
                    ) : null}
                </NavigationMenuList>
                <NavigationMenuItem className="flex">
                    <Button variant={"secondary"} asChild>
                        <Link href="/login" passHref>
                            Login with Email
                        </Link>
                    </Button>
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    );
}
