import Link from "next/link";
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuLogoStyle,
} from "@ui/navigation-menu";
import { NavigationElementProps } from "./navigation-button";
import { Icons } from "../icons";

export function NavigationLogo({ item }: NavigationElementProps) {
    return (
        <NavigationMenuItem>
            <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuLogoStyle()}>
                    <Icons.logo size={32} />
                    {item.title}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
}
