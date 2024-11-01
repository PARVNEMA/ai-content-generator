"use client";
import {
	History,
	Home,
	IndianRupee,
	Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function Sidenav() {
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
		<div className="h-screen p-5 shadow-sm border-r border-primary relative">
			<div className="flex justify-center">
				<Image
					src={"/logo.svg"}
					alt="logo"
					width={150}
					height={100}
				/>
			</div>

			<div className="mt-10">
				{MenuList.map((item, index) => (
					<Link href={item.path} key={index}>
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

export default Sidenav;
