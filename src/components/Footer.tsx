import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-600 mt-auto bg-background">
      <div className="max-w-3xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left: Logo & Name */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-3 group hover:opacity-100 transition-opacity">
            <Image
              src="/images/website_icon.png"
              alt="Ethan Villalovoz Logo"
              width={24}
              height={24}
              className="object-contain dark:invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-semibold text-lg tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">Ethan Villalovoz</span>
          </Link>
        </div>

        {/* Center: Copyright & Info */}
        <div className="text-center flex flex-col items-center justify-center">
          <p className="text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400 font-medium tracking-widest">
            © {currentYear} Ethan Villalovoz.
          </p>
          <p className="text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400 font-medium tracking-widest">
            All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-5">
          <a
            href="https://www.linkedin.com/in/evillalovoz27/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/ethanvillalovoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1"
            aria-label="Google Scholar"
          >
            <SiGooglescholar size={18} />
          </a>
          <a
            href="https://x.com/etvillalovoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://www.youtube.com/@ethanvillalovoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1"
            aria-label="YouTube"
          >
            <FaYoutube size={18} />
          </a>
          <a
            href="mailto:ethan.villalovoz@gatech.edu"
            className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
