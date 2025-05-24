# Ethan Villalovoz Personal Website

A modern, professional personal website built with [Next.js](https://nextjs.org), designed for researchers, engineers, and professionals to showcase their work, research, and contact information. This site features:

- **Projects Page:** Card-based, responsive grid for technical projects with tags, features, status, images, and extra links (GitHub, Demo, etc.).
- **About Page:** Vertical timeline of experience, profile photo, current role, downloadable CV, and fun facts.
- **Contact Page:** Prominent contact buttons, copy-to-clipboard email, downloadable/displayed speaker bio, and professional headshot.

## Features
- Built with Next.js App Router and TypeScript
- Fully responsive and accessible
- Card-based project/research display
- Vertical timeline for experience
- Downloadable and displayed bio/CV
- Copy-to-clipboard email with feedback
- Easy to customize for your own use

---

## Getting Started (Local Development)

To run this website locally and make changes:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ethanvillalovoz/ethan-site-rebuild.git
   cd ethan-site-rebuild
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

5. **Make changes:**
   - Edit files in `src/app/` (e.g., `projects/page.tsx`, `about/page.tsx`, `contact/page.tsx`).
   - The site will auto-update as you save changes.

6. **Testing changes:**
   - Manually verify your changes in the browser.
   - (Optional) Add your own tests if desired.

---

## Using This as a Template

Want to use this site as a template for your own personal or research website?

1. **Fork or clone this repository.**
2. **Replace content:**
   - Update project, research, and about data in the respective files.
   - Replace images in `/public/images/` and documents in `/public/data/`.
   - Update your contact information in `src/app/contact/page.tsx`.
3. **Customize styles and layout as needed.**
4. **Deploy to Vercel or your preferred platform.**

---

## Credits
- Built by Ethan Villalovoz
- Inspired by modern academic and engineering portfolio sites

---

## License
This project is open source and available under the [MIT License](LICENSE).
