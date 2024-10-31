"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Template from "@/app/(data)/Template";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowLeftSquare } from "lucide-react";
import { chatSession } from "@/utils/AiModel";

interface PROPS {
	params: {
		"template-slug": string;
	};
}
function CreateNewContent(props: PROPS) {
	const [loading, setloading] = useState(false);
	const [aiOutput, setaiOutput] = useState<string>("");

	const { params } = props;
	const selectedTemplate: TEMPLATE | undefined =
		Template?.find(
			(item) => item.slug === params["template-slug"]
		);

	const GenerateAiContent = async (formData: any) => {
		setloading(true);
		const selectedPrompt = selectedTemplate?.aiPrompt;

		const FinalAiPrompt =
			JSON.stringify(formData) + "," + selectedPrompt;

		const result = await chatSession.sendMessage(
			FinalAiPrompt
		);

		console.log("ai result=", result.response.text());
		setaiOutput(result.response.text());
		setloading(false);
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
