"use client";

import * as React from "react";

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavConfig, NavItem } from "@/types";
import { NavigationButton } from "./navigation-button";
import { NavigationLogo } from "./navigation-logo";

const logoItem: NavItem = {
    title: "Raphaël Alarcon",
    href: "/",
};

export function Navigation({ items }: NavConfig) {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="container z-40">
            <NavigationMenu className="flex h-20 items-center justify-between py-6">
                <NavigationMenuList className="gap-6 md:gap-10">
                    <NavigationLogo item={logoItem} />
                    {items?.length ? (
                        <div className="flex items-center space-x-6">
                            {items.map((item, index) => (
                                <NavigationButton key={index} item={item} />
                            ))}
                        </div>
                    ) : null}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
