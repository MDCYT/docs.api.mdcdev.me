
//Redirect to /intro
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
	const router = useRouter();
	
	useEffect(() => {
		router.push('/intro');
	}, []);

	return (
		//Using tailwindcss make a beautiful loading screen
		<div className="flex flex-col items-center justify-center h-screen w-screen">
			<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
			<p className="text-2xl font-bold">Redirecting...</p>
		</div>
	);
}
