"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import Image from "next/image";
import { 
  FaApple, 
  FaFolder, 
  FaSafari, 
  FaTerminal, 
  FaWifi, 
  FaBatteryFull,
  FaSearch,
  FaPaperPlane,
  FaFilePdf,
  FaFileCode,
  FaFileAlt,
  FaTrash,
  FaMusic,
  FaSpotify,
  FaComment,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaGlobe,
  FaGraduationCap,
  FaLayerGroup,
  FaDesktop,
  FaPowerOff,
  FaPlay
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSwitch, IoMdMail, IoMdPhotos, IoMdShuffle } from "react-icons/io";
import { RiFinderFill } from "react-icons/ri";
import { 
	SiPython, SiCplusplus, SiPytorch, SiPandas, SiOpencv, SiGit, SiDocker, SiGooglescholar
} from "react-icons/si";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import Link from "next/link";
import { useRouter } from "next/navigation";

// --- Data & File System ---

const workTimeline = [
	{
		date: "May 2026 - Jul 2026",
		company: "Microsoft",
		logo: "/images/timeline/microsoft_logo.jpeg",
		title: <span className="text-gray-900 dark:text-gray-100 font-medium">Software Engineer Intern</span>,
		bullets: [
			"Commerce and Ecosystems.",
		],
	},
	{
		date: "Jan 2024 - May 2025",
		company: "Washington State University",
		logo: "/images/timeline/washington_state_university_logo.jpeg",
		title: <span className="text-gray-900 dark:text-gray-100 font-medium">Undergraduate Research Assistant</span>,
		bullets: [
			"Developed and evaluated a Bayesian optimization framework for prompt-based large language model code generation.",
		],
	},
  {
		date: "Jun 2024 - Aug 2024",
		company: "Carnegie Mellon University",
		logo: "/images/timeline/Carnegie_Mellon_icon.png",
		title: <span className="text-gray-900 dark:text-gray-100 font-medium">Robotics Institute Summer Scholar</span>,
		bullets: [
			"Developed a hierarchical reward learning framework with Bayesian inference and interactive clarification dialogues.",
		],
	},
  {
		date: "May 2023 - Aug 2023",
		company: "Google",
		logo: "/images/timeline/Google_icon.png",
		title: <span className="text-gray-900 dark:text-gray-100 font-medium">Software Engineering Intern (STEP)</span>,
		bullets: [
			"Developed scalable C++ and SQL analytics pipelines and interactive dashboards that optimized internal data workflows.",
		],
	},
  {
		date: "Jun 2022 - Aug 2022",
		company: "Oregon State University",
		logo: "/images/timeline/Oregon_State_icon.jpeg",
		title: <span className="text-gray-900 dark:text-gray-100 font-medium">NSF REU Fellow</span>,
		bullets: [
			"Designed and implemented geometric motion primitives and interactive deployment tools enabling expressive multi-robot behaviors.",
		],
	},
];

const educationTimeline = [
	{
		date: "Jan 2026 - Dec 2027",
		company: "Georgia Institute of Technology",
		logo: "/images/timeline/GT_icon.png",
		title: (
			<span className="text-gray-900 dark:text-gray-100 font-medium">M.S. in Computer Science, Computational Perception and Robotics (GPA: 4.0/4.0)</span>
		),
		bullets: [],
	},
	{
		date: "Aug 2021 - May 2025",
		company: "Washington State University",
		logo: "/images/timeline/Washington_State_icon.png",
		title: (
			<span className="text-gray-900 dark:text-gray-100 font-medium">B.S. in Computer Science, Minor in Mathematics (GPA: 3.94/4.0)</span>
		),
		bullets: [
			<span>Senior Design Project: <a href="/data/capstone/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Retrieval-Augmented Generation Application Using Knowledge Graph and Vector Search</a></span>,
		],
	},
];

const skills = [
	{ name: "Python", icon: SiPython },
	{ name: "C/C++", icon: SiCplusplus },
	{ name: "PyTorch", icon: SiPytorch },
	{ name: "Pandas", icon: SiPandas },
	{ name: "OpenCV", icon: SiOpencv },
	{ name: "Docker", icon: SiDocker },
];

// Publications Data
interface Author {
	name: string;
	url?: string;
	isMe?: boolean;
}

interface Publication {
	title: string;
	url?: string;
	authors: Author[];
	conference: string;
	award?: string;
	paper?: string;
	bibtex?: string;
	image: string;
	description: string;
	tags?: string[];
	website?: string;
	code?: string;
	video?: string;
    highlighted?: boolean;
}

const preprints: Publication[] = [
	{
		title: "An Exploratory Study of Bayesian Prompt Optimization for Test-Driven Code Generation with Large Language Models",
		url: "https://arxiv.org/abs/2512.15076",
		authors: [
			{ name: "S. Tomar", url: "https://shlok-crypto.github.io/" },
			{ name: "A. Deshwal", url: "https://aryandeshwal.github.io/" },
			{ name: "E. Villalovoz", isMe: true },
			{ name: "M. Fazzini", url: "https://www-users.cse.umn.edu/~mfazzini/" },
			{ name: "H. Cai", url: "https://chapering.github.io/" },
			{ name: "J.R. Doppa", url: "https://eecs.wsu.edu/~jana/" },
		],
		conference: "arXiv, 2025",
		paper: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/paper.pdf",
		image: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png",
		description: "Explores Bayesian optimization as a principled approach to automated prompt search for large language model–based code generation. Demonstrates sample-efficient improvements in functional correctness over strong prompting baselines on the HumanEval+ benchmark.",
	},
];

const papers_2023: Publication[] = [
	{
		title: "Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
		url: "https://ieeexplore.ieee.org/abstract/document/10342372",
		authors: [
			{ name: "A. Bacula", url: "https://sites.google.com/plu.edu/alexandra-bacula" },
			{ name: "E. Villalovoz", isMe: true },
			{ name: "D. Flynn", url: "https://deannaflynn.wixsite.com/deanna-flynn" },
			{ name: "A. Mehta", url: "https://uclalemur.com/" },
			{ name: "H. Knight", url: "https://www.charismarobotics.com/" },
		],
		conference: "International Conference on Intelligent Robots and Systems (IROS), 2023",
		paper: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
		bibtex: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
		image: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png",
		description: "Investigates how different multi-robot formations affect navigation and approach behaviors in social environments. Demonstrates the impact of formation geometry on human-robot interaction and navigation efficiency.",
        // highlighted: true
	},
];

