# F1 Hackathon - Next.js Website

This is a [Next.js](https://nextjs.org/) project converted from the HTML/CSS/JS version in the `statics` folder.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Main application directory (App Router)
  - `page.js` - Home page component
  - `layout.js` - Root layout with metadata and fonts
  - `globals.css` - Global styles (includes all CSS from original project)
  - `components/` - React components
    - `Navigation.js` - Navigation bar with scroll animation
    - `Hero.js` - Hero section
    - `About.js` - About section with animated stats
    - `Timeline.js` - Interactive horizontal scrolling timeline
    - `Sponsors.js` - Sponsors section
    - `Register.js` - Registration form
    - `Footer.js` - Footer section

- `public/` - Static assets
  - `assets/` - Images (copy your assets here)

## Important Setup Steps

### 1. Copy Assets
Copy the following images from your original `assets` folder to `public/assets/`:
- `CAR.png`
- `FH2025 Black Logo nav.png`

### 2. Install Tailwind CSS Plugins
The project uses Tailwind CSS with plugins. They are already configured in `package.json`:
- `@tailwindcss/forms`
- `@tailwindcss/typography`

Run `npm install` to install all dependencies including these plugins.

## Features Converted

✅ Responsive navigation with hamburger menu
✅ Animated car in navigation that moves on scroll
✅ Hero section with animated elements
✅ About section with counter animations
✅ Horizontal scrolling timeline with car animation
✅ Sponsors section
✅ Registration form
✅ Footer
✅ All CSS styling from original
✅ All JavaScript interactivity using React hooks

## Technologies Used

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **Next/Image** - Optimized image component
- **Next/Font** - Optimized font loading (Orbitron & Roboto)

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js/)
