import { Search } from "lucide-react";
import React from "react";

function SearchSectionTemplate({ onSearchInput }: any) {
	return (
		<div className="p-10 bg-gradient-to-br from-blue-700 via-violet-500 to-violet-700 flex  flex-col justify-center items-center ">
			<h2 className="text-3xl font-semibold">
				Browse All Templates
			</h2>
			<p>What would you like to create Today?</p>
			<div className="w-full flex justify-center items-center">
				<div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
					<Search className="text-accent" />
					<input
						type="text"
						placeholder="Search"
						className="bg-transparent w-full outline-none text-black"
						onChange={(e) => onSearchInput(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}

export default SearchSectionTemplate;