const newsItems: { date: string; content: React.ReactNode; hidden?: boolean }[] = [
    {
        date: "12/2025",
        content: (
            <>
                New paper on {" "}
                <span className="font-semibold">arXiv</span>{" "}
                on {" "}
                <a href="https://arxiv.org/abs/2512.15076" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Bayesian prompt optimization for LLM-based code generation
                </a>.
            </>
        ),
    },
    {
        date: "07/2025",
        content: (
            <>
                Admitted to the{" "}
                <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Georgia Tech MSCS
                </a>{" "}
                program! I’ll be starting in {" "}
                <span className="font-semibold">Spring 2026</span>.
            </>
        ),
    },
    {
        date: "06/2025",
        content: (
            <>
                Gave an alumni talk for the WSU{" "}
                <a href="https://marc.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    MARC
                </a>{" "}
                &{" "}
                <a href="https://mira.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    MIRA
                </a>{" "}
                program.
            </>
        ),
    },
    {
        date: "05/2025",
        content: <>Graduated from Washington State University with a B.S. in Computer Science. Go Cougs!</>,
    },
    {
        date: "06/2024",
        content: (
            <>
                Conducting research at Carnegie Mellon University as part of the CMU{" "}
                <a href="https://riss.ri.cmu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    RISS
                </a>{" "}
                program.
            </>
        ),
    },
    {
        date: "09/2023",
        content: (
            <>
                Participating in Google Research&apos;s{" "}
                <a href="https://research.google/programs-and-events/csrmp/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    CS Research Mentorship Program
                </a>.
            </>
        ),
    },
    {
        date: "07/2023",
        content: (
            <>
                Awarded the{" "}
                <a href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Generation Google Scholarship
                </a>.
            </>
        ),
    },
    {
        date: "07/2023",
        content: (
            <>
                Paper accepted at {" "}
                <span className="font-semibold">IROS 2023</span>{" "}
                on{" "}
                <a href="https://ieeexplore.ieee.org/abstract/document/10342372" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    multi-robot formations for social navigation
                </a>.
            </>
        ),
    },
    {
        date: "05/2023",
        content: (
            <>
                Interning as a{" "}
                <a href="https://about.google/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Software Engineering Intern (STEP)
                </a>{" "}
                at Google.
            </>
        ),
    },
    {
        date: "05/2023",
        content: (
            <>
                Became a{" "}
                <a href="https://marc.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    NIH MARC Scholar
                </a>{" "}
                through the National Institutes of Health.
            </>
        ),
    },
    {
        date: "06/2022",
        content: (
            <>
                Conducting research at Oregon State University as part of the{" "}
                <a href="https://engineering.oregonstate.edu/CoRIS/reu-robots-real-world" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    REU: Robots in the Real World
                </a>{" "}
                program.
            </>
        ),
    },
];

const teachingExperiences = [
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 315: Introduction to Data Mining",
		institution: "Washington State University",
		term: "Spring 2025",
		description:
			"The process of automatically extracting valid, useful, and previously unknown information from large repositories.",
	},
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 350: Design and Analysis of Algorithms",
		institution: "Washington State University",
		term: "Fall 2024",
		description:
			"Analysis of data structures and algorithms; computational complexity and design of efficient data-handling procedures.",
	},
  {
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 355: Programming Language Design",
		institution: "Washington State University",
		term: "Fall 2023",
		description:
			"Design concepts of high-level programming languages; survey of existing languages, experience using some languages.",
	},
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 121: Program Design and Development C/C++",
		institution: "Washington State University",
		term: "Fall 2022",
		description:
			"Formulation of problems and top-down design of programs in a modern structured language (C/C++) for their solution on a digital computer.",
	},
];

type FileType = "folder" | "image" | "pdf" | "txt" | "app" | "link";

interface VirtualFile {
  id: string;
  name: string;
  type: FileType;
  content?: string | any;
  icon?: any;
  children?: VirtualFile[];
}

const fileSystem: VirtualFile[] = [
  {
    id: "macintosh-hd",
    name: "Macintosh HD",
    type: "folder",
    children: [
      {
        id: "applications",
        name: "Applications",
        type: "folder",
        children: [
            { id: "app-safari", name: "Safari", type: "app", content: "safari" },
            { id: "app-mail", name: "Mail", type: "app", content: "mail" },
            { id: "app-terminal", name: "Terminal", type: "app", content: "terminal" },
        ]
      },
      {
        id: "users",
        name: "Users",
        type: "folder",
        children: [
          {
            id: "ethan",
            name: "ethan",
            type: "folder",
            children: [
              { 
                id: "desktop", 
                name: "Desktop", 
                type: "folder", 
                children: [
                    { id: "cv", name: "CV.pdf", type: "pdf", content: "/data/EthanVillalovoz-CV.pdf" },
                    { id: "resume", name: "Resume.pdf", type: "pdf", content: "/data/EthanVillalovoz-Resume.pdf" },
                    { 
                        id: "home-folder", 
                        name: "Home", 
                        type: "folder", 
                        children: [
                            { id: "news-app", name: "News", type: "app", icon: <FaFolder className="text-blue-400" />, content: "news" },
                            { id: "experience-app", name: "Experience", type: "app", icon: <FaFolder className="text-blue-400" />, content: "experience" },
                            { id: "technologies-app", name: "Technologies", type: "app", icon: <FaFolder className="text-blue-400" />, content: "technologies" },
                        ] 
                    },
                    { 
                        id: "publications-folder", 
                        name: "Publications", 
                        type: "folder", 
                        children: [
                            { id: "interests-app", name: "Interests", type: "app", icon: <FaFolder className="text-blue-400" />, content: "interests" },
                            { id: "preprints-app", name: "Pre-Prints", type: "app", icon: <FaFolder className="text-blue-400" />, content: "pre-prints" },
                            { id: "2023-papers-app", name: "2023", type: "app", icon: <FaFolder className="text-blue-400" />, content: "2023-papers" },
                        ] 
                    },
                    { 
                        id: "teaching-folder", 
                        name: "Teaching", 
                        type: "folder", 
                        children: [
                            { id: "wsu-teaching-app", name: "Washington State University", type: "app", icon: <FaFolder className="text-blue-400" />, content: "wsu-teaching" }
                        ] 
                    }
                ] 
              }, // Dynamic
              { 
                  id: "documents", 
                  name: "Documents", 
                  type: "folder", 
                  children: [
                      { id: "resume", name: "Resume.pdf", type: "pdf", content: "/data/EthanVillalovoz-Resume.pdf" },
                      { 
                          id: "projects", 
                          name: "Projects", 
                          type: "folder",
                          children: [
                              { id: "p1", name: "Simplingo", type: "link", content: "https://simplingo.app" },
                              { id: "p2", name: "Leafpress", type: "link", content: "https://leafpress.io" },
                              { id: "p3", name: "AbsolutMess", type: "folder", children: [] }
                          ]
                      },
                      {
                          id: "research",
                          name: "Research",
                          type: "folder",
                          children: [
                              { id: "paper1", name: "Bayesian_Prompt_Opt.pdf", type: "pdf", content: "https://arxiv.org/abs/2512.15076" },
                              { id: "paper2", name: "Social_Triangles.pdf", type: "pdf", content: "https://ieeexplore.ieee.org/abstract/document/10342372" }
                          ]
                      }
                  ] 
              },
              { id: "downloads", name: "Downloads", type: "folder", children: [] },
              { id: "about", name: "about_me.txt", type: "txt", content: `Hi, I'm Ethan.\n\nI am a Master's student in Computer Science at Georgia Tech.\n\nMy research interests lie at the intersection of robot learning, world modeling, and human-aligned decision making.` }
            ]
          }
        ]
      }
    ]
  }
];

// --- Types ---
type SystemState = "boot" | "login" | "desktop";

interface WindowState {
  id: string;
  title: string;
  type: "finder" | "safari" | "terminal" | "mail" | "preview" | "pdf-viewer" | "about" | "news" | "experience" | "technologies" | "interests" | "pre-prints" | "2023-papers" | "wsu-teaching" | "photos" | "music";
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { w: number; h: number };
  zIndex: number;
  data?: any; // To pass path or content
}

// --- Components ---

