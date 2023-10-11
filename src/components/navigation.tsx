"use client";

import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { NavigationMenuList } from "./ui/navigation-menu";
import { NavigationMenu } from "./ui/navigation-menu";
import { NavConfig } from "@/types";
    
export function Navigation({items}: NavConfig) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {items?.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        <span>{item.title}</span>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
