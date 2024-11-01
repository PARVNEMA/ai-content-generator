"use client";
import React, { useState } from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsage";

function layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [toalUsage, settoalUsage] = useState<number>(0);
	const [plan, setplan] = useState<number>(10);
	const [updatecreditusage, setupdatecreditusage] =
		useState();

	return (
		<TotalUsageContext.Provider
			value={{ toalUsage, settoalUsage, plan, setplan }}
		>
			<UpdateCreditUsageContext.Provider
				value={{ updatecreditusage, setupdatecreditusage }}
			>
				<div>
					<div className="md:w-64 fixed md:block hidden h-sc">
						<Sidenav />
					</div>
					<div className="md:ml-64">
						<Header />
						{children}
					</div>
				</div>
			</UpdateCreditUsageContext.Provider>
		</TotalUsageContext.Provider>
	);
}

export default layout;
