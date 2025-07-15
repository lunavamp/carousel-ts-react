# Testimonial Carousel

A modular React testimonial carousel featuring:

* **Responsive design**: Displays 1 slide on mobile and 3 slides on desktop
* **Keyboard navigation**: Navigate slides using ← and → keys
* **High reusability**: Works with any card component

---

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-org/testimonial-carousel.git
   cd testimonial-carousel
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Start the development server:**

   ```bash
   npm start
   ```
4. **Open in your browser:**

   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure

```plain
├── public/
│   └── index.html            # Static HTML template
├── src/
│   ├── assets/               # Fonts, images, icons
│   │   ├── fonts/
│   │   ├── img/
│   │   └── react.svg
│   ├── components/           # Core carousel pieces
│   │   ├── Arrow.tsx         # Prev/Next arrow buttons
│   │   ├── Carousel.tsx      # Carousel logic & layout
│   │   └── Dots.tsx          # Pagination dots
│   ├── styles/               # SCSS styles
│   │   └── scss/
│   │       └── Carousel.scss # Carousel-specific styles
│   ├── ReviewCard.tsx        # Testimonial card component
│   ├── Testimonials.tsx      # Section wrapper & data import
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # ReactDOM render entry point
│   └── vite-env.d.ts         # Vite environment types
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Usage

Import and use the carousel with any data array and custom card renderer:

```tsx
import React from "react";
import { Carousel } from "./components/Carousel";
import { ReviewCard, Review } from "./components/ReviewCard";
import { testimonials } from "./data/testimonials";

export const TestimonialsSection: React.FC = () => (
  <section>
    <h1>Voices of Success</h1>
    <Carousel items={testimonials}>
      {(review: Review) => <ReviewCard review={review} />}
    </Carousel>
  </section>
);
```

* **items**: An array of any type `T`
* **children**: A render prop that renders a single slide from an item

---




 © 2025
