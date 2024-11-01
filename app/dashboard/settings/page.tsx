"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { UserProfile } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Settings() {
	return (
		<div className="h-full w-ful flex items-center justify-center">
			<UserProfile />
		</div>
	);
}

export default Settings;
