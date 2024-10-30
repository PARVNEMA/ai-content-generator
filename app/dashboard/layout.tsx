import { Divide } from "lucide-react";
import React from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";

function layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<div className="md:w-64 fixed md:block hidden h-sc">
				<Sidenav />
			</div>
			<div className="md:ml-64">
				<Header />
				{children}
			</div>
		</div>
	);
}

export default layout;
