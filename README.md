# Growthwebs Agency Homepage

A high-fidelity, interactive prototype for the Growthwebs agency homepage built with Next.js 15+, featuring a dark mode, futuristic design inspired by fin.ai.

## 🚀 Features

- **Next.js 15+ with App Router** - Modern React framework with latest features
- **Three.js Background** - Abstract, generative particle system with mouse interaction
- **GSAP Animations** - Smooth scroll-triggered animations and micro-interactions
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Responsive Design** - Mobile-first approach with elegant desktop experience
- **TypeScript** - Full type safety and better development experience

## 🎨 Design System

- **Color Palette**: Dark theme with #0d0d1e background and #6bcaf8 accent
- **Typography**: Plus Jakarta Sans font family
- **Layout**: Single-column, scrollytelling experience
- **Aesthetic**: Minimalist, futuristic, and extremely elegant

## 🛠️ Tech Stack

- **Framework**: Next.js 15+
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animations**: GSAP with ScrollTrigger
- **Language**: TypeScript
- **Font**: Plus Jakarta Sans (Google Fonts)

## 📁 Project Structure

```
growthwebs-agency/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ApproachSection.tsx
│   │   │   ├── FeaturedWorkSection.tsx
│   │   │   └── FinalCTASection.tsx
│   │   ├── ui/
│   │   │   ├── AnimatedButton.tsx
│   │   │   └── ParticleBackground.tsx
│   │   └── providers/
│   │       └── AnimationProvider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd growthwebs-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### Hero Section
- Full-screen hero with Three.js particle background
- Animated headline with text glow effect
- Call-to-action button with hover animations

### Trust Bar
- Company logos (Compass, LaHaus)
- Subtle branding elements

### Approach Section
- Three value propositions with icons
- Staggered animations on scroll

### Featured Work
- Project showcases with 3D magnetic tilt effect
- Interactive hover states powered by GSAP

### Final CTA
- Conversion-focused call-to-action
- Statistics and social proof

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:
```typescript
colors: {
  primary: {
    background: '#0d0d1e',
    text: '#f7f7f7',
  },
  accent: {
    glow: '#6bcaf8',
  }
}
```

### Animations
Modify GSAP animations in `AnimationProvider.tsx`:
```typescript
gsap.to(element, {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power2.out'
})
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimised for all screen sizes

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Component-based architecture

### Performance
- Lazy loading for components
- Optimised Three.js rendering
- Efficient GSAP animations
- Minimal bundle size

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support, contact the development team.

---

Built with ❤️ by the Growthwebs team
