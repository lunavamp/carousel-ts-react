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
src/
├── assets/              # Images, fonts, and static files
│   ├── fonts/
│   └── img/
├── components/          # React components
│   ├── Arrow.tsx
│   ├── Carousel.tsx
│   ├── ReviewCard.tsx
│   └── Testimonials.tsx
├── data/                # Mock data (testimonials.ts)
├── styles/              # SCSS styles
│   └── scss/
│       └── Carousel.scss # Carousel-specific styles
├── App.tsx              # Main application entry
├── main.tsx             # ReactDOM render setup
└── vite-env.d.ts        # Vite environment types
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
