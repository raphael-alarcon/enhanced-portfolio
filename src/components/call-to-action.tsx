"use client";

import { Button } from "@nextui-org/react";
import { Icons } from "./icons";

export function CallToAction() {
	return (
		<div className="flex flex-col items-start gap-4">
			<Button
				size="md"
				radius="md"
				variant="bordered"
				color="primary"
				endContent={<Icons.rightArrow width={15} />}>
				Hire me
			</Button>
		</div>
	);
}
