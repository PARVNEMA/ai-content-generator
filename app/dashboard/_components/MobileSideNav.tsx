"use client";
import {
	Cross,
	History,
	Home,
	IndianRupee,
	MenuIcon,
	Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { Button } from "@/components/ui/button";

function MobileSidenav({
	setsidebaropen,
	sidebaropen,
}: any) {
	const MenuList = [
		{
			name: "Home",
			icon: Home,
			path: "/dashboard",
		},
		{
			name: "History",
			icon: History,
			path: "/dashboard/history",
		},
		{
			name: "Subscription",
			icon: IndianRupee,
			path: "/dashboard/billing",
		},
		{
			name: "Settings",
			icon: Settings,
			path: "/dashboard/settings",
		},
	];

	const path = usePathname();
	useEffect(() => {});
	return (
		<div className="h-screen p-5 shadow-sm relative bg-white bg-opacity-50">
			<div className="flex justify-between">
				<Button
					onClick={() => setsidebaropen(!sidebaropen)}
					className="md:hidden block z-10"
				>
					<MenuIcon />
				</Button>
				<Button
					onClick={() => setsidebaropen(false)}
					className="bg-red-500 text-white"
				>
					<Cross className="rotate-45" />
				</Button>
			</div>
			<div className="mt-10">
				{MenuList.map((item, index) => (
					<Link
						href={item.path}
						key={index}
						onClick={() => setsidebaropen(false)}
					>
						<div
							className={`text-secondary flex justify-center gap-4 mb-2 p-3 font-bold hover:bg-primary hover:rounded-md cursor-pointer
                ${
									path === item.path
										? "bg-primary rounded-lg"
										: ""
								}`}
						>
							<item.icon /> {item.name}
						</div>
					</Link>
				))}
			</div>
			<div className="absolute bottom-10 left-0 w-full ">
				{" "}
				<UsageTrack />
			</div>
		</div>
	);
}

export default MobileSidenav;
