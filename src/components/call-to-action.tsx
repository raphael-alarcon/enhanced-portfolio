"use client";

import { Button } from "@nextui-org/react";
import { Icons } from "./icons";
import Link from "next/link";

export function CallToAction() {
    return (
        <div className="flex justify-center sm:self-start">
            <Link
                className="font-semibold underline underline-offset-[10px] decoration-2"
                href="/contact"
                passHref>
                Raph.alarcon@gmail.com
            </Link>
        </div>
    );
}
