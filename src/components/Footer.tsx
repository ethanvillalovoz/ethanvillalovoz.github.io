import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-auto bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            © {currentYear} Ethan Villalovoz.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/ethanvillalovoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ethanvillalovoz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:ethan.villalovoz@gmail.com"
            className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
