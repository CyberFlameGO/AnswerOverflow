import Link from 'next/link';
// TODO: Storybook breaks when importing from the root of @answeroverflow/constants - figure out why
import {
	DISCORD_LINK,
	GITHUB_LINK,
	TWITTER_LINK,
} from '@answeroverflow/constants/src/links';
import { DiscordIcon, GitHubIcon } from './base';

const navigation = {
	main: [
		{ name: 'Terms', href: 'https://www.answeroverflow.com/tos' },
		{ name: 'Privacy', href: 'https://www.answeroverflow.com/privacy' },
		{ name: 'Cookies', href: 'https://www.answeroverflow.com/cookies' },
		{ name: 'EULA', href: 'https://www.answeroverflow.com/eula' },
		{ name: 'Docs', href: 'https://docs.answeroverflow.com' },
	],
	social: [
		{
			name: 'Twitter',
			href: TWITTER_LINK,
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: GITHUB_LINK,
			icon: (props: any) => <GitHubIcon {...props} />,
		},
		{
			name: 'Discord',
			href: DISCORD_LINK,
			icon: (props: any) => <DiscordIcon {...props} />,
		},
	],
};

export function Footer() {
	return (
		<footer>
			<div className="mx-auto max-w-7xl overflow-hidden py-10 px-6 sm:py-14 lg:px-8">
				<nav
					className="-mb-6 columns-1 text-center sm:flex sm:columns-2  sm:justify-center sm:space-x-12"
					aria-label="Footer"
				>
					{navigation.main.map((item) => (
						<div key={item.name} className="pb-6">
							<Link
								href={item.href}
								className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								{item.name}
							</Link>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-10">
					{navigation.social.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-500 dark:text-neutral-300 dark:hover:text-neutral-600"
							target="_blank"
							referrerPolicy="no-referrer"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</Link>
					))}
				</div>
				<p className="mt-10 text-center text-xs leading-5 text-gray-500 dark:text-neutral-400">
					&copy; 2023 Hedgehog Software, LLC. All rights reserved.
				</p>
			</div>
		</footer>
	);
}