// 1. Terminal Component with functional command line
const TerminalApp = ({ fs, onOpen }: { fs: VirtualFile[], onOpen: (file: VirtualFile) => void }) => {
    // Locate Home Directory (/Users/ethan)
    const homeDir = fs[0]?.children?.find(c => c.id === 'users')?.children?.find(c => c.id === 'ethan');
    
    // Path Stack (Default to Home)
    const [path, setPath] = useState<VirtualFile[]>(homeDir ? [homeDir] : []);
    
    const [history, setHistory] = useState([
        "Last login: " + new Date().toDateString() + " on ttys000",
        "Type 'help' for available commands."
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [history]);
    
    // Helper to format prompt path
    const getPromptPath = (currentPath: VirtualFile[]) => {
        if (currentPath.length === 0) return "/";
        // Base is ethan (Home)
        if (currentPath[0].id === 'ethan') {
            const sub = currentPath.slice(1).map(f => f.name).join('/');
            return sub ? `~/${sub}` : '~';
        }
        return '/'; 
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const trimmedInput = input.trim();
            const args = input.split(' ');
            
            // If empty, do nothing
            if (!trimmedInput) return;

            // 1. Command Autocomplete (if only 1 word and no trailing space)
            if (args.length === 1) {
                const commands = ['help', 'clear', 'whoami', 'ls', 'cd', 'pwd', 'cat', 'date'];
                const partial = args[0];
                const matches = commands.filter(c => c.startsWith(partial));
                if (matches.length === 1) {
                    setInput(matches[0] + ' '); // Add space for convenience
                    return;
                }
            }

            // 2. File/Folder Autocomplete (if we have a command, or just want to match files)
            // Get the last chunk being typed
            const lastArg = args[args.length - 1];
            // If the last arg is empty string (user typed "cd " space), we might want to list all? 
            // For now let's only autocomplete if there is some text or at least we are in "arg position"
            
            const currentDir = path[path.length - 1];
            const children = currentDir?.children || [];

            // Case-insensitive matching for better UX
            const matches = children.filter(c => 
                c.name.toLowerCase().startsWith(lastArg.toLowerCase())
            );

            if (matches.length === 1) {
                // Replace the last argument with the full name
                const newArgs = [...args];
                newArgs[newArgs.length - 1] = matches[0].name;
                setInput(newArgs.join(' ')); 
            }
        }
    };

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmdLine = input.trim();
        if (!cmdLine) return; // Ignore empty enter

        const args = cmdLine.split(' ');
        const cmd = args[0];
        const arg1 = args.slice(1).join(' ').trim();

        const currentDir = path[path.length - 1];
        const prompt = `ethanvillalovoz@Mac ${getPromptPath(path)} %`;
        
        const newHistory = [...history, `${prompt} ${cmdLine}`];

        switch (cmd) {
            case 'help':
                newHistory.push("Available commands: help, clear, whoami, ls, cd, pwd, cat, date");
                break;
            case 'clear':
                setHistory([]);
                setInput("");
                return;
            case 'whoami':
                newHistory.push("ethanvillalovoz");
                break;
            case 'date':
                newHistory.push(new Date().toString());
                break;
            case 'pwd':
                // Construct absolute path
                const relative = path.slice(1).map(f => f.name).join('/');
                newHistory.push(`/Users/ethan${relative ? '/' + relative : ''}`);
                break;
            case 'ls':
                const children = currentDir?.children || [];
                if (children.length > 0) {
                     // Filter out Documents and Downloads for cleaner view
                     const visibleChildren = children.filter(c => c.name !== 'Documents' && c.name !== 'Downloads');
                     newHistory.push(visibleChildren.map(c => c.type === 'folder' ? c.name + '/' : c.name).join('   '));
                }
                break;
            case 'cd':
                if (!arg1 || arg1 === '~') {
                     setPath([homeDir!]);
                } else if (arg1 === '..') {
                     if (path.length > 1) {
                         setPath(prev => prev.slice(0, -1));
                     }
                } else {
                     const target = currentDir?.children?.find(c => c.name === arg1 && c.type === 'folder');
                     if (target) {
                         setPath(prev => [...prev, target]);
                     } else {
                         newHistory.push(`cd: no such file or directory: ${arg1}`);
                     }
                }
                break;
             case 'cat':
                if (!arg1) {
                    newHistory.push("usage: cat <filename>");
                } else {
                    const targetFile = currentDir?.children?.find(c => c.name === arg1);
                    if (!targetFile) {
                        newHistory.push(`cat: ${arg1}: No such file or directory`);
                    } else if (targetFile.type === 'folder') {
                        newHistory.push(`cat: ${arg1}: Is a directory`);
                    } else {
                        // For "cat", we interpret it as opening/inspecting the file
                        if (targetFile.content && typeof targetFile.content === 'string' && !targetFile.content.startsWith('/') && !targetFile.content.startsWith('http') && !targetFile.type.includes('app')) {
                             // Simple text content (like about_me.txt instructions in original code)
                             newHistory.push(targetFile.content);
                        } else {
                             // Binary/App/PDF -> trigger open
                             onOpen(targetFile);
                             newHistory.push(`Opening ${arg1}...`);
                        }
                    }
                }
                break;
             default:
                newHistory.push(`zsh: command not found: ${cmd}`);
        }
        
        setHistory(newHistory);
        setInput("");
    };

    return (
        <div className="h-full bg-[#1e1e1e] text-white font-mono p-4 text-sm overflow-auto" onClick={() => document.getElementById('term-input')?.focus()}>
            {history.map((line, i) => <div key={i} className="whitespace-pre-wrap mb-1 leading-relaxed">{line}</div>)}
            <form onSubmit={handleCommand} className="flex gap-2">
                <span className="text-white whitespace-nowrap">{`ethanvillalovoz@Mac ${getPromptPath(path)} %`}</span>
                <input 
                    id="term-input"
                    type="text" 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-white caret-gray-400"
                    autoFocus
                    autoComplete="off"
                />
            </form>
            <div ref={bottomRef} />
        </div>
    );
};

// 2. Mail Component (Contact Form)
const MailApp = () => {
    const [sent, setSent] = useState(false);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
         const email = "ethan.villalovoz@gatech.edu";
         const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
         window.open(mailtoLink, '_blank');
         setSent(true);
    };

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="h-12 border-b flex items-center px-4 justify-between bg-gray-50">
                <div className="flex gap-4 text-gray-500">
                    <span>Inbox</span>
                    <span className="text-black font-semibold">Compose</span>
                    <span>Sent</span>
                </div>
                <FaPaperPlane className={`text-blue-500 cursor-pointer ${sent ? 'text-green-500' : ''}`} onClick={!sent ? handleSend : undefined} />
            </div>
            {!sent ? (
                <div className="p-6 flex flex-col gap-4 h-full">
                    <div className="border-b pb-2 text-sm text-gray-500">To: <span className="text-black px-2 bg-blue-100 rounded-md">ethan.villalovoz@gatech.edu</span></div>
                    <div className="border-b pb-2 text-sm text-gray-500 flex gap-2">
                        <span>Subject:</span>
                        <input 
                            className="outline-none flex-1 text-black" 
                            placeholder="Hello!" 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <textarea 
                        className="flex-1 resize-none outline-none text-gray-800 font-serif leading-relaxed" 
                        placeholder="Write your message here..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleSend} className="self-end bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                        Send Message
                    </button>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-2xl">✓</div>
                    <p>Draft opened in mail client!</p>
                    <button onClick={() => { setSent(false); setSubject(""); setMessage(""); }} className="text-blue-500 text-sm hover:underline">Write another</button>
                </div>
            )}
        </div>
    );
};

