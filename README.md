# Sisypho Landing Page

A modern React-based landing page for Sisypho, an intelligent automation platform for businesses.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with beautiful gradients and animations
- **Component-Based**: Modular components for easy maintenance
- **Analytics Integration**: Google Analytics 4 and conversion tracking
- **Form Handling**: Waitlist signup with Formspree integration
- **Smooth Navigation**: React Router for seamless page transitions

## 📁 Project Structure

```
sisypho-landing/
├── public/                 # Static assets
│   ├── assets/            # Brand logos and images
│   ├── *.svg             # Icons and logos
│   └── *.mp4             # Demo videos
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCases.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── MemoPage.tsx
│   │   ├── AuthPage.tsx
│   │   ├── DevicePage.tsx
│   │   ├── PaymentSuccessPage.tsx
│   │   ├── PaymentCancelledPage.tsx
│   │   └── PrivacyPolicyPage.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useAnalytics.ts
│   │   └── useWaitlistForm.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── archive/              # Archived old static files
└── dist/                 # Built files (generated)
```

## 🛠️ Development

### Prerequisites
- Node.js 16+ (recommended: 18+)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Opens the development server at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing

## 🚀 Deployment

1. Run `npm run build` to create the production build
2. Upload the contents of the `dist/` folder to your web server
3. Configure your server to serve `index.html` for all routes (for client-side routing)

## 📱 Pages

- **Home** (`/`) - Main landing page with hero, features, and waitlist
- **Memo** (`/memo`) - Company memo from founders
- **Auth** (`/auth`) - Authentication success page
- **Device** (`/device`) - Device authorization page
- **Payment Success** (`/payment-success`) - Payment confirmation
- **Payment Cancelled** (`/payment-cancelled`) - Payment cancellation
- **Privacy Policy** (`/privacy-policy`) - Privacy policy page

## 🎨 Styling

The project uses a custom CSS approach with:
- CSS custom properties for theming
- Responsive design with mobile-first approach
- Modern gradients and glassmorphism effects
- Smooth animations and transitions

## 📊 Analytics

Integrated Google Analytics 4 with:
- Page view tracking
- Scroll depth tracking
- Form submission tracking
- Button click tracking
- Conversion tracking

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation links as needed

### Modifying Styles
- Global styles: `src/index.css`
- Component-specific styles: Use CSS classes in components

### Adding Analytics Events
- Use the `trackGA4Event` function from `src/hooks/useAnalytics.ts`
- Add tracking to button clicks, form submissions, etc.

## 📝 License

All rights reserved. © 2025 Sisypho