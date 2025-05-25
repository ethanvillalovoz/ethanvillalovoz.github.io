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
- Responsive navigation bar with a mobile-friendly hamburger menu

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

## Deploying to GitHub Pages (.github.io)

This repo is your playground for making edits. When you are ready to publish your changes to your public website:

1. **Build and export the static site:**
   ```bash
   npm run build
   # This will generate an 'out/' folder with your static site
   ```

2. **Copy the contents of the `out/` folder** to your `ethanvillalovoz.github.io` repository (replace old files if prompted).
   - You can do this manually, or with a command like:
     ```bash
     cp -r out/* ../ethanvillalovoz.github.io/
     ```
   - Make sure you are in the root of this repo when you run the command above, and that your .github.io repo is checked out one directory up.

3. **Commit and push in your .github.io repo:**
   ```bash
   cd ../ethanvillalovoz.github.io
   git add .
   git commit -m "Deploy updated static site"
   git push
   ```

4. **Your changes will be live at:**
   [https://ethanvillalovoz.github.io/](https://ethanvillalovoz.github.io/)

---

## Deploying to Vercel (Recommended)

This site is hosted on [Vercel](https://vercel.com), which provides seamless integration with Next.js and automatic deployments from your GitHub repository. If you want to deploy your own version:

1. **Push your code to GitHub.**
   - Make sure your latest changes are committed and pushed to a GitHub repository.

2. **Create a Vercel account:**
   - Go to [https://vercel.com/signup](https://vercel.com/signup) and sign up (you can use your GitHub account).

3. **Import your repository:**
   - Click "New Project" and select your GitHub repository.
   - Vercel will auto-detect your Next.js setup.

4. **Configure project settings (optional):**
   - You can set environment variables or custom build settings if needed.
   - The default settings work for most Next.js projects.

5. **Deploy:**
   - Click "Deploy" and Vercel will build and deploy your site.
   - After deployment, you’ll get a live URL (e.g., `https://your-site.vercel.app`).

6. **Set up a custom domain (optional):**
   - In your Vercel dashboard, go to your project’s "Domains" tab.
   - Add your custom domain and follow the instructions to update your DNS records.

7. **Automatic redeploys:**
   - Every time you push to your GitHub repository, Vercel will automatically rebuild and redeploy your site.

**Note:**  
Vercel is the recommended way to host Next.js sites, as it supports all Next.js features out of the box, including server-side rendering and API routes.

---

## Using This as a Template

Want to use this site as a template for your own personal or research website?

1. **Fork or clone this repository.**
2. **Replace content:**
   - Update project, research, and about data in the respective files.
   - Replace images in `/public/images/` and documents in `/public/data/`.
   - Update your contact information in `src/app/contact/page.tsx`.
3. **Customize styles and layout as needed.**
4. **Deploy to Vercel or your preferred platform, or use the static export method above for GitHub Pages.**

---

## Credits
- Built by Ethan Villalovoz
- Inspired by modern academic and engineering portfolio sites

---

## License
This project is open source and available under the [MIT License](LICENSE).
