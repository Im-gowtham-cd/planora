# Planora - AI Project Architect for CS Students

Planora is a SaaS platform that generates structured, domain-specific software project ideas for Computer Science students using Google Gemini AI. It provides full blueprints, roadmaps, and market potential scores.

## 🚀 Features
- **Domain-Based Generation**: Specific logic for AI, Web, Mobile, etc.
- **Skill-Level Customization**: Freshers get simpler stacks and learning paths.
- **Structured Blueprints**: 11-point JSON structure including differentiation and roadmap.
- **Market Scoring**: AI-driven analysis of demand, difficulty, and resume impact.
- **Freemium Model**: 5 ideas per week limit with usage tracking.
- **Save & Manage**: Save your favorite blueprints.

## 🛠 Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication
- **AI**: Google Gemini API

## 📦 Prerequisites
- Node.js installed (v16+)
- A Firebase Project
- A Google Cloud Project with Gemini API enabled

## 🔧 Setup Guide

### 1. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project "Planora".
3. **Authentication**: Enable "Email/Password" and "Google" providers.
4. **Firestore**: Create a database in "Production mode".
5. **Admin SDK**:
    - Go to Project Settings -> Service Accounts.
    - Click "Generate new private key".
    - Save the JSON file. You will need the `private_key`, `client_email`, and `project_id` from this file.
6. **Client Config**:
    - Project Settings -> General -> Add App (Web).
    - Copy the `firebaseConfig` object values.

### 2. Gemini API Setup
1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Get an API Key.

### 3. Environment Variables
Create `.env` files in both folders.

**Backend** (`/server/.env`):
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
# Note: Put the private key in quotes and handle newlines if copying directly, 
# or use the JSON file path if you prefer (code supports env var string)
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
```

**Frontend** (`/client/.env`):
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Installation & Running

**Backend**:
```bash
cd server
npm install
npm run dev
# Server runs on http://localhost:5000
```

**Frontend**:
```bash
cd client
npm install
npm run dev
# Client runs on http://localhost:5173
```

## 🧪 Testing
1. **Register**: Go to `http://localhost:5173/auth` and create an account.
2. **Dashboard**: You should see 0/5 usage.
3. **Generate**: Click "New Idea", select "Web Development" + "Beginner".
4. **Result**: Verify you get a structured blueprint.
5. **Fresher Mode**: Try "Fresher" level to see the "Learning Path" section.
6. **Save**: Click "Save Blueprint" and check "Saved" page.


# Sakura Theme Redesign — Planora

Full UI/UX overhaul to a **Sakura (cherry blossom)** aesthetic with scroll-jacked horizontal animation, parallax effects, floating petal particles, upgraded typography, and rich icons throughout the app.

---

## Color Palette & Typography

### Sakura Colors
| Token | Value | Usage |
|---|---|---|
| `--sakura-petal` | `#FFB7C5` | Primary accents, buttons |
| `--sakura-deep` | `#C0576B` | Active states, hover emphasis |
| `--sakura-blush` | `#FDE8EE` | Card backgrounds |
| `--sakura-mist` | `#FFF0F5` | Page background |
| `--sakura-bark` | `#4A2030` | Headlines, dark text |
| `--sakura-leaf` | `#7B9E6B` | Success states / accent |
| `--sakura-sky` | `#F9E8F0` | Soft section fills |
| `--glass-sakura` | `rgba(255,183,197,0.15)` | Glass card backgrounds |

### Fonts
- **Display / Hero**: `Cormorant Garamond` (serif, elegant — imported from Google Fonts)
- **Body / UI**: `DM Sans` (clean modern sans-serif)
- **Mono**: `JetBrains Mono` (code blocks)

---

## Proposed Changes

### 1. Global Design System

