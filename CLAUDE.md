# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for Sisypho, a no-code automation tool. The project consists of a single-page HTML website with:

- **index.html**: Main landing page with hero section, features, memo section, and CTA
- **styles.css**: Complete styling with modern design, gradients, and responsive layout
- **script.js**: JavaScript for smooth scrolling, Calendly integration, and scroll animations
- **sisypho_logo.png**: Company logo image

## Architecture

**Frontend Stack**: Vanilla HTML, CSS, and JavaScript (no build process or frameworks)

**Key Sections**:
- Hero section with conversational demo animation
- Features grid with hover effects
- Company memo section with founder story
- Call-to-action sections integrated with Calendly

**Design System**:
- Primary colors: #4f46e5 (indigo), #7c3aed (purple)
- Typography: DM Sans font family throughout
- Responsive design with mobile-first approach
- Gradient backgrounds and glassmorphism effects

## Development Commands

Since this is a static website, no build commands are required. Simply:

1. **Local Development**: Open `index.html` directly in a browser or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx live-server
   ```

2. **Testing**: Manual browser testing across different screen sizes

## Key Integrations

- **Calendly**: Demo buttons link to `https://calendly.com/saumik-13/sisypho-demo`
- **Google Fonts**: DM Sans and Inter fonts loaded from Google Fonts CDN
- **Contact Email**: `saumik@sisypho.com` for business inquiries

## File Structure Notes

- No package.json or build configuration - pure static site
- All assets are self-contained within the repository
- Logo image referenced in CSS but serves as brand identifier
- Responsive breakpoints at 768px and 480px