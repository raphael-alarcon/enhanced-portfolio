"use client";

import { Button } from "@nextui-org/react";
import { Icons } from "./icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CallToAction() {
    return (
        <div className="">
            <Link
                className="font-normal underline underline-offset-[10px] decoration-1 text-gray-500"
                href="/contact"
                passHref>
                {siteConfig.email}
            </Link>
        </div>
    );
}
