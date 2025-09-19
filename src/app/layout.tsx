import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import "./fonts.css";
import { Header } from "@/ui/components/Header";
import { Footer } from "@/ui/components/Footer";

export const metadata: Metadata = {
	title: "For Future",
	description: "Website Under Construction",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
