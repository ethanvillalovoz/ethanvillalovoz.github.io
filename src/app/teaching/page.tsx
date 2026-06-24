"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { teachingExperiences } from "@/data/teaching";

export default function TeachingPage() {
	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
			<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
				<FadeIn>
					<header className="mb-24">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
							Teaching
						</h1>
						<p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
							I have supported undergraduate computer science courses at Washington State University across programming, algorithms, programming languages, and data mining.
						</p>
					</header>
				</FadeIn>
			
				<FadeIn>
					<h2 className="text-2xl font-bold mb-8 tracking-tight">Washington State University</h2>
					<FadeInStagger className="space-y-8">
						{teachingExperiences.map((exp, idx) => (
							<FadeInItem key={idx}>
								<article className="w-full flex flex-col md:flex-row md:items-start gap-4 md:gap-8 transition-colors">
									<div className="flex-shrink-0 md:w-32 pt-1">
										<span className="inline-block px-2 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700">
											{exp.term}
										</span>
									</div>
									<div className="flex-1">
										<h3 className="font-semibold text-lg text-foreground mb-1">
											{exp.course}
										</h3>
										<div className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-3">
											{exp.role}
										</div>
										<p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
											{exp.description}
										</p>
									</div>
								</article>
							</FadeInItem>
						))}
					</FadeInStagger>
				</FadeIn>
			</div>
		</main>
	);
}
