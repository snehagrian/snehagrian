# Sneha Grian Joshua - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Performance Optimized**: Built with Next.js 14 for optimal performance and SEO
- **Type-Safe**: Written in TypeScript for better code quality and developer experience
- **Scalable Architecture**: Component-based structure for easy maintenance and scaling
- **Typing Animation**: Dynamic role typing effect in hero section
- **Scroll Progress**: Visual indicator showing page scroll progress
- **Back to Top**: Smooth scroll-to-top button for easy navigation
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Accessibility**: Enhanced focus states and keyboard navigation
- **Resume Download**: One-click resume download functionality
- **Achievement Metrics**: Showcase key accomplishments with animated statistics

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Google Fonts (Inter)

## 📁 Project Structure

```
SnehaGrian/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Work experience
│   ├── Education.tsx        # Education details
│   ├── Skills.tsx           # Technical skills
│   ├── Projects.tsx         # Academic projects
│   ├── Contact.tsx          # Contact form
│   └── Section.tsx          # Reusable section wrapper
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/prabakaran/Downloads/SnehaGrian
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information

Edit the content in the following components:
- **Hero.tsx**: Name and title
- **About.tsx**: Professional summary
- **Experience.tsx**: Work experience
- **Education.tsx**: Educational background
- **Skills.tsx**: Technical skills
- **Projects.tsx**: Academic/personal projects
- **Contact.tsx**: Contact information

### Modify Colors

Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/Header.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The build output will be in the `.next` directory.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Future Enhancements

- [ ] Blog section with MDX support
- [ ] CMS integration (Sanity/Contentful)
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Resume download functionality
- [ ] Project detail pages
- [ ] Testimonials section
- [ ] Newsletter subscription

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sneha Grian Joshua**
- Email: snehagrianjsk@gmail.com
- LinkedIn: [linkedin.com/in/sneha-grian](https://linkedin.com/in/sneha-grian)

---

Built with ❤️ using Next.js and Tailwind CSS
# snehagrian
# snehagrian
