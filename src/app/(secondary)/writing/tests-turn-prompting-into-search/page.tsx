import type { Metadata } from "next";
import Image from "next/image";
import EssayContents from "@/components/EssayContents";
import { promptSearchEssay } from "@/data/writing";

const articleDescription = promptSearchEssay.summary;

export const metadata: Metadata = {
	title: promptSearchEssay.title,
	description: articleDescription,
	alternates: {
		canonical: promptSearchEssay.href,
	},
	openGraph: {
		title: `${promptSearchEssay.title} | Ethan Villalovoz`,
		description: articleDescription,
		url: `https://ethanvillalovoz.com${promptSearchEssay.href}`,
		siteName: "Ethan Villalovoz",
		locale: "en_US",
		type: "article",
		publishedTime: promptSearchEssay.dateTime,
		authors: ["Ethan Villalovoz"],
	},
	twitter: {
		card: "summary",
		title: `${promptSearchEssay.title} | Ethan Villalovoz`,
		description: articleDescription,
		creator: "@ethanvillalovoz",
	},
};

const contents = [
	{ id: "evaluation", label: "The evaluation is the objective" },
	{ id: "search", label: "Searching without losing language" },
	{ id: "loop", label: "The loop" },
	{ id: "my-work", label: "What I built" },
	{ id: "setup", label: "Experimental setup" },
	{ id: "results", label: "Results" },
	{ id: "prompt-changes", label: "What optimized prompts changed" },
	{ id: "limits", label: "What the results do not say" },
	{ id: "lesson", label: "The broader lesson" },
	{ id: "citation", label: "Citation" },
] as const;

const results = [
	{ model: "ChatGPT-3.5", initial: "61%", cot: "63%", opro: "78%", bode: "89%" },
	{ model: "CodeLlama-7B", initial: "23%", cot: "22%", opro: "38%", bode: "50%" },
	{ model: "DeepSeek-Coder-33B", initial: "66%", cot: "-", opro: "78%", bode: "94%" },
];

