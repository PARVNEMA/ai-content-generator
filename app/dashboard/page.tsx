"use client";
import React, { useState } from "react";
import SearchSectionTemplate from "./_components/SearchSectionTemplate";
import TemplateListSection from "./_components/TemplateListSection";
import { useDebounce } from "@uidotdev/usehooks";
import { StarsBackground } from "@/components/ui/stars-background";
function Dashboard() {
	const [userSearchInput, setuserSearchInput] =
		useState<string>();
	const debouncedSearchTerm = useDebounce(
		userSearchInput,
		1000
	);
	// console.log(debouncedSearchTerm);

	return (
		<div className="text-white w-full h-full">
			<SearchSectionTemplate
				onSearchInput={(value: string) =>
					setuserSearchInput(value)
				}
			/>

			<TemplateListSection
				userSearchInput={debouncedSearchTerm}
			/>
		</div>
	);
}

export default Dashboard;
