export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Daniel Chrenko 👋</h1>
      <p className="max-w-md text-center mb-6">
        I'm a new Computer Science grad passionate about web development, C#, and modern frameworks.
      </p>
      <a href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View My Projects
      </a>
    </main>
  )
}
