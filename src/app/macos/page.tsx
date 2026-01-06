"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaApple, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

// --- Types ---
type SystemState = "boot" | "login" | "desktop";

// --- Components ---

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // 3 seconds boot time
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
      <motion.div 
        className="w-48 h-1.5 bg-neutral-800 rounded-full overflow-hidden"
      >
        <motion.div 
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
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
  
  const handleCancel = () => {
    router.push("/");
  };

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-40 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image - Matches Desktop but blurred */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800" />
      
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20" />

      <div className="z-10 flex flex-col items-center space-y-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-2xl border-2 border-white/20">
          <Image 
            src="/images/EthanVillalovozPic.jpeg" 
            alt="User" 
            fill 
            className="object-cover"
          />
        </div>
        
        <h2 className="text-white text-xl font-semibold tracking-wide drop-shadow-md">Ethan Villalovoz</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col items-center space-y-3">
          <div className="flex items-center gap-2">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/30 transition-all w-48 backdrop-blur-sm text-center"
              autoFocus
            />
            {password.length > 0 && (
              <button 
                type="submit" 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              >
                <FaArrowRight size={12} />
              </button>
            )}
          </div>
          <p className="text-white/40 text-xs font-medium">Hint: Just press Enter</p>
        </form>
      </div>

      <div className="absolute bottom-8 text-white/50 flex flex-col items-center gap-2 z-10">
         <div 
             className="flex flex-col items-center cursor-pointer hover:text-white transition-colors"
             onClick={handleCancel}
         >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center mb-1">
                <span className="text-xs">✕</span>
            </div>
            <span className="text-xs">Cancel</span>
         </div>
         <span className="text-xs mt-4">Safe Boot</span>
      </div>
    </motion.div>
  );
};

const Desktop = () => {
    // Basic clock state
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-US", { 
                hour: "numeric", 
                minute: "2-digit",
                hour12: true 
            });
            const dateString = now.toLocaleDateString("en-US", { 
                weekday: "short", 
                month: "short", 
                day: "numeric" 
            });
            setTime(`${dateString} ${timeString}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-cover bg-center flex flex-col overflow-hidden"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Simulated Wallpaper */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800" />
      
      {/* Menu Bar */}
      <div className="relative z-50 h-7 flex items-center justify-between px-4 bg-black/20 backdrop-blur-md text-white shadow-sm select-none">
        <div className="flex items-center gap-4 text-sm font-medium">
          <FaApple className="text-white text-base hover:opacity-80 cursor-pointer" />
          <span className="font-bold cursor-default">Finder</span>
          <span className="hover:bg-white/10 px-2 rounded cursor-default">File</span>
          <span className="hover:bg-white/10 px-2 rounded cursor-default">Edit</span>
          <span className="hover:bg-white/10 px-2 rounded cursor-default">View</span>
          <span className="hover:bg-white/10 px-2 rounded cursor-default">Go</span>
          <span className="hover:bg-white/10 px-2 rounded cursor-default">Window</span>
          <span className="hover:bg-white/10 px-2 rounded cursor-default">Help</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="hover:bg-white/10 px-2 rounded cursor-default">100%</span>
          <span className="hover:bg-white/10 px-2 rounded cursor-default">{time}</span>
        </div>
      </div>

      {/* Desktop Area */}
      <div className="flex-1 relative p-4">
        {/* Simple Desktop Icon */}
        <Link 
            href="/"
            className="absolute top-4 right-4 w-20 flex flex-col items-center group cursor-pointer"
        >
            <div className="w-14 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg mb-1 group-hover:bg-blue-500/80 border border-white/20 flex items-center justify-center">
                <FaArrowRight className="text-white transform rotate-180" />
            </div>
            <span className="text-white text-xs font-medium bg-blue-600/0 group-hover:bg-blue-600/80 px-2 rounded-sm transition-colors shadow-sm">
                Exit Mode
            </span>
        </Link>
      </div>

      {/* Dock Area */}
      <div className="h-20 pb-2 flex items-end justify-center relative z-50 mb-1">
        <div className="bg-white/20 backdrop-blur-xl border border-white/10 px-3 pb-3 pt-3 rounded-2xl flex items-end gap-3 shadow-2xl mx-auto">
           {/* Finder */}
           <div className="group relative w-12 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-200 cursor-pointer flex items-center justify-center">
                <div className="text-white font-bold text-xs">Finder</div>
                <div className="absolute -bottom-1 w-1 h-1 bg-white/50 rounded-full" />
           </div>
           
           {/* Launchpad */}
           <div className="group relative w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-200 cursor-pointer flex items-center justify-center">
                 <div className="grid grid-cols-3 gap-0.5 opacity-80">
                    {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full" />)}
                 </div>
           </div>

           {/* Safari */}
            <div className="group relative w-12 h-12 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-200 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-400/20" />
                <div className="w-full h-full flex items-center justify-center text-blue-500 font-bold text-xs">Safari</div>
                 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full" />
           </div>

            <div className="w-[1px] h-10 bg-white/20 mx-1" />

            {/* Trash */}
           <div className="group relative w-12 h-12 bg-gradient-to-b from-neutral-300 to-neutral-400 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-200 cursor-pointer flex items-center justify-center">
                <div className="w-8 h-px bg-neutral-600 mt-2" />
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function MacOSPage() {
  const [systemState, setSystemState] = useState<SystemState>("boot");

  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-black font-sans selection:bg-blue-500/30 z-[9999]">
      <AnimatePresence mode="wait">
        {systemState === "boot" && (
          <BootScreen key="boot" onComplete={() => setSystemState("login")} />
        )}
        {systemState === "login" && (
          <LoginScreen key="login" onLogin={() => setSystemState("desktop")} />
        )}
        {systemState === "desktop" && (
          <Desktop key="desktop" />
        )}
      </AnimatePresence>
    </main>
  );
}
