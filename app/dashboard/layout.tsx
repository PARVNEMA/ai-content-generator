"use client";
import React, { useState } from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsage";
import { StarsBackground } from "@/components/ui/stars-background";
import MobileSidenav from "./_components/MobileSideNav";

function layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [toalUsage, settoalUsage] = useState<number>(0);
	const [plan, setplan] = useState<number>(10);
	const [updatecreditusage, setupdatecreditusage] =
		useState();
	const [sidebaropen, setsidebaropen] = useState(false);

	return (
		<TotalUsageContext.Provider
			value={{ toalUsage, settoalUsage, plan, setplan }}
		>
			<UpdateCreditUsageContext.Provider
				value={{ updatecreditusage, setupdatecreditusage }}
			>
				<div>
					<div className="md:w-64 fixed md:block hidden h-screen">
						<Sidenav />
					</div>
					<div
						className={`md:w-screen fixed md:hidden  h-screen  ${
							sidebaropen ? "block" : "hidden"
						}`}
					>
						<MobileSidenav
							setsidebaropen={setsidebaropen}
							sidebaropen={sidebaropen}
						/>
					</div>

					<div className="md:ml-64">
						<Header
							setsidebaropen={setsidebaropen}
							sidebaropen={sidebaropen}
						/>

						{children}
					</div>
				</div>
				<StarsBackground
					starDensity={0.001}
					className="h-screen -z-10 "
				/>
			</UpdateCreditUsageContext.Provider>
		</TotalUsageContext.Provider>
	);
}

export default layout;
