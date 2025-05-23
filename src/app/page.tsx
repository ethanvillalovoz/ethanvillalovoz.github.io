"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Ethan Villalovoz</h1>
          <p className="mb-4">
            Hi! I am a recent graduate in Computer Science from Washington State
            University with a minor in Mathematics. My research spans robotics,
            machine learning, and AI safety, with a focus on reinforcement
            learning, human-AI collaboration, and large language models.
          </p>
          <p className="mb-4">
            I’ve conducted research at Carnegie Mellon University (HARP Lab) on
            hierarchical reward learning, Oregon State University (CHARISMA Lab)
            on multi-robot navigation, and completed a software engineering
            internship at Google (STEP Intern), where I built scalable data
            processing and visualization systems to support internal analytics.
          </p>
          <p className="mb-4">
            I am currently seeking full-time opportunities in AI/ML research and
            engineering while preparing to apply for Ph.D. programs in Fall 2025.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="mailto:ethan.villalovoz@gmail.com"
              className="text-primary underline"
            >
              Email
            </Link>
            <Link
              href="/data/EthanVillalovoz-CV.pdf"
              className="text-primary underline"
            >
              CV
            </Link>
            <Link
              href="/data/EthanVillalovoz-bio.txt"
              className="text-primary underline"
            >
              Bio
            </Link>
            <Link
              href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
              className="text-primary underline"
            >
              Google Scholar
            </Link>
            <Link
              href="https://x.com/etvillalovoz"
              className="text-primary underline"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/ethanvillalovoz"
              className="text-primary underline"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/EthanVillalovozGradPic.jpeg"
            alt="Ethan Villalovoz"
            width={220}
            height={220}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">News</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>05/2025:</b> Graduated from Washington State University with a
            B.S. in Computer Science and a minor in Mathematics. Go Cougs!
          </li>
          <li>
            <b>06/2024:</b> This summer, I will be conducting research at
            Carnegie Mellon University as part of the{" "}
            <a
              href="https://riss.ri.cmu.edu/"
              className="text-primary underline"
            >
              CMU RISS
            </a>{" "}
            program.
          </li>
          <li>
            <b>09/2023:</b> I will be participating in Google Research's{" "}
            <a
              href="https://research.google/programs-and-events/csrmp/"
              className="text-primary underline"
            >
              CS Research Mentorship Program
            </a>{" "}
            during the Fall semester.
          </li>
          <li>
            <b>07/2023:</b> I am thrilled and sincerely grateful to have been
            awarded the{" "}
            <a
              href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship"
              className="text-primary underline"
            >
              Generation Google Scholarship
            </a>
            .
          </li>
          <li>
            <b>07/2023:</b> My contributions to the work I completed at Oregon
            State University have been accepted for presentation at <b>IROS 2023</b>
            !
          </li>
          <li>
            <b>05/2023:</b> I will be interning as a{" "}
            <a
              href="https://buildyourfuture.withgoogle.com/programs/step"
              className="text-primary underline"
            >
              STEP Intern
            </a>{" "}
            at Google.
          </li>
          <li>
            <b>05/2023:</b> I became a MARC Scholar through the{" "}
            <a href="https://marc.wsu.edu/" className="text-primary underline">
              NIH Fellowship
            </a>
            .
          </li>
          <li>
            <b>06/2022:</b> I conducted research at Oregon State University as
            part of the{" "}
            <a
              href="https://engineering.oregonstate.edu/CoRIS/reu-robots-real-world"
              className="text-primary underline"
            >
              REU: Robots in the Real World
            </a>{" "}
            program.
          </li>
          <li>
            <b>07/2021:</b> I became an ESTEEMED Scholar through the{" "}
            <a href="https://mira.wsu.edu/" className="text-primary underline">
              NIH Fellowship
            </a>
            .
          </li>
        </ul>
      </section>
    </main>
  );
}
