import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react"
import { Icons } from "../icons";
import { navConfig } from "@/config/site";

type DenDropdownProps = {
    isOpenDefault: boolean
}

export const DenDropdown = ({isOpenDefault}: DenDropdownProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault);

    const iconClasses = "text-default-500 pointer-events-none flex-shrink-0";

    return (
        <Dropdown isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DropdownTrigger>
                <NavbarMenuToggle data-open={isOpen}/>
            </DropdownTrigger>
            <DropdownMenu data-placement="bottom-end" aria-labelledby="Menu dropdown">
                <DropdownSection className="md:hidden" title="Menu" showDivider>
                    { navConfig.items.map((item, index) => (
                        <DropdownItem key={index}>{item.title}</DropdownItem>
                    ))}
                </DropdownSection>
                <DropdownSection title="Settings" showDivider>
                    <DropdownItem startContent={<Icons.theme className={iconClasses} size={16}/>}>Appearance</DropdownItem>
                    <DropdownItem startContent={<Icons.lang className={iconClasses} size={16}/>}>Language</DropdownItem>
                </DropdownSection>
                <DropdownSection title="Account">
                    <DropdownItem startContent={<Icons.login className={iconClasses} size={16}/>}>Login</DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )

}