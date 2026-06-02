# StreamVerse - OTT Subscription Marketplace

A modern, production-ready OTT (Over-The-Top) Subscription Marketplace web application built with React, Redux Toolkit, React Router DOM, and Vite.

## 🎬 Project Overview

StreamVerse is a comprehensive entertainment platform that allows users to:
- Browse 25+ OTT platforms organized by categories (Video, Anime, Sports, Music, Regional)
- View platform details with movies organized by language and genre
- Buy individual movies or subscribe to full platform plans
- Manage cart, checkout, and purchase history
- Access a modern dark-themed UI with responsive design

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Dev server runs at: **http://localhost:5175/**

## ✨ Features

### Core Functionality
- ✅ 25+ OTT platforms across 5 categories
- ✅ 40+ movies with language & genre filtering
- ✅ Full shopping cart management
- ✅ Checkout & order history
- ✅ Subscription plan selection
- ✅ User purchase history
- ✅ Responsive dark theme UI
- ✅ Mobile-optimized design

### Technologies
- React 19 (Vite)
- Redux Toolkit for state management
- React Router DOM for routing
- Plain CSS with modern design patterns
- Responsive Grid & Flexbox layouts

## 📁 Project Structure

```
App/src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── PlatformCard.jsx
│   ├── MovieCard.jsx
│   ├── LanguageFilter.jsx
│   └── GenreSection.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Platform.jsx
│   ├── MovieDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Orders.jsx
│   ├── SubscriptionPlans.jsx
│   └── MyPurchases.jsx
├── redux/              # State management
│   ├── store.js
│   ├── cartSlice.js
│   └── userSlice.js
├── data/               # Mock data
│   ├── platforms.js
│   ├── movies.js
│   └── subscriptionPlans.js
└── styles/             # CSS files for all components
```

## 🎯 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Browse platforms by category |
| `/platform/:platformId` | Platform | View platform details, movies by language/genre |
| `/movie/:id` | MovieDetails | Full movie information |
| `/cart` | Cart | Shopping cart management |
| `/checkout` | Checkout | Order confirmation |
| `/orders` | Orders | Order history |
| `/subscriptions` | SubscriptionPlans | Browse all subscription plans |
| `/mypurchases` | MyPurchases | Purchase history & active subscriptions |

## 🎨 UI/UX Highlights

### Dark Netflix-Style Theme
- Primary: Red (#e50914)
- Accent: Cyan (#00d4ff)
- Background: Very Dark Blue (#0a0e27)
- Modern gradient effects & shadows

### Responsive Design
- Desktop (1024px+): 3-4 column grids
- Tablet (768-1023px): 2-3 column grids  
- Mobile (<768px): Single column, touch-optimized
- Small Mobile (<480px): Simplified layouts

### Interactive Elements
- Hover animations on cards
- Smooth transitions
- Loading states
- Error handling
- Accessible focus states

## 📊 Data Overview

### Platforms (25 Total)
- Video Streaming: Netflix, Prime, Disney+ Hotstar, Sony LIV, ZEE5
- Anime: Crunchyroll, Anime Times, Netflix Anime, Prime Anime, Disney Anime
- Sports: JioHotstar, FanCode, Discovery+, DAZN, ESPN+
- Music: Spotify, JioSaavn, Gaana, Apple Music, YouTube Music
- Regional: Sun NXT, Aha, Hoichoi, ManoramaMAX, Planet Marathi

### Movies (40+)
- Multiple languages: Tamil, English, Hindi, Malayalam, Telugu
- Various genres: Action, Comedy, Thriller, Romance, Horror, Sci-Fi, Anime, Drama
- Realistic pricing and ratings

### Subscription Plans
- Basic/Standard/Premium tiers
- Monthly and annual billing
- Feature highlights (4K, Ad-Free, Offline, etc.)

## 🔄 Redux State

### Cart State
```javascript
items: [],              // Movies in cart
subscriptions: [],      // Subscriptions in cart
total: 0,              // Total price
quantity: 0,           // Item count
orders: []             // Purchase history
```

### User State
```javascript
watchlist: [],         // Favorite movies
purchases: [],         // Purchased movies
subscriptions: []      // Active subscriptions
```

## 💡 Component Highlights

### Navbar
- Search bar (placeholder)
- Cart icon with badge
- Menu toggle for mobile
- Two-line navigation (top and bottom)

### Sidebar
- Mobile navigation menu
- Links to main sections
- Smooth open/close animation

### PlatformCard
- Platform banner image
- Emoji icon
- Tagline and description
- Explore button
- Hover animations

### MovieCard
- Movie poster with overlay
- Rating and year display
- Language and genre tags
- Quick-add cart button
- Clicking opens movie details

### LanguageFilter
- Filter buttons for 5 languages
- "All" option to show all movies
- Active state highlighting
- Click to filter movies

### GenreSection
- Genre-grouped movies
- Grid layout of movie cards
- Genre header with divider
- Empty states handling

## 🌐 Responsive Breakpoints

```css
Mobile: < 480px       (single column, simplified)
Tablet: 480-768px     (1-2 columns)
Mid: 768-1024px       (2-3 columns)
Desktop: > 1024px     (3-4 columns)
Wide: > 1400px        (full-width content)
```

## 🎯 Key Features Implementation

### 1. Category Organization
Platform categories displayed on home page with section headers

### 2. Language Filtering
Click language buttons to filter movies on platform page

### 3. Genre Organization
Movies auto-grouped by genre, sections shown when movies exist

### 4. Cart Management
- Add movies/subscriptions to cart
- View cart summary
- Proceed to checkout
- View order history

### 5. Purchase History
- Track all orders with dates
- View active subscriptions
- See purchase details

## 🚀 Build & Deployment

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build          # Creates dist/ folder
npm run preview        # Preview production build
```

### Deploy to hosting
Copy contents of `dist/` folder to your hosting service.

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Customization

### Change Theme Colors
Edit `src/styles/App.css` CSS variables:
```css
--primary-color: your-color;
--accent: your-color;
--background: your-color;
```

### Add New Platforms
Add to `src/data/platforms.js`

### Add New Movies
Add to `src/data/movies.js`

### Add New Subscription Plans
Add to `src/data/subscriptionPlans.js`

## 🚀 Performance

- Vite: Lightning-fast builds (~1.4s)
- Optimized bundle: ~306KB JS, ~37KB CSS (gzipped)
- HMR (Hot Module Replacement) for instant dev updates
- Tree-shaking enabled
- Code splitting ready

## 📝 npm Scripts

```json
{
  "dev": "vite",              // Start dev server
  "build": "vite build",      // Production build
  "preview": "vite preview",  // Preview build
  "lint": "eslint ."          // Run ESLint
}
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Router](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev)

## 🐛 Troubleshooting

### Port Already in Use
Dev server automatically finds next available port (5173, 5174, 5175, etc.)

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading
Ensure CSS imports are present:
```javascript
import './styles/ComponentName.css';
```

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Backend API integration
- [ ] Payment gateway
- [ ] Video player
- [ ] Search functionality
- [ ] Trending section
- [ ] User ratings & reviews
- [ ] Watchlist persistence
- [ ] Personalized recommendations
- [ ] Admin dashboard

## 📄 Project Info

- **Name**: StreamVerse
- **Version**: 1.0.0
- **Type**: Educational / Portfolio
- **Built**: June 2026
- **License**: MIT

## 🤝 Contributing

Contributions welcome! Feel free to fork and submit PRs.

## 📧 Contact

Questions? Open an issue or contact the maintainer.

---

**Made with ❤️ for entertainment lovers everywhere**

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
