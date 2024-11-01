import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
	return (
		<div className="p-5 shadow-sm border-b-2 border-b-primary flex items-center justify-between w-full">
			<div className="flex gap-2  p-2 border rounded-md max-w-lg text-white flex-grow">
				<Search />
				<input
					type="text"
					placeholder="Search..."
					className="outline-none  bg-transparent w-full"
				/>
			</div>
			<div className="flex gap-5 items-center">
				<h2 className="bg-accent rounded-full text-xs text-secondary p-2 font-semibold">
					Subscriptions Starting From 49$/Month
				</h2>
				<UserButton />
			</div>
		</div>
	);
}

export default Header;
