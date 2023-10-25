"use client";

import { Button } from "@nextui-org/react";
import { Icons } from "../icons";

export function SideNavigation() {
	return (
		<aside className="hidden sm:flex flex-col min-h-full border-menu border-r-1">
			<Button isIconOnly className="bg-transparent m-4">
				<Icons.menu />
			</Button>
			<div className="flex-1">
				<Button isIconOnly className="bg-transparent m-4">
					<Icons.contrast />
				</Button>
			</div>
		</aside>
	);
}
