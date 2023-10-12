import Link from "next/link";
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@ui/navigation-menu";

export type NavigationElementProps = {
    item: {
        title: string;
        href: string;
    };
};

export function NavigationButton({ item }: NavigationElementProps) {
    return (
        <NavigationMenuItem>
            <Link href={item.href} legacyBehavior passHref className="flex">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
}
