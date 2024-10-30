import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";
function TemplateCard(item: TEMPLATE) {
	return (
		<Link href={"/dashboard/content/" + item?.slug}>
			<div className="p-10  shadow-white rounded-md flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all mt-10 mx-2 shadow-inner">
				<Image
					src={item.icon}
					alt="icon"
					height={50}
					width={50}
				/>
				<h2 className="font-medium text-lg">{item.name}</h2>
				<p className="text-gray-400 line-clamp-5">
					{item.desc}
				</p>
			</div>
		</Link>
	);
}

export default TemplateCard;