export default function PromptSearchEssayPage() {
	const articleUrl = `https://ethanvillalovoz.com${promptSearchEssay.href}`;

	return (
		<main className="essay-main">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "TechArticle",
						headline: promptSearchEssay.title,
						description: articleDescription,
						datePublished: promptSearchEssay.dateTime,
						dateModified: promptSearchEssay.dateTime,
						mainEntityOfPage: articleUrl,
						author: {
							"@type": "Person",
							name: "Ethan Villalovoz",
							url: "https://ethanvillalovoz.com",
						},
						citation: "https://arxiv.org/abs/2512.15076",
					}),
				}}
			/>

			<article className="essay-container">
				<header className="essay-header work-page-fade">
					<p className="essay-kicker">BODE-GEN</p>
					<h1>{promptSearchEssay.title}</h1>
					<p className="essay-deck">{promptSearchEssay.summary}</p>
					<div className="essay-byline">
						<span>Ethan Villalovoz</span>
						<time dateTime={promptSearchEssay.dateTime}>{promptSearchEssay.date}</time>
					</div>
				</header>

				<div className="essay-layout work-page-fade" style={{ animationDelay: "180ms" }}>
					<EssayContents items={contents} />

					<div className="essay-body">
						<p className="essay-lede">
							Prompt engineering is difficult to reason about when success means that an
							output simply feels better. Code gives us a sharper signal: generate a program,
							execute it, and count the tests it passes. Once that loop exists, prompt design
							stops being only a writing exercise and becomes an optimization problem.
						</p>
						<p>
							That was the framing behind{" "}
							<a
								href="https://arxiv.org/abs/2512.15076"
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-link"
							>
								BODE-GEN
							</a>
							, our study of Bayesian optimization for test-driven code generation. I
							built the evaluation pipeline and ran reproducible experiments across 164
							HumanEval+ tasks and three code models. The headline numbers were strong, but
							the more durable lesson was about evaluation: tests can turn an ambiguous
							prompting process into a search problem with an explicit objective.
						</p>

						<section id="evaluation">
							<h2>The evaluation is the objective</h2>
							<p>
								Suppose a coding task begins with an initial prompt and a set of developer
								tests. A base language model produces code, and the code receives a score from
								the fraction of tests it passes. We want a revised prompt that raises that score
								while trying as few prompts as possible.
							</p>
							<p>
								The search is hard for two reasons. Prompts are discrete sequences drawn from a
								huge combinatorial space, and every candidate is expensive: it requires model
								inference followed by program execution. Randomly rewriting the prompt wastes
								the information contained in previous trials. Bayesian optimization is useful
								because it maintains a probabilistic model of that history and chooses the next
								candidate by balancing promising regions against uncertain ones.
							</p>
						</section>

						<section id="search">
							<h2>Searching without losing language</h2>
							<p>
								Standard Bayesian optimization works most naturally in a continuous,
								low-dimensional space. Natural-language prompts are neither. BODE-GEN bridges
								that mismatch with an auxiliary Llama 2 model: optimization happens over
								continuous input embeddings, while the auxiliary model decodes each candidate
								back into an interpretable text prompt for the base code model.
							</p>
							<p>
								The raw search point contains four 4,096-dimensional embeddings. Random
								projections reduce each one to 64 dimensions, producing a 256-dimensional
								search space. A Gaussian Process surrogate with dimensionality-scaled priors
								models prompt quality, and Expected Improvement chooses among 10,000 candidate
								points at each iteration.
							</p>

							<figure className="essay-figure">
								<Image
									src={promptSearchEssay.image}
									alt={promptSearchEssay.imageAlt}
									width={1200}
									height={750}
									sizes="(min-width: 1024px) 720px, 100vw"
									className="essay-figure-image"
								/>
								<figcaption>
									BODE-GEN searches in continuous embedding space, decodes a candidate into
									text, generates code, and sends executable correctness back to the optimizer.
								</figcaption>
							</figure>
						</section>

						<section id="loop">
							<h2>The loop</h2>
							<ol>
								<li>Choose a candidate embedding with Expected Improvement.</li>
								<li>Combine it with the original prompt and a fixed rewriting instruction.</li>
								<li>Use the auxiliary model to decode an interpretable candidate prompt.</li>
								<li>Ask the base model for code and execute that code against the tests.</li>
								<li>Return correctness to the surrogate model and repeat.</li>
							</ol>
							<pre className="essay-code"><code>{`history = []
for candidate in optimizer:
    prompt = auxiliary_llm.decode(candidate, initial_prompt)
    code = base_llm.generate(prompt)
    score = run_tests(code)
    history.append((candidate, score))
    optimizer.update(history)`}</code></pre>
							<p>
								The important detail is that the optimizer never evaluates whether a prompt
								sounds more sophisticated. It only sees whether the resulting program works.
							</p>
						</section>

						<section id="my-work">
							<h2>What I built</h2>
							<p>
								My contribution centered on the test-driven evaluation infrastructure. I built
								the pipeline that generated programs, executed them against the expanded
								HumanEval+ tests, aggregated correctness, and supported repeatable comparisons
								across the three base models and prompting baselines.
							</p>
							<p>
								That work made a mundane point feel concrete: an optimization method is only as
								credible as the evaluator underneath it. A malformed generation, inconsistent
								harness, or nondeterministic comparison can look like an optimization gain. The
								experiment pipeline is not plumbing around the research result; it is part of
								the result.
							</p>
						</section>

						<section id="setup">
							<h2>Experimental setup</h2>
							<p>
								We evaluated all 164 Python tasks in HumanEval+. Compared with the original
								HumanEval, the benchmark expands the test suites by roughly 80 times, making it
								harder for superficially correct programs to survive evaluation.
							</p>
							<p>
								The base models were ChatGPT-3.5 Turbo, CodeLlama-7B, and
								DeepSeek-Coder-33B. Each prompt produced three code samples for pass@1-style
								evaluation. The optimizer began with 20 randomly selected embedding points,
								then ran for 50 Bayesian optimization iterations across five seeds. The
								baselines were the initial HumanEval+ prompt, zero-shot Chain-of-Thought, and
								OPRO, an iterative LLM-driven prompt optimizer.
							</p>
						</section>

						<section id="results">
							<h2>Results</h2>
							<p>
								The table reports the share of HumanEval+ tasks solved to full test-suite
								correctness. BODE-GEN improved over the initial prompt and OPRO for all three
								base models in our setup.
							</p>

							<figure className="essay-figure">
								<Image
									src="/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-results.png"
									alt="Bar charts comparing initial prompts, BODE-GEN, chain-of-thought, and OPRO on ChatGPT 3.5 and CodeLlama 7B"
									width={1000}
									height={435}
									sizes="(min-width: 1024px) 720px, 100vw"
									className="essay-figure-image"
								/>
								<figcaption>
									BODE-GEN achieved the highest aggregate correctness for both ChatGPT 3.5
									and CodeLlama-7B in our evaluation. Figure 2 from the paper.
								</figcaption>
							</figure>

							<div className="essay-table-wrap">
								<table className="essay-results-table">
									<caption>Share of tasks solved to 100% correctness</caption>
									<thead>
										<tr>
											<th scope="col">Base model</th>
											<th scope="col">Initial</th>
											<th scope="col">CoT</th>
											<th scope="col">OPRO</th>
											<th scope="col">BODE-GEN</th>
										</tr>
									</thead>
									<tbody>
										{results.map((result) => (
											<tr key={result.model}>
												<th scope="row">{result.model}</th>
												<td>{result.initial}</td>
												<td>{result.cot}</td>
												<td>{result.opro}</td>
												<td><strong>{result.bode}</strong></td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							<p>
								The search often found meaningful gains within the first 20 to 30 iterations
								and approached its best observed performance by iteration 50. The advantage
								over the baselines also grew on tasks where the initial prompt performed
								poorly. That matters because easy tasks leave little room for any optimizer to
								demonstrate value.
							</p>
						</section>

						<section id="prompt-changes">
							<h2>What optimized prompts changed</h2>
							<p>
								We manually examined 15 tasks with substantial correctness improvements. The
								optimized prompts did not converge on one magic phrase. They repeatedly made
								the task easier to parse:
							</p>

							<figure className="essay-figure">
								<Image
									src="/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-prompt-comparison.png"
									alt="Side-by-side comparison of an original HumanEval+ prompt and a more explicit BODE-GEN optimized prompt"
									width={1000}
									height={270}
									sizes="(min-width: 1024px) 720px, 100vw"
									className="essay-figure-image"
								/>
								<figcaption>
									One optimized prompt moves examples out of the docstring, names edge cases,
									and states the task in direct language. Excerpt from Figure 8 of the paper.
								</figcaption>
							</figure>
							<ul>
								<li><strong>Examples became visible.</strong> Inputs and outputs were separated from dense docstrings.</li>
								<li><strong>Instructions became explicit.</strong> Short requirements were expanded into plain-language descriptions.</li>
								<li><strong>Structure improved.</strong> Assumptions, constraints, and examples were placed in distinct sections.</li>
								<li><strong>Edge cases were named.</strong> The prompt made hidden conditions harder for the model to overlook.</li>
								<li><strong>Tasks were decomposed.</strong> Multi-step behavior was described in the order the program needed to implement it.</li>
							</ul>
							<p>
								These observations are useful, but they are not a causal proof that any one
								pattern produces the gain. The optimizer changes several aspects at once. The
								tests tell us which complete prompt worked, not which sentence deserves credit.
							</p>
						</section>

						<section id="limits">
							<h2>What the results do not say</h2>
							<p>
								HumanEval+ is a controlled benchmark, not a production codebase. Its function
								prompts and unit tests give us a clean objective, but real software tasks carry
								repository context, integration constraints, and requirements that are much
								harder to encode in one score.
							</p>
							<p>
								The method also depends on having useful tests. If the test suite misses an
								important behavior, optimization can confidently select a prompt that exploits
								that omission. Better search does not repair a weak objective.
							</p>
							<p>
								Finally, sample-efficient does not mean free. Each candidate still requires
								multiple generations and program executions, and model behavior remains
								stochastic. The experiments show that this search worked for the selected
								models and benchmark; they do not guarantee the same margin for newer models or
								arbitrary software tasks.
							</p>
						</section>

						<section id="lesson">
							<h2>The broader lesson</h2>
							<blockquote>
								Optimization does not rescue a bad evaluator. It amplifies it.
							</blockquote>
							<p>
								The most interesting part of BODE-GEN is not that Bayesian optimization can
								rewrite a prompt. It is that executable feedback changes what prompting can be.
								Without tests, revisions are judged by taste or a proxy model. With tests, each
								trial becomes evidence, and the history of failures can guide the next search
								decision.
							</p>
							<p>
								I now think of evaluation as part of the learning system rather than a final
								report card. The same principle appears in agents and robotics: the behavior we
								can improve is constrained by the feedback we can measure. Better optimization
								helps only after that feedback represents what we actually care about.
							</p>
						</section>

						<section id="citation" className="essay-citation">
							<h2>Citation</h2>
							<p>
								The underlying research is available on{" "}
								<a
									href="https://arxiv.org/abs/2512.15076"
									target="_blank"
									rel="noopener noreferrer"
									className="portfolio-link"
								>
									arXiv
								</a>
								, as a local{" "}
								<a
									href="/data/research/2025_WSU_Bayesian_Prompt_Optimization/paper.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="portfolio-link"
								>
									PDF
								</a>
								, and as a{" "}
								<a
									href="/data/research/2025_WSU_Bayesian_Prompt_Optimization/bode-gen.bib"
									target="_blank"
									rel="noopener noreferrer"
									className="portfolio-link"
								>
									BibTeX
								</a>{" "}
								record.
							</p>
							<p>Please cite this essay as:</p>
							<pre className="essay-code"><code>{`Ethan Villalovoz, "Tests Turn Prompting into Search," ethanvillalovoz.com, Jul 2026. ${articleUrl}`}</code></pre>
							<p>Or use BibTeX:</p>
							<pre className="essay-code"><code>{`@misc{villalovoz2026promptsearch,
  author = {Ethan Villalovoz},
  title = {Tests Turn Prompting into Search},
  year = {2026},
  howpublished = {ethanvillalovoz.com},
  note = {${articleUrl}}
}`}</code></pre>
						</section>
					</div>
				</div>
			</article>
		</main>
	);
}
