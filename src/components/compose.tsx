"use client";

import { NextUIProvider } from "@nextui-org/react";

export const providers: ComposeProps["providers"] = [NextUIProvider];

export interface ComposeProps {
	providers: React.FC<{ children: React.ReactNode | React.ReactNode[] }>[];
	children: React.ReactNode;
}

export function Compose({ providers, children }: ComposeProps) {
	return (
		<>
			{providers.reduceRight(
				(acc, Component) => (
					<Component>{acc}</Component>
				),
				children
			)}
		</>
	);
}
