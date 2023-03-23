import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/intro").catch(console.error).then().catch(console.error);
	}, [router]);

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen">
			<div className="w-32 h-32 border-b-2 border-t-2 border-gray-900 rounded-full animate-spin"></div>
			<p className="text-2xl font-bold">Redirecting...</p>
		</div>
	);
}
