"use client";

import { useState, useEffect } from "react";
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
    tech: ["Librosa", "Python", "Numpy", "Pandas", "Sci-kit Learn"],
    link: "https://github.com/danielchrenko/music-tagging-project/blob/main/auto_tagging_project.pdf",
    github: "https://github.com/danielchrenko/music-tagging-project",
  },
  {
    name: "Mock HTTP Server and Reliable Data Transfer Protocol",
    description: "Created a mock HTTP server in Python that supports persistent and non-persistent connections and implemented a reliable data transfer protocol over UDP",
    tech: ["Socket Python Library", "Nginx", "Python"],
    github: "https://github.com/danielchrenko/music-tagging-project",
  },
  {
    name: "Simple Shell with Ability to Run Multiple C Programs Concurrently",
    description: "Trained a multiclass classifier to approximate Spotify's legacy EchoNest scores",
    tech: ["Multithreading", "Unix Proc Folder Parsing", "C"],
    github: "https://github.com/danielchrenko/PMan-shell-program",
  },

];

export default function Projects() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-black py-12 px-6 md:px-12">
      <h1 className="text-5xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="relative border border-gray-700 rounded-xl p-6 bg-gray-100 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-gray-900 transition-colors">
              {proj.name}
            </h2>
            <p className="mb-2 text-gray-900">{proj.description}</p>
            <p className="mb-4 text-sm text-gray-700">
              Tech: {proj.tech.join(", ")}
            </p>
            <div className="flex gap-4">
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border border-gray-700 rounded-xl px-3 py-1 bg-white rounded-md hover:bg-gray-200 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border border-gray-700 rounded-xl px-3 py-1 text-white bg-gray-800 rounded-md hover:bg-gray-1000 transition-colors"
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
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}
