import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LifeBuoyIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<h2>
				Naman Nema <LifeBuoyIcon />
			</h2>
			<Button>Khana Khalo</Button>
			<Button className="bg-secondary text-black">
				Khana Khalo
			</Button>
			<Button className="bg-accent text-black">
				Khana Khalo
			</Button>
			<UserButton />
		</div>
	);
}
