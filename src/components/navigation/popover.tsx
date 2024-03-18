"use client";

import React, { useState } from "react"
import { Icons } from "../icons";
import { navConfig } from "@/config/site";
import { Divider, NavbarMenuToggle, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { PopoverItem } from "./popover-item";
import useMediaQuery from "@/hooks/use-media-query";

export const DenPopover = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const isMediumDevice = useMediaQuery(
        "only screen and (min-width : 769px)"
      );

    const iconClasses = "text-default-500 pointer-events-none flex-shrink-0";  

    return (
        <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} backdrop="opaque" placement="bottom-end" size="md" className="w-52">
            <PopoverTrigger>
                <NavbarMenuToggle data-open={isOpen}/>
            </PopoverTrigger>
            <PopoverContent data-placement="bottom-end" aria-labelledby="Menu dropdown" className="gap-4 items-start p-4">
                { !isMediumDevice && (
                    <div title="Menu" className="flex flex-col w-full"> 
                        { navConfig.items.map((item, index) => (
                            <PopoverItem key={index}>{item.title}</PopoverItem>
                        ))}
                        <Divider/>
                    </div>
                )}
                <div title="Settings" className="flex flex-col w-full">
                    <PopoverItem startContent={<Icons.theme className={iconClasses} size={20}/>}>Appearance</PopoverItem>
                    <PopoverItem startContent={<Icons.lang className={iconClasses} size={20}/>}>Language</PopoverItem>
                </div>
                <Divider/>
                <div title="Account" className="w-full">
                    <PopoverItem startContent={<Icons.login className={iconClasses} size={20}/>}>Login</PopoverItem>
                </div>
            </PopoverContent>
        </Popover>
    )

}