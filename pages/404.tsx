import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import ContentWrapper from "../components/mdx/ContentWrapper";
import Paragraph from "../components/mdx/Paragraph";
import YouTubeEmbed from "../components/YouTubeEmbed";

function LinkList({ className, children }: { className: string; children: ReactNode }) {
	const classes = classNames("grid gap-8 grid-cols-1 lg:grid-cols-2", className);
	return <ul className={classes}>{children}</ul>;
}

function LinkPanel({ title, href, children }: { title: string; href: string; children: ReactNode }) {
	return (
		<li className="bg-indigo-100 dark:bg-table-head-background-dark rounded-lg">
			<Link href={href}>
				<a className="block p-4">
					<h4 className="text-center text-black dark:text-white text-lg font-bold">{title}</h4>
					<Paragraph>{children}</Paragraph>
				</a>
			</Link>
		</li>
	);
}

// TODO: Add analytics about where users go from here, and how they got here in order to improve the docs
export default function NotFound() {
	return (
		<ContentWrapper>
			<div className="px-4 py-16 min-h-screen sm:px-6 sm:py-24 lg:grid lg:place-items-center lg:px-8">
				<div className="mx-auto max-w-max">
					<main className="lg:flex">
						<div className="lg:ml-6">
							<h1 className="text-center text-black dark:text-white text-4xl font-extrabold tracking-tight sm:text-5xl">
								404: Page not found
							</h1>
							<p className="mt-1 text-center dark:text-text-dark text-text-light">
								We couldn&apos;t find the page you were looking for.
							</p>

							<LinkList className="mt-10">
								<LinkPanel title="Application Commands" href="/interactions/application-commands">
									Learn more about how to write bots using Application Commands!
								</LinkPanel>
								<LinkPanel title="Message Components" href="/interactions/message-components">
									Learn more about how to add Message Components like Buttons to your bot messages!
								</LinkPanel>
								<LinkPanel title="Reference" href="/reference">
									Learn more about the Discord API and philosophy, and how to write your own bot!
								</LinkPanel>
								<LinkPanel title="Developer Discord" href="https://discord.gg/dCUCyFmwEmg">
									Join us in our Discord server to ask questions and get help!
								</LinkPanel>
							</LinkList>
						</div>
					</main>

					<h2 className="mb-8 mt-12 text-center text-black dark:text-white text-2xl font-extrabold sm:text-3xl">
						Sooo, you are still here?
					</h2>

					<YouTubeEmbed src="https://www.youtube.com/embed/JUXM2jCxTqY?loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=JUXM2jCxTqY" />

					<p className="mt-4 text-center dark:text-text-dark text-text-light text-xs">
						Listen to this song while you figure out where to go next!
					</p>
				</div>
			</div>
		</ContentWrapper>
	);
}
