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
  FaGraduationCap,
  FaLayerGroup,
  FaDesktop
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSwitch, IoMdMail, IoMdPhotos } from "react-icons/io";
import { RiFinderFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

// --- Data & File System ---

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
                    { id: "home-folder", name: "Home", type: "folder", children: [] },
                    { id: "publications-folder", name: "Publications", type: "folder", children: [] },
                    { id: "teaching-folder", name: "Teaching", type: "folder", children: [] }
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
              { id: "about", name: "about_me.txt", type: "txt", content: `Hi, I'm Ethan.\n\nI am a Master's student at Georgia Tech and an incoming Software Engineer at Microsoft.\n\nMy interests lie in Robotics, Bayesian Optimization, and building cool things.` }
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
  type: "finder" | "safari" | "terminal" | "mail" | "preview" | "pdf-viewer" | "about";
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { w: number; h: number };
  zIndex: number;
  data?: any; // To pass path or content
}

// --- Components ---

// 1. Terminal Component with functional command line
const TerminalApp = ({ fs }: { fs: VirtualFile[] }) => {
    const [history, setHistory] = useState([
        "Last login: " + new Date().toDateString() + " on ttys000",
        "Type 'help' for available commands."
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim();
        const newHistory = [...history, `ethan@macbook ~ % ${cmd}`];

        if (cmd === "help") {
            newHistory.push("Available commands: help, clear, whoami, ls, date, cat about.txt");
        } else if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        } else if (cmd === "whoami") {
            newHistory.push("ethan villalovoz");
        } else if (cmd === "ls") {
            newHistory.push("Desktop  Documents  Downloads  about_me.txt");
        } else if (cmd === "date") {
            newHistory.push(new Date().toString());
        } else if (cmd === "cat about.txt" || cmd === "cat about_me.txt") {
             newHistory.push("Hi, I'm Ethan. Master's Student @ GT. Incoming SWE @ Microsoft.");
        } else if (cmd !== "") {
            newHistory.push(`zsh: command not found: ${cmd}`);
        }
        
        setHistory(newHistory);
        setInput("");
    };

    return (
        <div className="h-full bg-[#1e1e1e] text-white font-mono p-4 text-sm overflow-auto" onClick={() => document.getElementById('term-input')?.focus()}>
            {history.map((line, i) => <div key={i} className="whitespace-pre-wrap mb-1 text-[#4AF626] opacity-90">{line}</div>)}
            <form onSubmit={handleCommand} className="flex gap-2">
                <span className="text-[#4AF626]">ethan@macbook ~ %</span>
                <input 
                    id="term-input"
                    type="text" 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#4AF626] caret-white"
                    autoFocus
                />
            </form>
            <div ref={bottomRef} />
        </div>
    );
};