// 3. Finder Component
const FinderApp = ({ onNavigate, onOpenFile }: { onNavigate: any, onOpenFile: any }) => {
    // Simplified State for Finder navigation
    const [currentPath, setCurrentPath] = useState<VirtualFile[]>(fileSystem[0].children![1].children![0].children![0].children!); // Default to Desktop
    const [pathName, setPathName] = useState("Desktop");

    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-48 bg-white/40 dark:bg-black/20 backdrop-blur-md p-3 flex flex-col gap-4 text-xs font-medium text-neutral-600 border-r border-black/5">
                <div>
                     <p className="text-[10px] text-neutral-400 font-bold mb-1 pl-2">Favorites</p>
                    <div className="flex flex-col gap-0.5">
                        <SidebarItem icon={<FaDesktop className="text-blue-500" />} label="Desktop" active={pathName === "Desktop"} onClick={() => { setPathName("Desktop"); setCurrentPath(fileSystem[0].children![1].children![0].children![0].children!) }} />
                    </div>
                </div>
            </div>
            {/* Main Area */}
            <div className="flex-1 bg-white p-2">
                 {/* Breadcrumbs/Nav could go here */}
                 <div className="grid grid-cols-4 gap-2 auto-rows-min">
                    {currentPath.map((file) => (
                        <div 
                            key={file.id} 
                            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
                            onDoubleClick={() => {
                                if(file.type === 'folder') {
                                    setCurrentPath(file.children || []);
                                    setPathName(file.name);
                                } else {
                                    onOpenFile(file);
                                }
                            }}
                        >
                             <div className="text-4xl text-neutral-700 drop-shadow-sm group-hover:scale-110 transition-transform">
                                {file.icon ? file.icon : (
                                    <>
                                        {file.type === 'folder' && <FaFolder className="text-blue-400" />}
                                        {file.type === 'pdf' && <FaFilePdf className="text-red-500" />}
                                        {file.type === 'txt' && <FaFileAlt className="text-gray-500" />}
                                        {file.type === 'app' && <FaApple className="text-gray-800" />}
                                        {file.type === 'link' && <FaSafari className="text-blue-500" />}
                                    </>
                                )}
                             </div>
                             <span className="text-xs text-center font-medium line-clamp-2 w-full break-words">{file.name}</span>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
};

// 3.5 Photos Component
const PhotosApp = () => {
    const photos = [
        { src: "/images/EthanVillalovozPic.jpeg", name: "EthanVillalovozPic.jpeg" },
        { src: "/images/graduation_2025.jpg", name: "graduation_2025.jpg" }
    ];

    return (
        <div className="h-full bg-white p-8 overflow-y-auto">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {photos.map((photo, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                         <div className="relative w-full aspect-square shadow-md bg-gray-50 border border-gray-100 p-2 rounded">
                            <div className="relative w-full h-full overflow-hidden rounded-sm">
                                <Image src={photo.src} alt={photo.name} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                         </div>
                        <span className="text-xs font-semibold text-gray-600 tracking-tight">{photo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// 3.6 Music Component
const MusicApp = () => {
    const songs = [
        { title: "Mrs. Hollywood", artist: "Go-Jo", album: "Mrs. Hollywood - Single", time: "2:24" },
        { title: "Brand New", artist: "Ben Rector", album: "Brand New", time: "4:04" },
        { title: "Only Fan (feat. Cordae) E", artist: "Bazzi", album: "Infinite Dream", time: "2:33" },
        { title: "I Love It (feat. Charli XCX) E", artist: "Icona Pop", album: "This Is... Icona Pop", time: "2:37" },
        { title: "Bulletproof", artist: "La Roux", album: "La Roux (Bonus Track Version)", time: "3:26" },
        { title: "Ain't Too Cool", artist: "LunchMoney Lewis", album: "Ain't Too Cool - Single", time: "3:43" },
    ];

    return (
        <div className="h-full bg-[#1e1e1e] text-white flex flex-col font-sans overflow-hidden">
             {/* Header */}
             <div className="p-5 flex items-end gap-5 bg-gradient-to-b from-[#4c2a2a] to-[#1e1e1e]">
                <div className="hidden sm:block w-36 h-36 shadow-2xl relative shrink-0">
                     <Image src="/images/graduation_2025.jpg" alt="Playlist Cover" fill className="object-cover rounded-md shadow-lg" />
                </div>
                <div className="flex flex-col gap-1 pb-1">
                    <span className="text-xs font-bold uppercase tracking-wider">Playlist</span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter mb-2">Jam jams 🍯</h1>
                    <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                         <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/10">
                             <Image src="/images/EthanVillalovozPic.jpeg" alt="Owner" fill className="object-cover" />
                         </div>
                         <span className="text-white hover:underline cursor-pointer font-bold">Ethan Villalovoz</span>
                         <span className="text-white/60">& 1 Other</span>
                         <span className="text-white/60">•</span>
                         <span className="text-white/60">6 songs, 19 min</span>
                    </div>
                </div>
             </div>

             {/* Controls */}
             <div className="px-6 py-3 flex items-center gap-4 bg-[#1e1e1e]/50 backdrop-blur-md sticky top-0 z-10">
                 <button className="w-12 h-12 bg-[#fa233b] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                    <FaPlay className="text-white text-lg ml-1" />
                 </button>
                 <button className="text-[#fa233b] text-2xl hover:scale-110 transition-transform">
                    <IoMdShuffle />
                 </button>
             </div>

             {/* List */}
             <div className="flex-1 overflow-y-auto px-6 pb-6">
                <table className="w-full text-left border-collapse text-sm text-gray-400">
                    <thead className="border-b border-white/10 text-xs uppercase tracking-wider font-normal">
                        <tr>
                            <th className="pb-2 w-8 text-center">#</th>
                            <th className="pb-2">Title</th>
                            <th className="hidden md:table-cell pb-2">Album</th>
                            <th className="hidden sm:table-cell pb-2 text-right">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, i) => (
                            <tr key={i} className="group hover:bg-white/10 rounded-md transition-colors cursor-default">
                                <td className="py-2 pl-2 text-center group-hover:text-white">{i + 1}</td>
                                <td className="py-2">
                                    <div className="flex flex-col">
                                        <span className="text-white text-[14px] font-medium leading-tight">{song.title}</span>
                                        <span className="group-hover:text-white text-[12px]">{song.artist}</span>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell py-2 group-hover:text-white">{song.album}</td>
                                <td className="hidden sm:table-cell py-2 text-right font-variant-numeric tabular-nums">{song.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
    );
};

// 4. About App Component (Carousel)
const AboutApp = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const profileImages = [
        "/images/EthanVillalovozPic.jpeg",
        // "/images/EthanVillalovozGradPic.jpeg",
        "/images/graduation_2025.jpg"
    ];

    return (
         <div className="flex flex-col items-center justify-center p-4 bg-[#ececec] text-neutral-800 h-full select-text overflow-hidden">
             <motion.div 
                className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 cursor-pointer mb-4"
                initial={{ rotate: 3 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => {
                    hoverTimeout.current = setTimeout(() => {
                        setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
                    }, 320);
                }}
                onHoverEnd={() => {
                    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                }}
            >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg bg-neutral-100">
                    <AnimatePresence>
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={profileImages[currentImageIndex]}
                                alt="Ethan Villalovoz"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            <h1 className="text-3xl font-extrabold mb-1">Ethan Villalovoz</h1>
            <p className="text-sm text-neutral-500 mb-4 flex items-center gap-1 font-medium">
                <FaMapMarkerAlt className="text-neutral-400" /> Sacramento, California, United States
            </p>
            <div className="text-center space-y-3 max-w-md text-[13px] leading-relaxed font-sans">
                <p>
                    Master&apos;s student in Computer Science at <span className="font-semibold text-black">Georgia Tech</span>.
                    My research interests lie at the intersection of robot learning, world modeling, and human-aligned decision making.
                </p>
                <p>
                    I am always open to connecting. Please feel free to reach out!
                </p>
            </div>
         </div>
    );
};

// 5. News Component
const NewsApp = () => {
    return (
        <div className="h-full bg-white p-6 overflow-y-auto text-neutral-800">
             <FadeIn>
                <h2 className="text-2xl font-bold mb-8 tracking-tight">News</h2>
                <FadeInStagger className="space-y-6 border-l-2 border-neutral-100 pl-6 ml-2">
                    {newsItems.map((item, index) => (
                        <FadeInItem key={index} className="relative">
                             <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-200 border-2 border-white" />
                             <div className="text-sm text-neutral-400 mb-1 font-mono">{item.date}</div>
                             <div className="leading-relaxed text-sm">{item.content}</div>
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </FadeIn>
        </div>
    )
}

// 6. Experience Component
const ExperienceApp = () => {
    const [tab, setTab] = useState<"work" | "education">("work");
    return (
        <div className="h-full bg-white p-6 overflow-y-auto text-neutral-800">
             <FadeIn>
                <div className="flex items-center gap-6 mb-8">
                    <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
                    <div className="flex bg-neutral-100 p-1 rounded-full">
                        {(["work", "education"] as const).map((t) => (
                             <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                    tab === t 
                                        ? "bg-white text-gray-900 shadow-sm" 
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <FadeInStagger key={tab} className="space-y-4">
                    {(tab === "work" ? workTimeline : educationTimeline).map((item, index) => (
                        <FadeInItem key={index}>
                           <div className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                                <div className="relative w-12 h-12 flex-shrink-0 mt-1 rounded-full overflow-hidden border border-neutral-100 bg-white">
                                    <Image src={item.logo} alt={item.company} fill className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                                        <h3 className="font-semibold text-lg text-gray-900">{item.company}</h3>
                                        <span className="text-sm font-medium text-neutral-400">{item.date}</span>
                                    </div>
                                    <div className="text-base text-gray-700 mb-2">{item.title}</div>
                                    <ul className="list-disc list-outside ml-4 space-y-1">
                                        {item.bullets.map((bullet, idx) => (
                                            <li key={idx} className="text-sm text-neutral-500 leading-relaxed pl-1">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                           </div>
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </FadeIn>
        </div>
    )
}

// 7. Technologies Component
const TechnologiesApp = () => {
    return (
        <div className="h-full bg-white p-6 overflow-y-auto text-neutral-800">
            <FadeIn>
                <h2 className="text-2xl font-bold mb-8 tracking-tight">Technologies</h2>
                <FadeInStagger className="grid grid-cols-3 sm:grid-cols-4 gap-4" faster>
                    {skills.map((skill) => (
                        <FadeInItem key={skill.name}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors text-gray-600 hover:text-gray-900 cursor-default">
                                <skill.icon className="text-3xl" />
                                <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </FadeIn>
        </div>
    )
}

// 8. Interests Component
const InterestsApp = () => (
    <div className="h-full bg-white p-8 flex items-center justify-center text-center text-neutral-800">
        <FadeIn>
             <h2 className="text-3xl font-bold mb-6">Research Interests</h2>
             <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                I&apos;m interested in how robots can learn structured, uncertainty-aware representations of the world and human intent through interaction and feedback.
             </p>
        </FadeIn>
    </div>
);

// 9. Teaching Component
const TeachingApp = () => (
    <div className="h-full bg-white p-8 overflow-y-auto text-neutral-800">
        <FadeIn>
            <h2 className="text-2xl font-bold mb-8 tracking-tight">Washington State University</h2>
            <FadeInStagger className="space-y-4">
                {teachingExperiences.map((exp, idx) => (
                    <FadeInItem key={idx}>
                        <article className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 -mx-6 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                            <div className="flex-shrink-0 md:w-32 pt-1">
                                <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">{exp.term}</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                                    {exp.course}
                                </h3>
                                <div className="text-sm font-medium text-blue-600 mb-3">
                                    {exp.role}
                                </div>
                                <p className="text-base text-neutral-500 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </article>
                    </FadeInItem>
                ))}
            </FadeInStagger>
        </FadeIn>
    </div>
);

// 10. Publications List Component
const PublicationsListApp = ({ title, papers }: { title: string, papers: Publication[] }) => (
    <div className="h-full bg-white p-6 overflow-y-auto text-neutral-800">
         <FadeIn>
            <h2 className="text-2xl font-bold mb-8 tracking-tight">{title}</h2>
            <FadeInStagger className="space-y-4">
                {papers.map((paper) => (
                    <FadeInItem key={paper.title}>
                        <article className={`flex flex-col md:flex-row gap-6 md:gap-8 p-6 -mx-6 rounded-2xl transition-colors ${
                            paper.highlighted 
                                ? "bg-yellow-50/80" 
                                : "hover:bg-neutral-50"
                        }`}>
                            <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                                <Image
                                    src={paper.image}
                                    alt={paper.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="font-semibold text-lg leading-tight text-neutral-900">
                                    {paper.url ? (
                                        <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                            {paper.title}
                                        </a>
                                    ) : paper.title}
                                </h3>
                                
                                <div className="text-sm text-neutral-500">
                                    {paper.authors.map((author, index) => (
                                        <span key={index}>
                                            {author.url ? (
                                                <a href={author.url} target="_blank" rel="noopener noreferrer" className={`hover:text-neutral-900 transition-colors ${author.isMe ? "font-medium text-neutral-900" : ""}`}>
                                                    {author.name}
                                                </a>
                                            ) : (
                                                <span className={author.isMe ? "font-medium text-neutral-900" : ""}>
                                                    {author.name}
                                                </span>
                                            )}
                                            {index < paper.authors.length - 1 && ", "}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-sm font-medium text-neutral-700">
                                    {paper.conference}
                                    {paper.award && <span className="text-red-500 ml-2">{paper.award}</span>}
                                </div>

                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    {paper.description}
                                </p>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    {paper.paper && (
                                        <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
                                            <FaFilePdf /> Paper
                                        </a>
                                    )}
                                    {paper.website && (
                                        <a href={paper.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
                                            <FaGlobe /> Website
                                        </a>
                                    )}
                                    {paper.code && (
                                        <a href={paper.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {paper.video && (
                                        <a href={paper.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
                                            <FaYoutube /> Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    </FadeInItem>
                ))}
            </FadeInStagger>
        </FadeIn>
    </div>
);

// Reusable Window Shell
const Window = ({ windowState, isActive, onClose, onMinimize, onFocus, children }: any) => {
    const controls = useDragControls();
    const [isDragging, setIsDragging] = useState(false);
    
    return (
    <motion.div
      drag
      dragMomentum={false}
      dragListener={false} // Only drag via controls
      dragControls={controls}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ 
          scale: windowState.isMinimized ? 0 : 1, 
          opacity: windowState.isMinimized ? 0 : 1, 
          y: windowState.isMinimized ? 200 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ 
          width: windowState.size.w, 
          height: windowState.size.h, 
          maxWidth: '95vw',
          maxHeight: '85vh',
          zIndex: isActive ? 50 : windowState.zIndex, 
          position: 'absolute',
          top: windowState.position.y,
          left: windowState.position.x
      }}
      className={`rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-2xl ${isActive ? 'shadow-black/20' : ''}`}
      onMouseDown={() => onFocus(windowState.id)}
    >
      <div 
        className="h-8 bg-[#f3f4f6] border-b border-neutral-200 flex items-center px-4 justify-between select-none" 
        onPointerDown={(e) => controls.start(e)}
      >
        <div className="flex space-x-2 group">
          <button onClick={(e) => { e.stopPropagation(); onClose(windowState.id); }} className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 flex items-center justify-center hover:opacity-80 text-[6px] font-bold text-black/50">x</button>
          <button className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 flex items-center justify-center cursor-default"></button>
          <button className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 flex items-center justify-center cursor-default"></button>
        </div>
        <div className="text-xs font-semibold text-neutral-500 flex items-center gap-2">
            {windowState.type === 'finder' && <RiFinderFill />}
            {windowState.title}
        </div>
        <div className="w-10"></div>
      </div>
      <div className={`h-[calc(100%-2rem)] overflow-hidden relative ${isDragging ? 'pointer-events-none' : ''}`}>
          {children}
      </div>
    </motion.div>
  );
};


// Helper for Sidebar
const SidebarItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) => (
    <div onClick={onClick} className={`flex items-center gap-2 px-2 py-1 rounded ${active ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/5'} cursor-default ${onClick ? 'cursor-pointer' : ''}`}>
        <span className="text-sm">{icon}</span>
        <span>{label}</span>
    </div>
);

const DockItem = ({ children, label, onClick, isOpen }: { children: React.ReactNode, label: string, onClick?: () => void, isOpen?: boolean }) => (
     <div className="group relative flex flex-col items-center gap-1" onClick={onClick}>
        <div className="w-12 h-12 bg-gray-100/90 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 active:scale-95 cursor-pointer">
            {children}
        </div>
        <div className={`w-1 h-1 bg-white rounded-full ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
        
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800/80 backdrop-blur text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {label}
        </div>
    </div>
);

// Desktop Icon Component
const DesktopIcon = ({ file, onOpen }: { file: VirtualFile, onOpen: (file: VirtualFile) => void }) => {
    return (
        <div 
            className="flex flex-col items-center gap-1 w-[4.5rem] md:w-20 group cursor-pointer"
            onDoubleClick={(e) => { e.stopPropagation(); onOpen(file); }}
            onClick={(e) => {
                 // For touch devices, sometimes double click is hard, allow single click helper or keep double?
                 // Standard for desktop is double.
                 // Windows 95 mobile example likely uses single tap?
                 // But sticking to double for 'MacOS' feel unless requested.
            }}
        >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-4xl md:text-5xl filter drop-shadow-md group-hover:scale-105 transition-transform">
                {file.type === 'folder' && <FaFolder className="text-blue-400" />}
                {file.type === 'pdf' && <FaFilePdf className="text-red-500" />}
                {file.type === 'txt' && <FaFileAlt className="text-gray-200" />}
                {file.type === 'app' && (file.icon ? file.icon : <FaApple className="text-white" />)}
                {file.type === 'link' && <FaSafari className="text-blue-500" />}
            </div>
            <span className="text-[10px] md:text-xs text-white font-medium text-center px-1 rounded group-hover:bg-blue-600/50 line-clamp-2 shadow-sm text-shadow select-none bg-black/20 leading-tight">
                {file.name}
            </span>
        </div>
    );
};

// Wrapper for draggable icons
const DraggableDesktopIcon = ({ file, onOpen, top, left, right, bottom }: { file: VirtualFile, onOpen: (f: VirtualFile) => void, top?: number|string, left?: number|string, right?: number|string, bottom?: number|string }) => {
    const controls = useDragControls();
    return (
        <motion.div
            drag
            dragMomentum={false}
            dragListener={true}
            whileDrag={{ scale: 1.1, zIndex: 100 }}
            className="absolute flex flex-col items-center"
            style={{ top, left, right, bottom }}
        >
            <DesktopIcon file={file} onOpen={onOpen} />
        </motion.div>
    );
};

// 5. Sticky Note Component
const StickyNote = () => {
    const controls = useDragControls();
    // Prevent dragging when clicking tasks
    const [isDragging, setIsDragging] = useState(false);
    
    const [tasks, setTasks] = useState([
        { id: 1, text: "Graduate High School", done: true },
        { id: 2, text: "Drink water", done: false },
        { id: 3, text: "Brush my teeth", done: true },
        { id: 4, text: "Read papers without crying", done: false },
        { id: 5, text: "Make robots less confused than me", done: false },
        { id: 6, text: "Move out of my parents house", done: false },
        { id: 7, text: "Get really good at making pasta", done: true },
        { id: 8, text: "Touch grass (occasionally)", done: false },
    ]);

    const toggleTask = (id: number) => {
        if (!isDragging) {
             setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
        }
    };

    return (
        <motion.div
            drag
            dragControls={controls}
            dragMomentum={false}
            dragListener={false} // Only drag via listener on handle
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            initial={{ x: 50, y: 100, rotate: -2 }}
            className="absolute top-20 left-20 w-64 min-h-[300px] bg-[#feff9c] shadow-lg rounded-sm p-5 text-[#4a4a4a] text-sm z-0 origin-top-left font-sans transform rotate-[-2deg]"
            style={{ fontFamily: '"Marker Felt", "Comic Sans MS", sans-serif' }}
        >
             {/* Drag Handle */}
             <div 
                className="absolute top-0 left-0 right-0 h-8 cursor-move flex justify-center items-center group mb-2"
                onPointerDown={(e) => controls.start(e)}
             >
                 <div className="w-16 h-1 bg-black/5 rounded-full group-hover:bg-black/10 transition-colors" />
             </div>

             <h2 className="font-bold text-lg mb-4 mt-2 select-none">To do:</h2>
             <ul className="space-y-2">
                 {tasks.map(task => (
                     <li 
                        key={task.id} 
                        onClick={() => toggleTask(task.id)}
                        className={`cursor-pointer flex items-start gap-2 transition-opacity select-none ${task.done ? 'opacity-40 line-through' : ''}`}
                     >
                         <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                         <span>{task.text}</span>
                     </li>
                 ))}
             </ul>
        </motion.div>
    );
};

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <FaApple className="text-white w-24 h-24 mb-16" />
      <motion.div className="w-48 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(); 
  };
  
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-40 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-no-repeat bg-center" style={{ backgroundImage: 'url(/images/macos-wallpaper.png)', backgroundSize: '100% 100%' }} />
      <div className="absolute inset-0 backdrop-blur-xl bg-black/30" />

      <div className="z-10 flex flex-col items-center space-y-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-2xl border-2 border-white/20">
          <Image src="/images/EthanVillalovozPic.jpeg" alt="User" fill className="object-cover" />
        </div>
        
        <h2 className="text-white text-xl font-semibold tracking-wide drop-shadow-md">Ethan Villalovoz</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col items-center space-y-3">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/30 transition-all w-48 backdrop-blur-sm text-center"
              autoFocus
            />
            <p className="text-white/40 text-xs font-medium">Hint: Just press Enter</p>
        </form>
         <p className="text-white/40 text-xs font-medium pt-4 cursor-pointer hover:text-white" onClick={() => router.push('/')}>
             Cancel / Restart
         </p>
      </div>
    </motion.div>
  );
};

const Desktop = () => {
    const [time, setTime] = useState<string>("");
    const [windows, setWindows] = useState<WindowState[]>([]);
    const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const router = useRouter();

    // Clock
    useEffect(() => {
        const updateTime = () => {
             const now = new Date();
             // Format: "Sunday, May 25   6:00 PM"
             const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
             const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
             setTime(`${date}\u00A0\u00A0\u00A0${time}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        
        // Initial set to avoid hydration mismatch if possible, though strict mode might differ
        return () => clearInterval(interval);
    }, []);

    const openWindow = (type: WindowState["type"], title: string, data?: any) => {
        // Bring to front if already open
        const existingInfo = windows.find(w => w.type === type && w.title === title);
        if (existingInfo) {
             setWindows(prev => prev.map(w => w.id === existingInfo.id ? { ...w, isMinimized: false, zIndex: windows.length + 1 } : w));
             setActiveWindowId(existingInfo.id);
             return;
        }

        const id = Math.random().toString(36).substr(2, 9);
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const newWindow: WindowState = {
            id,
            type,
            title,
            isOpen: true,
            isMinimized: false,
            position: { 
                x: isMobile ? 10 : 100 + (windows.length * 30), 
                y: isMobile ? 50 : 50 + (windows.length * 30) 
            },
            size: { 
                w: isMobile ? window.innerWidth * 0.9 : (type === 'finder' ? 850 : 700), 
                h: isMobile ? window.innerHeight * 0.6 : 500 
            },
            zIndex: windows.length + 1,
            data
        };
        setWindows([...windows, newWindow]);
        setActiveWindowId(id);
    };

    const closeWindow = (id: string) => {
        setWindows(prev => prev.filter(w => w.id !== id));
    };

    const handleFileOpen = (file: VirtualFile) => {
        if (file.type === 'folder') {
             openWindow('finder', file.name, { path: file.children });
        } else if (file.type === 'link') {
            window.open(file.content, '_blank');
        } else if (file.type === 'pdf') {
            openWindow('safari', file.name, { url: file.content }); 
        } else if (file.type === 'txt') {
             openWindow('preview', file.name, { text: file.content });
        } else if (file.type === 'app') {
            if(file.name === "Mail") openWindow('mail', 'Mail');
            if(file.name === "Terminal") openWindow('terminal', 'Terminal');
            if(file.name === "Finder") openWindow('finder', 'Finder');

            if(file.content === "news") openWindow('news', 'News');
            if(file.content === "experience") openWindow('experience', 'Experience');
            if(file.content === "technologies") openWindow('technologies', 'Technologies');
            
            if(file.content === "interests") openWindow('interests', 'Research Interests');
            if(file.content === "pre-prints") openWindow('pre-prints', 'Pre-Prints');
            if(file.content === "2023-papers") openWindow('2023-papers', '2023 Papers');
            if(file.content === "wsu-teaching") openWindow('wsu-teaching', 'Teaching Experience');
        }
    };

    // Extract files for desktop
    const desktopFolder = fileSystem[0].children![1].children![0].children![0];
    const cvFile = desktopFolder.children!.find(c => c.id === 'cv')!;
    const resumeFile = desktopFolder.children!.find(c => c.id === 'resume')!;
    
    // Home Subfolders (Apps)
    const homeApps = desktopFolder.children!.find(c => c.id === 'home-folder')!.children!;
    
    // Publications Subfolders (Apps)
    const pubApps = desktopFolder.children!.find(c => c.id === 'publications-folder')!.children!;
    
    // Teaching Subfolders (Apps)
    const teachApps = desktopFolder.children!.find(c => c.id === 'teaching-folder')!.children!;

    const [isMobileLayout, setIsMobileLayout] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobileLayout(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div 
          className="absolute inset-0 bg-no-repeat bg-center overflow-hidden"
          style={{ backgroundImage: 'url(/images/macos-wallpaper.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} 
          onClick={() => { setActiveWindowId(null); setActiveMenu(null); }}
        >
            {/* Menu Bar */}
            <div className="h-7 bg-black/40 backdrop-blur-md flex items-center justify-between px-2 text-white text-xs select-none z-50 relative">
                <div className="flex items-center gap-1 font-medium h-full">
                    {/* Apple Menu */}
                    <div className={`relative h-full flex items-center px-3 rounded hover:bg-white/20 transition-colors cursor-default ${activeMenu === 'apple' ? 'bg-white/20' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === 'apple' ? null : 'apple'); }}>
                        <FaApple className="text-base" />
                        {activeMenu === 'apple' && (
                            <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900/90 backdrop-blur-md rounded-md shadow-xl text-white py-1 border border-white/20 flex flex-col z-50">
                                <span className="px-4 py-1 hover:bg-blue-600 cursor-default" onClick={() => openWindow('about', 'About This Mac')}>About This Mac</span>
                                <div className="h-[1px] bg-white/10 my-1 mx-2" />
                                <span className="px-4 py-1 hover:bg-blue-600 cursor-default flex justify-between" onClick={() => router.push('/')}>Log Out Ethan Villalovoz... <span className="text-gray-400 text-[9px] tracking-widest">⇧⌘Q</span></span>
                            </div>
                        )}
                    </div>

                    {/* App Name */}
                    <div className="h-full flex items-center px-3 rounded cursor-default font-bold">
                        Ethan Villalovoz
                    </div>

                    {/* Socials Menu */}
                    <div className={`relative h-full flex items-center px-3 rounded hover:bg-white/20 transition-colors cursor-default ${activeMenu === 'socials' ? 'bg-white/20' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === 'socials' ? null : 'socials'); }}>
                        <span>Socials</span>
                        {activeMenu === 'socials' && (
                            <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900/90 backdrop-blur-md rounded-md shadow-xl text-white py-1 border border-white/20 flex flex-col z-50">
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => window.open('https://www.linkedin.com/in/evillalovoz27/', '_blank')}>
                                    <FaLinkedin className="text-lg" /> LinkedIn
                                </div>
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => window.open('https://github.com/ethanvillalovoz', '_blank')}>
                                    <FaGithub className="text-lg" /> GitHub
                                </div>
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => window.open('https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en', '_blank')}>
                                    <FaGraduationCap className="text-lg" /> Scholar
                                </div>
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => window.open('https://x.com/etvillalovoz', '_blank')}>
                                    <FaXTwitter className="text-lg" /> X
                                </div>
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => window.open('https://www.youtube.com/@ethanvillalovoz', '_blank')}>
                                    <FaYoutube className="text-lg" /> YouTube
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Resume Menu */}
                    <div className={`relative h-full hidden md:flex items-center px-3 rounded hover:bg-white/20 transition-colors cursor-default ${activeMenu === 'resume' ? 'bg-white/20' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === 'resume' ? null : 'resume'); }}>
                        <span>Resume</span>
                        {activeMenu === 'resume' && (
                            <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900/90 backdrop-blur-md rounded-md shadow-xl text-white py-1 border border-white/20 flex flex-col z-50">
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => openWindow('safari', 'Resume', { url: '/data/EthanVillalovoz-Resume.pdf' })}>
                                    <FaFilePdf className="text-lg" /> View as PDF
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                     <span className="opacity-90 grayscale hidden md:block">
                        <FaLayerGroup className="text-sm" />
                     </span>
                     <div className="flex items-center gap-3.5">
                        <FaBatteryFull className="text-sm opacity-90" />
                        <FaWifi className="text-sm opacity-90" />
                        <FaSearch className="text-sm opacity-90 hidden md:block" />
                        <div className="relative w-4 h-4 hidden md:flex flex-col justify-between py-[2px] opacity-90">
                            {/* Custom CSS Control Center Icon */}
                            <div className="w-full h-[5px] rounded-full bg-white border border-black/10 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-white rounded-full shadow-sm" />
                            </div>
                            <div className="w-full h-[5px] rounded-full bg-white border border-black/10 relative">
                                <div className="absolute right-0 top-0 bottom-0 w-[5px] bg-white rounded-full shadow-sm" />
                            </div>
                        </div>
                   </div>
                   <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#33ccff] via-[#ff33cc] to-[#ffcc33] opacity-90 shadow-inner ml-1" />
                   <span className="font-medium ml-2 text-sm select-none">{time}</span>
                </div>
            </div>


            {/* Desktop Layout (Large Screens) */}
            {!isMobileLayout && (
                <>
                    {/* Sticky Note Widget */}
                    <StickyNote />

                    {/* Static Desktop Icons (CV & Resume) - Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-8 md:gap-12 pointer-events-none z-0">
                        <div className="pointer-events-auto">
                            <DesktopIcon file={cvFile} onOpen={handleFileOpen} />
                        </div>
                        <div className="pointer-events-auto">
                            <DesktopIcon file={resumeFile} onOpen={handleFileOpen} />
                        </div>
                    </div>

                    {/* Draggable Desktop Icons */}
                    
                    {/* Home: Bottom Left */}
                    {homeApps.map((file, i) => (
                        <DraggableDesktopIcon 
                            key={file.id} 
                            file={file} 
                            onOpen={handleFileOpen} 
                            bottom={140} 
                            left={30 + (i * 100)} 
                        />
                    ))}

                    {/* Publications: Top Right */}
                    {pubApps.map((file, i) => (
                        <DraggableDesktopIcon 
                            key={file.id} 
                            file={file} 
                            onOpen={handleFileOpen} 
                            top={60} 
                            right={30 + (i * 100)} 
                        />
                    ))}

                    {/* Teaching: Bottom Right */}
                    {teachApps.map((file, i) => (
                        <DraggableDesktopIcon 
                            key={file.id} 
                            file={file} 
                            onOpen={handleFileOpen} 
                            bottom={140} 
                            right={30 + (i * 100)} 
                        />
                    ))}
                </>
            )}

            {/* Mobile/Tablet Layout (Strict Grid No Scroll) */}
            {isMobileLayout && (
                <div className="absolute inset-0 pt-12 pb-24 px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 content-start justify-items-center gap-y-4 gap-x-2 overflow-hidden pointer-events-auto">
                    {/* CV & Resume First */}
                    <DesktopIcon file={cvFile} onOpen={handleFileOpen} />
                    <DesktopIcon file={resumeFile} onOpen={handleFileOpen} />
                    
                    {/* Then Apps Grouped */}
                    {homeApps.map(file => (
                        <DesktopIcon key={file.id} file={file} onOpen={handleFileOpen} />
                    ))}
                    {pubApps.map(file => (
                        <DesktopIcon key={file.id} file={file} onOpen={handleFileOpen} />
                    ))}
                    {teachApps.map(file => (
                        <DesktopIcon key={file.id} file={file} onOpen={handleFileOpen} />
                    ))}
                </div>
            )}

            {/* Windows */}
            <AnimatePresence>
                {windows.map(w => (
                     <Window 
                        key={w.id} 
                        windowState={w} 
                        isActive={activeWindowId === w.id}
                        onClose={() => closeWindow(w.id)}
                        onMinimize={() => setWindows(prev => prev.map(win => win.id === w.id ? { ...win, isMinimized: true } : win))}
                        onFocus={setActiveWindowId}
                     >
                        {w.type === 'terminal' && <TerminalApp fs={fileSystem} onOpen={handleFileOpen} />}
                        {w.type === 'mail' && <MailApp />}
                        {w.type === 'finder' && <FinderApp onNavigate={() => {}} onOpenFile={handleFileOpen} />}
                        {w.type === 'safari' && (
                             <iframe src={w.data?.url} className="w-full h-full bg-white" title={w.title} />
                        )}
                        {w.type === 'about' && <AboutApp />}
                        {w.type === 'photos' && <PhotosApp />}
                        {w.type === 'music' && <MusicApp />}
                        {w.type === 'preview' && (
                            <div className="p-8 font-serif text-lg leading-loose bg-white h-full overflow-auto text-black selection:bg-blue-300">
                                {w.data?.text}
                            </div>
                        )}
                        {w.type === 'news' && <NewsApp />}
                        {w.type === 'experience' && <ExperienceApp />}
                        {w.type === 'technologies' && <TechnologiesApp />}
                        
                        {w.type === 'interests' && <InterestsApp />}
                        {w.type === 'pre-prints' && <PublicationsListApp title="Pre-Prints" papers={preprints} />}
                        {w.type === '2023-papers' && <PublicationsListApp title="2023 Papers" papers={papers_2023} />}
                        {w.type === 'wsu-teaching' && <TeachingApp />}
                     </Window>
                ))}
            </AnimatePresence>

            {/* Dock */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-end gap-3 z-50 shadow-2xl max-w-[95vw] overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                 <DockItem label="Finder" onClick={() => openWindow('finder', 'Finder')} isOpen={windows.some(w => w.type === 'finder')} >
                    <RiFinderFill className="text-blue-500" />
                 </DockItem>
                 <DockItem label="Safari" onClick={() => openWindow('safari', 'Internet', { url: 'https://www.google.com/webhp?igu=1' })} isOpen={windows.some(w => w.type === 'safari')}>
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <FaSafari className="text-[#1b9bf0] text-2xl" />
                    </div>
                 </DockItem>
                 <DockItem label="Mail" onClick={() => openWindow('mail', 'Mail')} isOpen={windows.some(w => w.type === 'mail')}>
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                        <FaPaperPlane className="text-white text-xl transform -rotate-12" />
                    </div>
                 </DockItem>
                 <DockItem label="Photos" onClick={() => openWindow('photos', 'Photos')} isOpen={windows.some(w => w.type === 'photos')}>
                    <div className="bg-white rounded-lg p-1">
                        <IoMdPhotos className="text-xl text-pink-500" />
                    </div>
                 </DockItem>
                 <DockItem label="Apple Music" onClick={() => openWindow('music', 'Music')} isOpen={windows.some(w => w.type === 'music')}>
                    <div className="w-10 h-10 bg-[#fa233b] rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                        <FaMusic className="text-white text-xl" />
                    </div>
                 </DockItem>
                 <DockItem label="Terminal" onClick={() => openWindow('terminal', 'Terminal')} isOpen={windows.some(w => w.type === 'terminal')}>
                    <FaTerminal className="text-gray-900" />
                 </DockItem>
                 <DockItem label="About" onClick={() => openWindow('about', 'About This Mac')} isOpen={windows.some(w => w.type === 'about')}>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image src="/images/EthanVillalovozPic.jpeg" alt="Me" fill className="object-cover" />
                    </div>
                 </DockItem>
                 
                 <div className="w-[1px] h-10 bg-white/30 mx-1" />

                 <DockItem label="Log Out" onClick={() => router.push('/')}>
                    <FaPowerOff className="text-red-500" />
                 </DockItem>
            </div>
        </div>
    );
};

export default function MacOSPage() {
  const [systemState, setSystemState] = useState<SystemState>("boot");
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-black font-sans z-[9999]">
      <AnimatePresence mode="wait">
        {systemState === "boot" && <BootScreen key="boot" onComplete={() => setSystemState("login")} />}
        {systemState === "login" && <LoginScreen key="login" onLogin={() => setSystemState("desktop")} />}
        {systemState === "desktop" && <Desktop key="desktop" />}
      </AnimatePresence>
    </main>
  );
}
