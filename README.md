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

## Sitemap & Robots.txt Regeneration (for SEO)

To keep your site SEO-friendly, you should regenerate the `sitemap.xml` and `robots.txt` files whenever you add, remove, or update pages or projects. This ensures search engines have the latest structure of your site.

1. **Regenerate sitemap and robots.txt:**
   ```bash
   npx next-sitemap
   ```

2. This will update the `public/sitemap.xml` and `public/robots.txt` files.

3. **Deployment:**
   - These static SEO files are placed in the `/public` directory and are automatically included by Vercel on deployment.

---

## Deploying to Vercel

This site is deployed exclusively on [Vercel](https://vercel.com), which provides seamless integration with Next.js and automatic deployments from your GitHub repository.

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
Vercel is the recommended and only supported way to host this Next.js site.

---

## Using This as a Template

Want to use this site as a template for your own personal or research website?

1. **Fork or clone this repository.**
2. **Replace content:**
   - Update project, research, and about data in the respective files.
   - Replace images in `/public/images/` and documents in `/public/data/`.
   - Update your contact information in `src/app/contact/page.tsx`.
3. **Customize styles and layout as needed.**
4. **Deploy to Vercel as described above.**

---

## Credits
- Built by Ethan Villalovoz
- Inspired by modern academic and engineering portfolio sites

---

## License
This project is open source and available under the [MIT License](LICENSE).
