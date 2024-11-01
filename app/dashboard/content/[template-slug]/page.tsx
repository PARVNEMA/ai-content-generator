"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Template from "@/app/(data)/Template";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowLeftSquare } from "lucide-react";
import { chatSession } from "@/utils/AiModel";
import { AiOutput } from "@/utils/Schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsage";

interface PROPS {
	params: {
		"template-slug": string;
	};
}
function CreateNewContent(props: PROPS) {
	const [loading, setloading] = useState(false);
	const [aiOutput, setaiOutput] = useState<string>("");
	const { toalUsage, settoalUsage, plan, setplan } =
		useContext(TotalUsageContext);
	const { user } = useUser();
	const { params } = props;
	const router = useRouter();
	const selectedTemplate: TEMPLATE | undefined =
		Template?.find(
			(item) => item.slug === params["template-slug"]
		);
	const { updatecreditusage, setupdatecreditusage } =
		useContext(UpdateCreditUsageContext);

	const GenerateAiContent = async (formData: any) => {
		if (toalUsage > plan) {
			console.log("please upgrade your plan");
			router.push("/dashboard/billing");
			return;
		}
		setloading(true);
		const selectedPrompt = selectedTemplate?.aiPrompt;

		const FinalAiPrompt =
			JSON.stringify(formData) + "," + selectedPrompt;

		const result = await chatSession.sendMessage(
			FinalAiPrompt
		);

		console.log("ai result=", result.response.text());
		setaiOutput(result.response.text());
		await saveInDb(
			JSON.stringify(formData),
			selectedTemplate?.slug,
			result.response.text()
		);
		setloading(false);
		setupdatecreditusage(Date.now());
	};
	const saveInDb = async (
		formData: any,
		slug: any,
		aiResp: any
	) => {
		if (!formData) {
			throw new Error("formData is required");
		}
		const result = await db.insert(AiOutput).values({
			formData: formData,
			templateSlug: slug,
			aiResponse: aiResp,
			createdBy: user?.primaryEmailAddress?.emailAddress,
			createdAt: moment().format("YYYY-MM-DD"),
		});
	};
	return (
		<div className="p-5">
			<Link href={"/dashboard"}>
				<Button className="font-bold">
					{" "}
					<ArrowLeft /> Back
				</Button>
			</Link>

			<div
				className="text-white grid grid-cols-1 md:grid-cols-3 gap-5 p-5 border-gray-800 py-5
			"
			>
				<FormSection
					selectedTemplate={selectedTemplate}
					userFormInput={(v: any) => GenerateAiContent(v)}
					loading={loading}
				/>
				<div className="col-span-2">
					<OutputSection aiOutput={aiOutput} />
				</div>
			</div>
		</div>
	);
}

export default CreateNewContent;
