"use client";
import Template from "@/app/(data)/Template";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import { Copy, Loader2 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TEMPLATE } from "../_components/TemplateListSection";
import { AiOutput } from "@/utils/Schema";
import { desc, eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";

export interface HISTORY {
	id: number;
	formData: string;
	aiResponse: string;
	templateSlug: string;
	createdBy: string;
	createdAt: string;
}
function HistoryPage() {
	const [data, setData] = useState<HISTORY[]>([]);

	const { user } = useUser();

	const fetchHistoryByEmail = async (email: any) => {
		const res = await db
			.select()
			.from(AiOutput)
			.where(eq(AiOutput.createdBy, email))
			.orderBy(desc(AiOutput.createdAt))
			.execute();

		return res.map((item: any) => ({
			...item,
			aiResponse: item.aiResponse ?? "",
		}));
	};

	const fetchData = async (user: any) => {
		const data = await fetchHistoryByEmail(
			user.primaryEmailAddress?.emailAddress
		);
		setData(data);
		console.log("data", data);
	};

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text);
		alert("copied to clipboard");
	};
	useEffect(() => {
		user && fetchData(user);
	}, [user]);
	const image = (templateSlug: string) => {
		const template: TEMPLATE | undefined = Template.find(
			(item) => item.slug === templateSlug
		);
		return template;
	};

	return (
		<div className="container mx-auto p-6 text-white">
			<h1 className="text-2xl font-bold mb-4 ">History</h1>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center font-semibold bg-gray-200 p-2">
				<div className="text-black">Template</div>
				<div className="col-span-2 text-black">
					AI Response
				</div>
				<div className="text-black">Date</div>
				<div className="text-black">Copy</div>
			</div>
			{data.map((item) => (
				<div
					key={item.id}
					className="grid grid-cols-1 md:grid-cols-5 gap-6 p-3 border-b"
				>
					<div className="flex justify-center items-center gap-2">
						<Image
							src={image(item.templateSlug)?.icon}
							width={50}
							height={50}
							alt="logo"
						/>
						{item.templateSlug}
					</div>
					<div className="col-span-2 truncate">
						{item.aiResponse}
					</div>
					<div className="md:mx-14">
						{new Date(item.createdAt).toLocaleDateString()}
					</div>
					<div className="md:mx-14">
						<Button
							className="flex gap-2"
							onClick={() => handleCopy(item.aiResponse)}
						>
							<Copy className="w-4 h-4" /> Copy
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}

export default HistoryPage;
