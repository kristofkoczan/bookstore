export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Stores",
			href: "/stores",
		},
		{
			label: "Regulars",
			href: "/regulars",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
};
