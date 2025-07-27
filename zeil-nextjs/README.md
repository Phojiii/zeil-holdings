# Zeil Holdings - Next.js Website

A modern, responsive website for Zeil Holdings built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Scroll animations and reveal effects
- **Interactive Navigation**: Slide-out menus and bullet navigation
- **Video Background**: Hero section with video background
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Optimized images and code splitting

## Project Structure

```
zeil-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation component
│   │   ├── HeroSection.tsx     # Hero section
│   │   ├── DivisionsSection.tsx # Divisions section
│   │   ├── HowWeWorkSection.tsx # How we work section
│   │   ├── AboutSection.tsx    # About section
│   │   ├── ContactSection.tsx  # Contact section
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Bullets.tsx         # Navigation bullets
│   │   └── Loader.tsx          # Loading screen
│   └── hooks/
│       └── useScrollAnimation.ts # Custom scroll hook
├── public/
│   └── assets/
│       └── img/                # All images and videos
└── package.json
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Font Awesome** - Icons

## Sections

1. **Hero Section** - Video background with main message
2. **Our Divisions** - Four main business divisions
3. **How We Work** - Company methodology
4. **About** - Company information
5. **Contact** - Contact form and information
6. **Footer** - Links and social media

## Customization

- Update content in individual component files
- Modify styles in `globals.css`
- Add new sections by creating new components
- Update images in `public/assets/img/`

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
```

## License

© 2025 ZEIL Holdings. All rights reserved. 