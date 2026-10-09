import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/custom/Header";
import Footer from '../components/custom/Footer'

export const metadata: Metadata = {
    metadataBase: new URL("https://juanigarciadev.vercel.app"),
    title: "juanigarciadev's portfolio",
    description: "Juani García, frontend developer from Argentina. Internal platforms, websites and open source projects built with React and Next.js.",
    openGraph: {
        title: "juanigarciadev's portfolio",
        description: "Juani García, frontend developer from Argentina. Internal platforms, websites and open source projects built with React and Next.js.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="font-light bg-main text-white overflow-x-hidden">
                <Header />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
