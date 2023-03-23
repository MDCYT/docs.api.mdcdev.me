import Head from "next/head";
import { useRouter } from "next/router";

interface OpenGraphProps {
	title?: string;
	description?: string;
}

export default function OpenGraph({
	title = "api.mdcdev.me Documentation",
	description = "Documentation for the api.mdcdev.me API",
}: OpenGraphProps) {
	const router = useRouter();
	const url = `https://api.mdcdev.me${router.asPath}`;

	return (
		<Head>
			<meta key="description" name="description" content={description} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary" key="twitter-card" />
			<meta name="twitter:creator" content="@MDC_DEV" key="twitter-handle" />

			{/* Open Graph */}
			<meta property="og:url" content={url} key="og-url" />
			<meta property="og:image" content="/opengraph.png" key="og-image" />
			<meta property="og:site_name" content="api.mdcdev.me" key="og-site-name" />
			<meta property="og:title" content={title} key="og-title" />
			<meta property="og:description" content={description} key="og-desc" />
		</Head>
	);
}
