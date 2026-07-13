"use client";

import { useEffect, useRef } from "react";

interface WorkCardVideoProps {
	src: string;
	poster: string;
	label: string;
	fit?: "cover" | "contain";
}

export function WorkCardVideo({ src, poster, label, fit = "cover" }: WorkCardVideoProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updatePlayback = (visible: boolean) => {
			if (visible && !motionPreference.matches && document.visibilityState === "visible") {
				void video.play().catch(() => undefined);
			} else {
				video.pause();
			}
		};

		let visible = false;
		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
				updatePlayback(visible);
			},
			{ threshold: 0.25 },
		);
		const handlePreferenceChange = () => updatePlayback(visible);
		const handleVisibilityChange = () => updatePlayback(visible);

		observer.observe(video);
		motionPreference.addEventListener("change", handlePreferenceChange);
		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			observer.disconnect();
			motionPreference.removeEventListener("change", handlePreferenceChange);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);

	return (
		<video
			ref={videoRef}
			aria-label={label}
			className={`work-card-video${fit === "contain" ? " work-card-video-contain" : ""}`}
			loop
			muted
			playsInline
			poster={poster}
			preload="metadata"
			src={src}
		/>
	);
}
