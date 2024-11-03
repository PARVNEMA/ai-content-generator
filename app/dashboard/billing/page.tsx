"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

function Billing() {
	const { user } = useUser();
	const { plan, setplan } = useContext(TotalUsageContext);
	const router = useRouter();
	const upgradesubscription = () => {
		setplan(100);
		console.log("Subscription Upgraded");

		router.push("/dashboard");
	};
	const verifyuser = () => {
		user?.update({
			unsafeMetadata: {
				subscribed: true,
			},
		});
	};
	useEffect(() => {
		if (user?.unsafeMetadata?.subscribed == true)
			setplan(100);
	}, []);

	return (
		<div className="text-white h-screen mt-10">
			<div>
				<h2 className="w-full text-2xl font-bold text-center mb-8">
					Subscribe To Monthly Plan
				</h2>
				<div
					className=" h-full
				flex md:flex-row flex-col justify-center items-center gap-4 lg:gap-10"
				>
					<div className="">
						<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
							<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
								Free plan
							</h5>
							<div className="flex items-baseline text-gray-900 dark:text-white">
								<span className="text-3xl font-semibold">
									$
								</span>
								<span className="text-5xl font-extrabold tracking-tight">
									0
								</span>
								<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
									/month
								</span>
							</div>
							<ul role="list" className="space-y-5 my-7">
								<li className="flex items-center">
									<svg
										className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
									</svg>
									<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
										10 Requests
									</span>
								</li>
								<li className="flex">
									<svg
										className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
									</svg>
									<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
										History of Requests
									</span>
								</li>
							</ul>
							<button
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
							>
								Choose plan
							</button>
						</div>
					</div>
					<div>
						<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
							<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
								Standard plan
							</h5>
							<div className="flex items-baseline text-gray-900 dark:text-white">
								<span className="text-3xl font-semibold">
									$
								</span>
								<span className="text-5xl font-extrabold tracking-tight">
									49
								</span>
								<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
									/month
								</span>
							</div>
							<ul role="list" className="space-y-5 my-7">
								<li className="flex">
									<svg
										className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
									</svg>
									<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
										100 Requests per month
									</span>
								</li>
								<li className="flex">
									<svg
										className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
									</svg>
									<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
										Additional Editor Section
									</span>
								</li>
							</ul>
							<button
								type="button"
								className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center ${user?.unsafeMetadata?.subscribed} ? "disabled":"inline-flex"`}
								onClick={verifyuser}
							>
								Choose plan
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Billing;
