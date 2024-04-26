'use client'

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";


import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { SearchIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import { Avatar } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import React from "react";

const searchInput = (
	<Input
		aria-label="Search"
		classNames={{
			inputWrapper: "bg-default-100",
			input: "text-sm",
		}}
		labelPlacement="outside"
		placeholder="Search..."
		startContent={
			<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
		}
		type="search"
	/>
);
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarMenuToggle />
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">BOOK STORE</p>
					</NextLink>
				</NavbarBrand>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex items-center gap-x-2">
					<ThemeSwitch />
					<Link color="foreground" href="/login">Log in</Link>
					<Avatar isBordered className="transition-transform" size="sm" />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"}
								href={item.href}
								size="lg"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
