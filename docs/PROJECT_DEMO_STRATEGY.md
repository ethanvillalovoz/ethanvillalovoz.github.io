# Project Demo Strategy

This document decides how each public project should be presented across GitHub, the portfolio website, and optional hosted demos.

The goal is not to create a GitHub Pages site for every repository. The goal is to make every project easy to understand, credible, and inspectable without linking people to broken apps or inactive backends.

## Demo Types

| Type | Use When | Best Surface |
| --- | --- | --- |
| README only | The project is library-like, research-oriented, terminal-first, or already well explained with artifacts. | GitHub README |
| README + screenshots | The project has a UI or visual output, but running it requires local setup, API keys, model files, native dependencies, or a backend. | GitHub README |
| README + demo GIF/video | The project is interactive or visual, but a hosted version would be fragile or expensive. | GitHub README + portfolio project card |
| Portfolio project page | The project is high-signal for recruiting or research and deserves a polished narrative. | `ethanvillalovoz.com` |
| Static GitHub Pages | The project can be represented by static HTML/CSS/JS, docs, generated reports, or sample outputs without a backend. | GitHub Pages |
| Live deployed app | The app has a stable frontend, backend, secrets strategy, database, usage limits, and safe public data handling. | Vercel/Render/Fly/etc. |

## Rules

- Do not publish a "Live Demo" link unless the core flow works without private local services.
- GitHub Pages is static hosting. It cannot keep a FastAPI, Flask, database, model server, API key, Chrome extension backend, or local simulator running.
- Prefer a demo video/GIF over a broken live app for projects that need external services or heavyweight runtimes.
- Keep the portfolio website as the central hub. Repos should link to the portfolio when a project page exists.
- Use GitHub Pages selectively for static reports, generated docs, and sample-output viewers.
- For full-stack projects, a "demo" can be a screenshot/video walkthrough plus honest local setup instructions.

## Project Matrix

| Project | Runtime Reality | Best Public Demo | GitHub Pages? | Priority | Next Action |
| --- | --- | --- | --- | --- | --- |
| `ACME10-HE-RAGApp` / Knowledge Graph RAG Assistant | Full-stack app with React, FastAPI, OpenAI, FAISS, DBpedia, and large embedding/index artifacts. Backend is not continuously hosted. | Portfolio project page + demo video + README setup. | No. The portfolio `/rag/` page already acts as the static showcase. | P0 | Keep `/rag/` polished, link video/report/repo, and avoid promising a live backend. |
| `sentisync` | Chrome extension + Flask API + YouTube API key + ML artifacts + optional Docker/AWS. Backend is not continuously hosted. | README screenshots + short demo GIF/video showing extension flow. | Usually no. Optional static walkthrough page only if generated from docs. | P1 | Add/keep a clear demo video or GIF, screenshots of popup states, and a "backend must be running locally" note. |
| `codeprep-ai` | React/FastAPI app with Clerk, SQLite, Hugging Face model access, quota logic, and backend secrets. | README screenshots + demo video. Optionally deploy only if a safe mock/demo mode is added. | No for the full app. Maybe static docs only. | P1 | Add a "Demo Mode" plan: static screenshots now; live app only after mock backend or deployed backend exists. |
| `clearbill-ai` | Next.js RAG app with Astra DB, local embeddings, Hugging Face token, Puppeteer seeding, and sensitive-domain caveats. | README screenshots + architecture + explicit safety disclaimer. | No for live app. Optional static walkthrough if desired. | P1 | Keep screenshots strong; do not link a live app unless secrets, data, and safety constraints are production-ready. |
| `self-driving-car-simulation` | Local simulator + trained model artifacts + Socket.IO inference server. Not a web app. | README + demo GIF/video + release-hosted artifacts. | No. | P1 | Keep the GIF prominent; optionally add a longer YouTube clip of autonomous mode. |
| `facetrack` | React/FastAPI + SQLite + native `dlib`/`face_recognition` + webcam/image data privacy concerns. | README screenshots + demo GIF/video with synthetic/sample images. | No. | P2 | Add an explicit "Demo Data Only" note and a short GIF of upload/process/results. |
| `intellicrawl` | Terminal AI agent requiring Firecrawl and OpenAI API keys. Output can be static. | README + sanitized sample outputs. | Optional, but only for a static sample-output gallery. | P2 | Consider a static `examples/` viewer later; README is already enough for now. |
| `clarification-guided-reward-learning` | Research prototype with local Python visualizations and linked paper/poster/presentation/video. | README + research artifacts + demo video. | No. | P2 | Keep artifacts prominent; a portfolio research page would be more useful than GitHub Pages. |
| `ddpg-reimplementation` | Research/learning implementation with training scripts, archived plots, notebook analysis, and TensorFlow runtime. | README + plots + notebook/results artifacts. | Optional, but low priority. Static report page only if it adds value beyond README. | P3 | README/results are sufficient; avoid hosting a fake RL demo. |
| `latex-resume-template` | Static template repo with rendered PDFs and preview images. | README + preview images + rendered PDFs + Overleaf instructions. | Optional docs site, but not necessary. | P3 | Current README/docs are likely enough; a release/tag matters more than Pages. |
| `ethanvillalovoz.github.io` | Main portfolio website deployed on Vercel. | Live website. | No. GitHub Pages is not the deployment target. | P0 | Keep this as the hub for polished project narratives. |
| `ethanvillalovoz` profile README | GitHub profile surface. | Minimal profile README linking website/resume/LinkedIn. | No. | P0 | Keep concise and GitHub-native; avoid duplicating the portfolio. |

## Recommended Order

1. Keep the portfolio as the source of truth and ensure every high-value repo links back to it.
2. For `ACME10-HE-RAGApp`, keep improving the existing `/rag/` portfolio page instead of adding GitHub Pages.
3. Add demo GIFs or short videos for `sentisync`, `codeprep-ai`, `clearbill-ai`, `self-driving-car-simulation`, and `facetrack`.
4. For `intellicrawl`, consider a static sample-output gallery only after the README examples feel limiting.
5. Leave `ddpg-reimplementation`, `clarification-guided-reward-learning`, and `latex-resume-template` as README/artifact-first unless there is a specific reason to create a docs site.

## What Counts As Done

Each repo should let a visitor answer these within about one minute:

- What is this?
- What does it look like or output?
- What technical skills does it demonstrate?
- Can I run it locally?
- What dependencies, API keys, model files, or external services are required?
- Is there a screenshot, video, plot, sample output, paper, or report proving it exists?
- Is any live-demo limitation explained honestly?

## Near-Term Checklist

- [ ] Add a "Demo Strategy" note to the README of each high-value full-stack repo.
- [ ] Record or generate a short demo GIF/video for `sentisync`.
- [ ] Record or generate a short demo GIF/video for `codeprep-ai`.
- [ ] Record or generate a short demo GIF/video for `clearbill-ai`.
- [ ] Add or verify a polished autonomous-mode clip for `self-driving-car-simulation`.
- [ ] Add a synthetic/sample-data walkthrough for `facetrack`.
- [ ] Keep `/rag/` as the canonical public page for the capstone project.
