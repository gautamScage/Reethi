# Reethigifts

A modern React application built with Vite, TypeScript, and regular CSS.

## 🚀 Features

- **React 19** - Latest React with new features
- **TypeScript** - Type-safe development
- **Vite** - Lightning fast build tool
- **Regular CSS** - Clean, maintainable CSS without framework dependencies
- **React Router v7** - Client-side routing
- **ESLint** - Code linting and formatting
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
Reethigifts/
├── src/
│   ├── components/
│   │   ├── layout/      # Layout components (Navigation)
│   │   └── sections/    # Page sections (HeroSection)
│   ├── assets/          # Static assets
│   ├── types/           # TypeScript type definitions
│   ├── constants/       # App constants
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles and utilities
├── public/              # Public assets
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd Reethigifts
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎨 CSS Architecture

This project uses regular CSS with a utility-first approach:

- **Global Styles**: Base reset and typography in `src/index.css`
- **Utility Classes**: Common layout and styling utilities
- **Component Styles**: Specific component styling
- **Responsive Design**: Mobile-first responsive breakpoints

### Key CSS Features

- Flexbox layouts
- CSS Grid where appropriate
- Custom properties for theming
- Smooth transitions and hover effects
- Mobile-responsive design

## 🔧 Configuration

### Path Aliases

The project uses TypeScript path aliases:
- `@/*` maps to `./src/*`

## 🌐 Deployment

To deploy this project:

1. Build the project:
   ```bash
   pnpm build
   ```

2. The `dist` folder contains the production build
3. Deploy the `dist` folder to your hosting platform

### Recommended Platforms

- **Vercel** - Zero-config deployment
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free hosting for public repos

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is private and proprietary.

---

Built with ❤️ using React, Vite, and TypeScript  
