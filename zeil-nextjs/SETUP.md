# Setup Instructions

## Quick Start

1. **Install Dependencies**
   - If you have PowerShell execution policy issues, run: `install.bat`
   - Or manually run: `npm install`

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## If you encounter PowerShell execution policy issues:

1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy RemoteSigned`
3. Type 'Y' to confirm
4. Then run: `npm install`

## Alternative Installation Methods:

### Using Command Prompt:
```cmd
npm install
npm run dev
```

### Using Git Bash:
```bash
npm install
npm run dev
```

## Project Structure

The project has been converted from your original HTML/CSS/JS website to a modern Next.js application with:

- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Component-based architecture**
- **Responsive design**
- **Smooth animations**
- **Modern development practices**

All your original assets (images, videos) have been preserved in the `public/assets/img/` directory.

## Features Preserved

✅ All original sections and content
✅ Responsive design
✅ Slide-out navigation menus
✅ Video background
✅ Scroll animations
✅ Contact form
✅ Social media links
✅ Loading screen
✅ Navigation bullets

## New Features Added

✅ TypeScript support
✅ Component reusability
✅ Better performance
✅ Modern development workflow
✅ Easy deployment options
✅ SEO optimization
✅ Image optimization

## Customization

- Edit content in individual component files in `src/components/`
- Modify styles in `src/app/globals.css`
- Add new sections by creating new components
- Update images in `public/assets/img/`

## Deployment

The project can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any hosting platform that supports Node.js

Run `npm run build` to create a production build. 