// 2. Mail Component (Contact Form)
const MailApp = () => {
    const [sent, setSent] = useState(false);
    return (
        <div className="h-full flex flex-col bg-white">
            <div className="h-12 border-b flex items-center px-4 justify-between bg-gray-50">
                <div className="flex gap-4 text-gray-500">
                    <span className="hover:text-black cursor-pointer">Inbox</span>
                    <span className="text-black font-semibold">Compose</span>
                    <span className="hover:text-black cursor-pointer">Sent</span>
                </div>
                <FaPaperPlane className={`text-blue-500 cursor-pointer ${sent ? 'text-green-500' : ''}`} />
            </div>
            {!sent ? (
                <div className="p-6 flex flex-col gap-4 h-full">
                    <div className="border-b pb-2 text-sm text-gray-500">To: <span className="text-black px-2 bg-blue-100 rounded-md">ethan.villalovoz@gatech.edu</span></div>
                    <div className="border-b pb-2 text-sm text-gray-500 flex gap-2">
                        <span>Subject:</span>
                        <input className="outline-none flex-1 text-black" placeholder="Hello!" />
                    </div>
                    <textarea className="flex-1 resize-none outline-none text-gray-800 font-serif leading-relaxed" placeholder="Write your message here..." />
                    <button onClick={() => setSent(true)} className="self-end bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                        Send Message
                    </button>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-2xl">✓</div>
                    <p>Message Sent!</p>
                    <button onClick={() => setSent(false)} className="text-blue-500 text-sm hover:underline">Write another</button>
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
                                {file.type === 'folder' && <FaFolder className="text-blue-400" />}
                                {file.type === 'pdf' && <FaFilePdf className="text-red-500" />}
                                {file.type === 'txt' && <FaFileAlt className="text-gray-500" />}
                                {file.type === 'app' && <FaApple className="text-gray-800" />}
                                {file.type === 'link' && <FaSafari className="text-blue-500" />}
                             </div>
                             <span className="text-xs text-center font-medium line-clamp-2 w-full break-words">{file.name}</span>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
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
                    I am always open to connecting—please feel free to reach out!
                </p>
            </div>
         </div>
    );
};

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
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 active:scale-95 cursor-pointer">
            {children}
        </div>
        <div className={`w-1 h-1 bg-white rounded-full ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
        
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800/80 backdrop-blur text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {label}
        </div>
    </div>
);

// Desktop Icon Component
const DesktopIcon = ({ file, onOpen }: { file: VirtualFile, onOpen: (file: VirtualFile) => void }) => {
    return (
        <div 
            className="flex flex-col items-center gap-1 w-20 group cursor-pointer"
            onDoubleClick={() => onOpen(file)}
        >
            <div className="w-16 h-16 flex items-center justify-center text-5xl filter drop-shadow-md group-hover:scale-105 transition-transform">
                {file.type === 'folder' && <FaFolder className="text-blue-400" />}
                {file.type === 'pdf' && <FaFilePdf className="text-red-500" />}
                {file.type === 'txt' && <FaFileAlt className="text-gray-200" />}
                {file.type === 'app' && <FaApple className="text-white" />}
                {file.type === 'link' && <FaSafari className="text-blue-500" />}
            </div>
            <span className="text-xs text-white font-medium text-center px-1 rounded group-hover:bg-blue-600/50 line-clamp-2 shadow-sm text-shadow select-none">
                {file.name}
            </span>
        </div>
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
        { id: 3, text: "Pretend I like my job", done: true },
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
        const newWindow: WindowState = {
            id,
            type,
            title,
            isOpen: true,
            isMinimized: false,
            position: { x: 100 + (windows.length * 30), y: 50 + (windows.length * 30) },
            size: { w: type === 'finder' ? 850 : 700, h: 500 },
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
        }
    };

    return (
        <div 
          className="absolute inset-0 bg-no-repeat bg-center overflow-hidden"
          style={{ backgroundImage: 'url(/images/macos-wallpaper.png)', backgroundSize: '100% 100%' }} 
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
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => openWindow('safari', 'LinkedIn', { url: 'https://www.linkedin.com/in/evillalovoz27/' })}>
                                    <FaLinkedin className="text-lg" /> LinkedIn
                                </div>
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => openWindow('safari', 'GitHub', { url: 'https://github.com/ethanvillalovoz' })}>
                                    <FaGithub className="text-lg" /> GitHub
                                </div>
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => openWindow('safari', 'Scholar', { url: 'https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en' })}>
                                    <FaGraduationCap className="text-lg" /> Scholar
                                </div>
                                {/* <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => openWindow('safari', 'X', { url: 'https://x.com/etvillalovoz' })}>
                                    <FaXTwitter className="text-lg" /> X
                                </div> */}
                                <div className="px-4 py-1 hover:bg-blue-600 cursor-default flex items-center gap-3" onClick={() => openWindow('safari', 'YouTube', { url: 'https://www.youtube.com/@ethanvillalovoz' })}>
                                    <FaYoutube className="text-lg" /> YouTube
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Resume Menu */}
                    <div className={`relative h-full flex items-center px-3 rounded hover:bg-white/20 transition-colors cursor-default ${activeMenu === 'resume' ? 'bg-white/20' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === 'resume' ? null : 'resume'); }}>
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
                     <span className="opacity-90 grayscale">
                        <FaLayerGroup className="text-sm" />
                     </span>
                     <div className="flex items-center gap-3.5">
                        <FaBatteryFull className="text-sm opacity-90" />
                        <FaWifi className="text-sm opacity-90" />
                        <FaSearch className="text-sm opacity-90" />
                        <div className="relative w-4 h-4 flex flex-col justify-between py-[2px] opacity-90">
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


            {/* Sticky Note Widget */}
            <StickyNote />

            {/* Windows */}
            <AnimatePresence>
                {windows.map(w => (
                     <Window 
                        key={w.id} 
                        windowState={w} 
                        isActive={activeWindowId === w.id}
                        onClose={closeWindow}
                        onMinimize={() => {}} 
                        onFocus={setActiveWindowId}
                     >
                        {w.type === 'terminal' && <TerminalApp fs={fileSystem} />}
                        {w.type === 'mail' && <MailApp />}
                        {w.type === 'finder' && <FinderApp onNavigate={() => {}} onOpenFile={handleFileOpen} />}
                        {w.type === 'safari' && (
                             <iframe src={w.data?.url} className="w-full h-full bg-white" title={w.title} />
                        )}
                        {w.type === 'about' && <AboutApp />}
                        {w.type === 'preview' && (
                            <div className="p-8 font-serif text-lg leading-loose bg-white h-full overflow-auto text-black selection:bg-blue-300">
                                {w.data?.text}
                            </div>
                        )}
                     </Window>
                ))}
            </AnimatePresence>

            {/* Dock */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-end gap-3 z-50 shadow-2xl">
                 <DockItem label="Finder" onClick={() => openWindow('finder', 'Finder')} isOpen={windows.some(w => w.type === 'finder')} >
                    <RiFinderFill className="text-blue-500" />
                 </DockItem>
                 <DockItem label="Safari" onClick={() => openWindow('safari', 'Internet', { url: 'https://www.google.com/webhp?igu=1' })} isOpen={windows.some(w => w.type === 'safari')}>
                    <FaSafari className="text-blue-400" />
                 </DockItem>
                 <DockItem label="Mail" onClick={() => openWindow('mail', 'Mail')} isOpen={windows.some(w => w.type === 'mail')}>
                    <FaPaperPlane className="text-blue-500 transform -rotate-12" />
                 </DockItem>
                 <DockItem label="Terminal" onClick={() => openWindow('terminal', 'Terminal')} isOpen={windows.some(w => w.type === 'terminal')}>
                    <FaTerminal className="text-gray-800" />
                 </DockItem>
                 <DockItem label="Projects" onClick={() => openWindow('finder', 'Deep Learning Projects')} isOpen={false}>
                    <FaFolder className="text-blue-400" />
                 </DockItem>
                 
                 <div className="w-[1px] h-10 bg-white/30 mx-1" />

                 <DockItem label="Trash" onClick={() => {}}>
                    <FaTrash className="text-gray-400" />
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
