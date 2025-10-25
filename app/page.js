import Link from "next/link";

export const metadata = {
  title: "Daniel Chrenko | Portfolio",
  description: "My personal portfolio showcasing projects and skills in web development.",
  openGraph: {
    title: "Daniel Chrenko | Portfolio",
    description: "My personal portfolio showcasing projects and skills in web development.",
    url: "https://danielchrenko.vercel.app",
    siteName: "Daniel Chrenko Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Chrenko | Portfolio",
    description: "My personal portfolio showcasing projects and skills in web development.",
    images: ["/og-image.png"],
  },
};


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Daniel 👋</h1>
      <p className="max-w-md text-center mb-6">
        I'm a new Computer Science grad passionate about web development.
      </p>

      {/* Link to /projects */}
      <Link
        href="/projects"
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
      >
        View My Projects
      </Link>
    </main>
  );
}
