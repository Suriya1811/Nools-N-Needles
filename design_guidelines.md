# Nools'N'Needles Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (Etsy + Modern E-commerce)
Drawing inspiration from handmade marketplaces like Etsy's warm, approachable aesthetic combined with contemporary e-commerce patterns from Shopify stores. The design emphasizes the handcrafted, artisanal nature of woollen flowers while maintaining modern usability standards.

**Key Design Principles:**
- Soft, inviting aesthetic that reflects the handmade nature of products
- Clean, uncluttered layouts that let products shine
- Warm, personal touches that build trust and connection
- Tactile visual language suggesting the texture of woollen crafts

---

## Color Palette

### Light Mode (Primary)
- **Primary Pink:** 340 65% 88% - Soft rose for primary actions, headers
- **Cream Background:** 40 40% 96% - Warm off-white base
- **Sage Green:** 140 35% 75% - Muted green for accents, success states
- **Darker Pink:** 340 70% 65% - Hover states, emphasis
- **Soft Peach:** 20 75% 85% - Secondary accent, warm highlights
- **Text Dark:** 340 15% 25% - Warm charcoal for body text
- **Text Medium:** 340 10% 45% - Secondary text, descriptions

### Dark Mode
- **Background:** 340 12% 12% - Deep warm gray
- **Surface:** 340 10% 18% - Elevated surfaces
- **Primary Pink:** 340 55% 75% - Lightened primary
- **Sage Green:** 140 25% 65% - Adjusted green
- **Text Light:** 40 30% 95% - Warm white for text

---

## Typography

**Font Families:**
- **Headings:** 'Playfair Display' (serif) - Elegant, handcrafted feel
- **Body:** 'Inter' (sans-serif) - Clean, readable
- **Accent/Price:** 'DM Sans' (sans-serif) - Modern, friendly

**Type Scale:**
- Hero: text-5xl md:text-7xl (60-72px), font-bold
- H1: text-4xl md:text-5xl (48px), font-semibold
- H2: text-3xl md:text-4xl (36px), font-semibold
- H3: text-2xl md:text-3xl (30px), font-medium
- Body: text-base md:text-lg (16-18px), font-normal
- Small: text-sm (14px), font-normal
- Price: text-xl md:text-2xl, font-bold

---

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 md:p-8
- Section spacing: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Element margins: mb-4, mb-6, mb-8

**Container Widths:**
- Hero sections: Full width with max-w-7xl inner container
- Content sections: max-w-6xl mx-auto
- Product grid: max-w-7xl mx-auto
- Text content: max-w-3xl for optimal reading

**Grid Systems:**
- Product grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Footer: grid-cols-1 md:grid-cols-3

---

## Component Library

### Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo left, nav center/right with Home, Products, About, Contact
- Mobile: Hamburger menu (☰) with slide-in drawer
- Cart icon (if future implementation) and WhatsApp quick-contact button

### Hero Section (Home Page)
- Full-width hero with gradient overlay (from transparent to cream)
- Large hero image showing bouquet arrangement
- Centered content: Brand name, tagline, dual CTAs
- Floating decorative elements (subtle woollen flower illustrations)

### Product Cards
- Rounded corners (rounded-2xl), soft shadow (shadow-md hover:shadow-xl)
- Image container: aspect-square with object-cover
- Hover: Slight scale (scale-105), elevated shadow
- Content: Product name, price (₹), brief description
- "View Details" button with arrow icon

### Category Filters
- Pill-style buttons (rounded-full) with active state
- Categories: All, Single Flowers, Bouquets, Accessories
- Smooth transition when filtering products

### Contact Integration
- WhatsApp floating action button (bottom-right, z-50)
- Email link with envelope icon
- Contact form with pastel-themed inputs (focus:ring-pink-300)

### Footer
- Three columns: About, Quick Links, Contact
- Social media icons (Instagram, Facebook, WhatsApp)
- Newsletter signup with pastel input field
- Copyright and handmade badge

### Buttons
- Primary: Pink background, cream text, rounded-full, px-8 py-3
- Secondary: Cream background, pink border, pink text
- Outline on images: Backdrop-blur, white/10 bg, white text, no custom hover (built-in)
- Hover: Subtle darkening, slight lift (translate-y-[-2px])

### Forms (Contact Page)
- Input fields: rounded-lg, border-pink-200, focus:border-pink-400
- Textarea: min-h-32, rounded-lg
- Labels: text-sm, text-dark, mb-2
- Submit button: Full-width on mobile, inline on desktop

### Add-ons Section
- Compact cards showing optional extras
- Checkbox-style selection (visual only, frontend)
- Clear pricing displayed next to each add-on
- Grouped in 2x2 grid on desktop, stacked on mobile

---

## Images

### Required Images with Placement:

**Hero Section (Home):**
- Large hero image (1920x1080): Beautiful arrangement of woollen bouquet with soft natural lighting, pink and cream flowers prominently featured, shallow depth of field
- Position: Full-width background with gradient overlay

**Product Images (15 total):**
- Each product needs square image (800x800): Clean white/cream background, centered product shot, soft shadows
- Single Rose, Tulip, Sunflower, Daisy, Hibiscus, Lavender Stick, Cherry Blossom set, Mini Rose (individual shots)
- Flower Keychain, Hair Clip/Brooch (lifestyle shots showing use)
- Mini, Medium, Large Bouquets (styled with wrapping visible)
- Flower Pot Decor (in decorative jar/pot)
- Customized Bouquet (with visible name tag)

**About Page:**
- Craft process image (1200x800): Hands creating woollen flower, tools visible, warm lighting
- Workshop/studio image (1200x600): Workspace with yarn, flowers in progress

**Decorative Elements:**
- Subtle woollen flower illustrations as page accents
- Texture overlays suggesting fabric/yarn (low opacity)

---

## Animations

**Minimal, purposeful animations:**
- Page transitions: Smooth fade-in (300ms)
- Product card hover: Scale and shadow (200ms ease-out)
- Filter selection: Smooth content fade-in (400ms)
- Scroll reveal: Subtle slide-up for sections (intersection observer)
- Button press: Gentle scale-down (150ms)
- Mobile menu: Slide-in from right (300ms ease-in-out)

**NO:** Excessive parallax, auto-playing carousels, or distracting motion