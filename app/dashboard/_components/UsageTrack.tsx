"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsage";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import Link from "next/link";

import React, {
	useContext,
	useEffect,
	useState,
} from "react";

function UsageTrack() {
	const { user } = useUser();
	const context = useContext(TotalUsageContext);

	if (!context) {
		throw new Error(
			"UsageTrack must be used within a TotalUsageContext.Provider"
		);
	}

	const { toalUsage, settoalUsage, plan, setplan } =
		context;
	const { updatecreditusage, setupdatecreditusage } =
		useContext(UpdateCreditUsageContext);

	const getData = async (user: any) => {
		{
			/*@ts-ignore*/
		}
		const result: any = await db
			.select()
			.from(AiOutput)
			.where(
				eq(
					AiOutput.createdBy,
					user?.primaryEmailAddress?.emailAddress
				)
			);
		GetTotalUsage(result);
	};

	const GetTotalUsage = (result: any) => {
		let total = 0;
		result.forEach((element: any) => {
			total += 1;
		});
		console.log("total elements", total);
		settoalUsage(total);
	};

	useEffect(() => {
		user && getData(user);
	}, [user]);

	useEffect(() => {
		user && getData(user);
	}, [updatecreditusage]);

	return (
		<div className="m-5 ">
			<div className=" bg-accent text-white p-3 rounded-lg">
				<h2 className="font-medium">Credits</h2>
				<div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
					<div
						className="h-2 bg-white rounded-full"
						style={{
							width: (toalUsage / 10) * 100 + "%",
						}}
					></div>
				</div>
				<h2 className="text-sm my-2">
					{toalUsage}/{plan} Credits used
				</h2>
			</div>
			<Link href={"/dashboard/billing"}>
				<Button className="w-full my-3 text-white">
					Upgrade{" "}
				</Button>
			</Link>
		</div>
	);
}

export default UsageTrack;
