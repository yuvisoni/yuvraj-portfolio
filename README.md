# Yuvraj Soni — Personal Developer Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS and Framer Motion. Designed with a premium dark theme featuring a black and purple visual identity.

## About

This portfolio showcases my journey as a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Generative AI and Software Development. It highlights my projects, technical skills, certifications and professional interests.

## Features

- **Dark Purple Theme** — Deep black and charcoal backgrounds with purple, violet and lavender accents
- **Responsive Design** — Optimized for desktop, tablet and mobile devices
- **Animated Developer Avatar** — Custom SVG illustration with floating tech badges
- **Glassmorphism UI** — Subtle frosted-glass card effects throughout
- **Smooth Animations** — Scroll-triggered entrance animations and hover effects powered by Framer Motion
- **Sticky Navigation** — Glassmorphism navbar with smooth scrolling and active section highlighting
- **Mobile Navigation** — Animated hamburger menu for smaller screens
- **Project Showcase** — Five featured projects with detail modals, GitHub links and live demo buttons
- **Skills Section** — Categorized skill groups (Programming, AI/ML, Web Development, Core CS, Soft Skills)
- **Certifications** — Professional certificates with external verification links
- **Education** — Academic status display
- **Contact Section** — Email, GitHub and LinkedIn with functional links
- **Downloadable Resume** — PDF resume download button in the hero section
- **SEO Optimized** — Proper metadata, Open Graph tags and semantic HTML

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [React Icons](https://react-icons.github.io/react-icons/) | Technology and social icons |
| [Lucide React](https://lucide.dev/) | UI icons |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode support |

## Project Structure

```
├── app/
│   ├── globals.css              # Global styles, design tokens, animations
│   ├── layout.tsx               # Root layout with metadata and fonts
│   └── (home)/
│       ├── page.tsx             # Main portfolio page
│       └── components/
│           ├── Navbar.tsx       # Sticky navigation with mobile menu
│           ├── HeroSection.tsx  # Hero with name, headline and CTA buttons
│           ├── DeveloperAvatar.tsx # SVG illustrated avatar
│           ├── AboutSection.tsx # Professional introduction
│           ├── Skills.tsx       # Categorized skill groups
│           ├── Projects.tsx     # Project cards with detail modals
│           ├── Certifications.tsx # Certificates and education
│           ├── Contact.tsx      # Contact information and links
│           ├── Footer.tsx       # Footer with social links
│           └── Title.tsx        # Reusable section title component
├── components/
│   ├── theme-provider.tsx       # next-themes wrapper
│   └── ui/
│       ├── card-hover-effect.tsx     # Animated hover grid
│       ├── direction-aware-hover.tsx # Mouse-direction image hover
│       └── moving-border.tsx         # Animated border button
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
├── public/
│   ├── favicon.ico
│   └── Yuvraj_Soni_Resume.pdf   # Downloadable resume
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yuvisoni/New-Portfolio.git

# Navigate to the project directory
cd New-Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Contact

- **Email** — [yuvisoni2005@gmail.com](mailto:yuvisoni2005@gmail.com)
- **GitHub** — [github.com/yuvisoni](https://github.com/yuvisoni)
- **LinkedIn** — [linkedin.com/in/yuvraj-soni-328794384](https://www.linkedin.com/in/yuvraj-soni-328794384)

## License

This project is open source and available for personal use and reference.

---

Built by **Yuvraj Soni** — 2nd Year Computer Science Engineering Student
