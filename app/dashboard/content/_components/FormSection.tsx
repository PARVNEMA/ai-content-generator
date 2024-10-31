"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
	selectedTemplate?: TEMPLATE;
	userFormInput?: any;
	loading: boolean;
}
function FormSection({
	selectedTemplate,
	userFormInput,
	loading,
}: PROPS) {
	const [formData, setformData] = useState<any>();

	const onSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);
		userFormInput(formData);
	};
	const handleInput = (e: any) => {
		const { name, value } = e.target;
		setformData({ ...formData, [name]: value });
	};
	return (
		<div className="p-5 shadow-lg border rounded-lg">
			{/* @ts-ignore */}
			<Image
				src={selectedTemplate?.icon}
				alt="icon"
				width={70}
				height={70}
			/>
			<h2 className="font-bold text-2xl mb-2 text-secondary">
				{selectedTemplate?.name}
			</h2>
			<p className="text-md text-gray-300">
				{selectedTemplate?.desc}
			</p>

			<form action="" className="mt-6" onSubmit={onSubmit}>
				{selectedTemplate?.form?.map((item, index) => (
					<div className="my-2 flex flex-col gap-2 mb-7">
						<label htmlFor="" className="font-bold">
							{item.label}
						</label>
						{item.field === "input" ? (
							<Input
								name={item?.name}
								required={item?.required}
								onChange={handleInput}
							/>
						) : item.field === "textarea" ? (
							<Textarea
								name={item?.name}
								required={item?.required}
								onChange={handleInput}
							/>
						) : null}
					</div>
				))}
				<Button
					className="font-bold w-full py-6"
					type="submit"
					disabled={loading}
				>
					{loading && (
						<Loader2Icon className="animate-spin" />
					)}
					Generate Content
				</Button>
			</form>
		</div>
	);
}

export default FormSection;
