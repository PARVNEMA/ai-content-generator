"use client";
import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface props {
	aiOutput: string;
}
function OutputSection({ aiOutput }: props) {
	const editorRef: any = useRef();

	useEffect(() => {
		const editorInstance = editorRef.current.getInstance();
		editorInstance.setMarkdown(aiOutput);
	}, [aiOutput]);

	return (
		<div className="border shadow-lg bg-secondary text-black">
			<div className="flex justify-between items-center p-5">
				<h2 className="text-black font-bold">
					Your Results
				</h2>
				<Button className={`active:bg-white`}>
					{" "}
					<Copy className="w-4 h-4 font-bold" /> Copy
				</Button>
			</div>
			<Editor
				initialValue="hello react editor world!"
				initialEditType="wysiwyg"
				height="600px"
				useCommandShortcut={true}
				ref={editorRef}
				onChange={() =>
					console.log(
						editorRef.current.getInstance().getMarkdown()
					)
				}
			/>
		</div>
	);
}

export default OutputSection;
