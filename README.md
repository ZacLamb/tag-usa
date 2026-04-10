# TAG USA Gymnastics & Trampoline — Website

React + TypeScript + Vite website for TAG USA Gymnastics in Weston, FL.

## Tech Stack
- React 18
- TypeScript
- Vite
- React Router DOM v6
- Google Fonts (Barlow Condensed + Barlow)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Sticky nav with dropdowns + mobile menu
│   ├── Footer.tsx       # Footer with hours, newsletter, review CTA
│   └── PageHero.tsx     # Shared hero banner for inner pages
├── pages/
│   ├── Home.tsx         # Full homepage
│   ├── Classes.tsx      # All classes grid
│   ├── Camps.tsx        # Sports camps
│   ├── Aftercare.tsx    # Afterschool shuttle pickup
│   ├── Teams.tsx        # Competitive teams (dynamic via URL param)
│   ├── TheGym.tsx       # About / facility / coaches
│   ├── BirthdayParties.tsx
│   ├── OpenGym.tsx
│   ├── Gallery.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx      # Contact form with validation
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Router setup
├── constants.ts         # Color palette
├── index.css            # Global styles + responsive
└── main.tsx             # Entry point
```

## Pages / Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/classes` | All Classes |
| `/classes/camps` | Sports Camps |
| `/classes/aftercare` | Afterschool Aftercare |
| `/teams/:team` | Teams (jo-teams, xcel, elite, power-tumbling, boys-preteam) |
| `/the-gym/:sub` | The Gym (about, facility, coaches) |
| `/birthday-parties` | Birthday Parties |
| `/open-gym` | Open Gym |
| `/gallery` | Gallery |
| `/blog` | Blog |
| `/contact` | Contact |

## Deploying to Netlify

This repo includes a `netlify.toml` — just connect your GitHub repo in Netlify and it will auto-deploy on every push.

Build command: `npm run build`  
Publish directory: `dist`

The `[[redirects]]` rule in `netlify.toml` ensures React Router works correctly on page refresh.

## Customizing

- **Colors** — edit `src/constants.ts`
- **Phone number** — find/replace `954-384-9191` and `9543849191`
- **Hours** — edit the `hours` array in `src/components/Footer.tsx`
- **Photos** — replace the placeholder divs in each page with `<img>` tags pointing to real photos
