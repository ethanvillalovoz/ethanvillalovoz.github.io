import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm [Your Name]</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to my personal portfolio website. I'm a researcher and developer
          passionate about impactful technology and science.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">News & Milestones</h2>
        <ul className="space-y-2 text-gray-800">
          {/* Example timeline items, replace with your own */}
          <li>May 2025: Launched my new portfolio website 🚀</li>
          <li>Mar 2025: Published a paper at [Conference Name]</li>
          <li>Jan 2025: Started a new research project on [Topic]</li>
        </ul>
      </section>
    </div>
  );
}
