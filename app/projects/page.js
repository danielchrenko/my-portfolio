import Link from "next/link";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://my-portfolio-one-gilt-63.vercel.app/",
    github: "https://github.com/danielchrenko/my-portfolio",
  },
  {
    name: "EchoNest Machine Learning Autotagging Method",
    description: "Trained a multiclass classifier to approximate Spotify's legacy EchoNest scores",
    tech: ["LIbrosa", "Python", "Numpy", "Pandas", "Sci-kit Learn"],
    link: "https://github.com/danielchrenko/music-tagging-project/blob/main/auto_tagging_project.pdf",
    github: "https://github.com/danielchrenko/music-tagging-project",
  },

];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 animate-pulse">
        My Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="relative border border-gray-700 rounded-xl p-6 bg-gray-800 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold mb-2 text-yellow-400 hover:text-yellow-300 transition-colors">
              {proj.name}
            </h2>
            <p className="mb-2 text-gray-300">{proj.description}</p>
            <p className="mb-4 text-sm text-gray-400">
              Tech: {proj.tech.join(", ")}
            </p>
            <div className="flex gap-4">
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}
