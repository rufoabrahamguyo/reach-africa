# REACH AFRICA Website

A modern, responsive brand website for **REACH AFRICA** (Resilience and Economic Attainment for Community and Habitat in Africa), built with HTML5, CSS3, and Vanilla JavaScript.

## Overview

REACH AFRICA is a registered non-profit, faith-inspired community development organization committed to promoting sustainable development, resilience, and improved livelihoods among vulnerable communities in Kenya and across Africa. This website presents the organization's vision, mission, values, strategic objectives, program pillars, and theory of change in an engaging, accessible format.

## File Structure

```
reach-afric/
├── index.html              # Home page (hero, vision/mission, values)
├── about.html              # Background, governance, geographic presence
├── our-work.html           # Strategic objectives, program pillars
├── theory-of-change.html   # Theory of change flow
├── css/
│   ├── style.css           # Design system, base styles, components
│   ├── animations.css      # Keyframe and scroll animations
│   └── responsive.css      # Breakpoints and mobile layout
├── js/
│   ├── main.js             # Mobile menu, sticky nav, active nav, pillar expand
│   ├── counters.js         # Hero stats counter animation
│   └── animations.js       # Scroll-triggered fade-in
├── assets/
│   ├── images/
│   │   └── placeholder.svg # Placeholder for hero and content images
│   └── icons/              # Optional: logo.svg, social-icons.svg
└── README.md
```

## Design System

- **Primary:** `#1D5E6F` (teal)  
- **Secondary:** `#C96E4B` (terracotta)  
- **Accent:** `#E5A447` (gold)  
- **Fonts:** Montserrat (headings), Open Sans (body)

Spacing, shadows, radius, and transitions are defined as CSS custom properties in `css/style.css`.

## Features

- **Responsive layout** – Mobile-first breakpoints at 480px, 768px, 1024px  
- **Accessibility** – Semantic HTML, ARIA labels, keyboard navigation, focus indicators  
- **Animations** – Hero fade-in, counter animation, scroll-triggered fade for cards and timeline  
- **Interactive pillars** – Expand/collapse for program pillar details on Our Work page  
- **Sticky header** – Navigation stays visible on scroll  

## Running the Site

1. Open `index.html` in a browser, or  
2. Serve the folder with a local server (e.g. `npx serve .` or Python `http.server`) to avoid CORS with fonts/assets.

## Replacing Placeholder Images

Replace `assets/images/placeholder.svg` or add real assets:

- `hero-bg.jpg` – Hero background (update `index.html` hero `img` src)
- `isiolo-landscape.jpg`, `community-meeting.jpg` – About page collage
- Add further images as needed and update paths in the HTML.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid, Flexbox, and vanilla ES6 JavaScript.

## Credits

© 2026 REACH AFRICA. Website powered by Rufotex Technologies Ltd.
