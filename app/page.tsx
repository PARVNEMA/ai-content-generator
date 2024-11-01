"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Meteors } from "@/components/ui/meteors";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
	return (
		<div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
				<h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
					All Your AI <br /> In One.
				</h1>
				<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto text-wrap">
					All your needed AI at one Place Ask Your Queries
					and get Answer in Rich Editor and Edit them
					According to your need.and buy Subscription to get
					More Benefits
				</p>
				<div className="w-full flex items-center justify-center">
					<Link href={"/dashboard"}>
						<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-8">
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								Get Started
							</span>
						</button>
					</Link>
				</div>
			</div>
			<Meteors number={30} />
			<StarsBackground
				starDensity={0.001}
				className="min-h-full"
			/>
		</div>
	);
}