#### [MODIFY] `index.css`
- Replace entire CSS variable system with Sakura palette
- Add `@import` for `Cormorant Garamond`, `DM Sans`, `JetBrains Mono`
- Add floating sakura petal `@keyframes` animation (drift + rotate)
- Add `@keyframes sakuraFall` for background petal particles
- Add horizontal scroll hijack CSS (`.scroll-section`, `.h-container`, `.h-panel`)
- Add parallax utility classes
- Update all utility classes (`.btn-primary`, `.glass-card`, `.input-field`, etc.)
- Add scrollbar in sakura pink tones

---

### 2. Navbar

#### [MODIFY] `Navbar.jsx`
- Background: `rgba(255,240,245,0.85)` blur glass with pink border
- Logo: Cormorant Garamond font + cherry blossom `🌸` icon / `Flower` lucide icon
- Nav links: sakura pink hover underline animation
- Active button: gradient `#FFB7C5 → #C0576B`
- User avatar: sakura pink background
- Mobile menu: sakura blush background

---

### 3. Landing Page (Major Overhaul)

#### [MODIFY] `Landing.jsx`
**Structure:**
1. **Hero Section** — Full viewport with parallax floating petal canvas, Japanese-style large Cormorant headline, sakura gradient CTA button
2. **Features Horizontal Scroll Section** — Scroll-hijacked horizontal panel animation (adapted from provided code) showing 4 feature panels, each with a full-sakura-card design
3. **Social Proof / Stats** — Parallax fade-in section
4. **Footer** — Sakura-themed

**Animations Added:**
- Floating petal canvas (JS-generated SVG petals that drift across hero)
- Horizontal hijack on features (scroll → translateX)
- Parallax depth on hero text elements (different scroll speeds)
- Entrance animations via Framer Motion

---

### 4. Dashboard

#### [MODIFY] `Dashboard.jsx`
- Page background: `--sakura-mist` gradient
- Stat cards: sakura blush glass with pink border glow
- Quick action bar: sakura gradient (pink → deep rose) instead of black
- History items: hover state with pink left-border accent
- Badges: sakura tones
- Progress bar: animated sakura pink fill

---

### 5. GenerateIdea

#### [MODIFY] `GenerateIdea.jsx`
- Form card: glassmorphism with `--glass-sakura` bg + pink border
- Option buttons: active state → sakura gradient
- Loading spinner: sakura pink border
- Blueprint result cards: sakura-card style
- Chat bubbles: user → sakura deep, AI → sakura blush
- Code blocks: dark rose tint background

---

### 6. SavedIdeas

#### [MODIFY] `SavedIdeas.jsx`
- Page background: `--sakura-mist`
- Idea cards: sakura blush with pink border on hover
- Domain badges: sakura pink
- Empty state: cherry blossom illustration via SVG inline
- Search bar: sakura-styled with pink focus ring

---

## Animations Summary

| Animation | Where | Technique |
|---|---|---|
| **Horizontal Scroll Hijack** | Landing Features section | `useEffect` scroll listener + `translateX` |
| **Sakura Petal Fall** | Landing Hero background | Canvas/CSS `@keyframes` absolute positioned petals |
| **Parallax Depth** | Landing Hero text layers | `scroll` → `translateY` at different rates |
| **Entrance Fade-Up** | All pages | Framer Motion `initial/animate` |
| **Float** | Feature icons | CSS `@keyframes float` |
| **Glow Pulse** | CTA buttons | CSS `@keyframes` box-shadow pulse |
| **Card Lift** | All cards hover | CSS `transform: translateY(-6px)` |

---

## Verification Plan

### Automated
- `npm run dev` in `/client` — confirm dev server starts
- Check console for import errors

### Manual Visual Check
- Landing: hero parallax, petal animation, horizontal scroll features
- Dashboard: sakura stat cards, pink progress bar
- GenerateIdea: sakura option buttons, glassmorphism form card
- SavedIdeas: card hover effects
- Navbar: glass blur + sakura styling
- Mobile responsive check (< 768px)
