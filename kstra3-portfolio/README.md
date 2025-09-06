# kstra3 Portfolio Website

A modern, professional, and visually stunning personal portfolio website built with React, TypeScript, and TailwindCSS.

## ✨ Features

- **Modern Design**: Sleek dark mode with gradient accents and glass morphism effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Elements**: Hover effects, animated icons, and smooth transitions
- **Theme Toggle**: Dark/light mode switching capability
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Clean code structure and semantic HTML

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Poppins, Fira Code (Google Fonts)

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing section with animated background
│   ├── About.tsx         # Bio, skills, and tech stack
│   ├── Projects.tsx      # Featured projects showcase
│   ├── Resume.tsx        # Experience timeline and education
│   ├── Contact.tsx       # Contact form and information
│   ├── Footer.tsx        # Footer with social links
│   ├── Navbar.tsx        # Navigation header
│   └── ThemeToggle.tsx   # Dark/light mode toggle
├── App.tsx               # Main application component
├── index.css             # Global styles and Tailwind imports
└── index.tsx             # Application entry point
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Accent**: Green gradient (#22c55e to #16a34a)
- **Dark**: Dark gray palette (#0f172a to #334155)
- **Text**: White and gray variations

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (paragraphs and UI)
- **Code**: Fira Code (monospace)

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Glass morphism with hover animations
- **Forms**: Styled inputs with focus states
- **Timeline**: Animated experience timeline

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kstra3/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, tagline, and bio
- `src/components/About.tsx` - Skills and tech stack
- `src/components/Projects.tsx` - Project portfolio
- `src/components/Resume.tsx` - Experience and education
- `src/components/Contact.tsx` - Contact information

### Styling
Modify `src/index.css` and `tailwind.config.js` to customize:
- Color scheme
- Typography
- Component styles
- Animations

### Content
- Replace placeholder project data with real projects
- Update social media links
- Add your actual resume/CV
- Customize the contact form endpoint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The app can be deployed to any static hosting service that supports React applications.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: hello@kstra3.dev
- **GitHub**: [@kstra3](https://github.com/kstra3)
- **LinkedIn**: [kstra3](https://linkedin.com/in/kstra3)

---

Made with ❤️ and lots of ☕ by kstra3