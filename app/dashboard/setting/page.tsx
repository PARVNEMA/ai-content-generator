"use client";
import { UserProfile } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Settings() {
	const router = useRouter();
	useEffect(() => {
		router.replace("/dashboard");
	}, []);

	return <></>;
}

export default Settings;
