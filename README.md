# Kachuful Score Counter (PWA)

A Progressive Web App (PWA) to keep score for the card game **Kachuful** (also known as Kachufool, Judgment, Forecasting, or Oh Hell variant).

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://patelsaheb1219.github.io/Kachuful-score-counter)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-enabled-orange.svg)](https://web.dev/progressive-web-apps/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [PWA Installation](#pwa-installation)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## About

Kachuful Score Counter is a digital scorekeeper designed specifically for the Kachuful card game. This Progressive Web App eliminates the need for pen and paper, making it easier to track scores, manage rounds, and enjoy the game without interruption. The app works offline once installed and can be used on any device.

## Features

- ✅ **Score Management**: Automatically track bids and won tricks for multiple players
- ✅ **Round Progression**: Automatically handles rounds, cards per round, and trump suit rotation
- ✅ **Trump Suit Indicators**: Visual display of the current trump suit with colored symbols (Spades ♠️, Diamonds ♦️, Clubs ♣️, Hearts ♥️)
- ✅ **PWA Support**: Installable on mobile devices and works completely offline
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ✅ **No Backend Required**: All data is stored locally in your browser
- ✅ **Fast & Lightweight**: Built with modern web technologies for optimal performance

## Demo

🔗 **[Try the live demo here](https://patelsaheb1219.github.io/Kachuful-score-counter)**

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (version 8.x or higher)

You can check your versions by running:

```bash
node --version
npm --version
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/patelsaheb1219/Kachuful-score-counter.git
cd Kachuful-score-counter
```

2. Install dependencies:

```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm start
```

The app will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

## How to Play

### Step 1: Setup Players

1. Launch the app
2. Enter player names one by one
3. Click "Add" or press Enter after each name
4. Add at least 2 players
5. Click "Start Game" when ready

### Step 2: Playing Rounds

For each round:

1. **View Round Info**: Check the current round number, cards per round, and trump suit
2. **Enter Bids**: Each player enters their bid (0 to the number of cards in the round)
3. **Mark Results**: After the round is played, mark each player as "Win" (made their bid) or "Lose" (failed to make their bid)
4. **Next Round**: Click "Next Round" to proceed

### Step 3: Scoring

- **Successful Bid**: 10 + (bid value) points
- **Failed Bid**: 0 points

The app automatically calculates and updates scores after each round.

## Game Rules

### Basic Rules

1. **Starting Round**: The game starts with 1 card per player

2. **Trump Suit Rotation**: The trump suit rotates in the following order:
   - Spades ♠️ → Diamonds ♦️ → Clubs ♣️ → Hearts ♥️

3. **Bidding Phase**: 
   - Each player bids how many tricks they think they can win
   - Bids range from 0 (no tricks) to the number of cards dealt in that round

4. **Playing Phase** (done outside the app):
   - Players play cards according to standard trick-taking rules
   - Trump suit beats other suits
   - Highest card in the leading suit wins if no trump is played

5. **Scoring Phase**:
   - **Made the bid exactly**: Score 10 + bid value points
   - **Failed to make the bid**: Score 0 points for that round

6. **Round Progression**:
   - Each subsequent round increases the number of cards by 1
   - Trump suit rotates to the next suit
   - Game continues for as many rounds as desired

### Example Scoring

- Player bids 3 and wins exactly 3 tricks: **13 points** (10 + 3)
- Player bids 0 and wins 0 tricks: **10 points** (10 + 0)
- Player bids 2 but wins 1 or 3 tricks: **0 points** (failed bid)

## PWA Installation

### On Mobile (Android/iOS)

1. Open the app in your mobile browser
2. Look for the "Add to Home Screen" or "Install" prompt
3. Follow the on-screen instructions
4. The app will be added to your home screen like a native app

### On Desktop (Chrome/Edge)

1. Open the app in Chrome or Edge
2. Look for the install icon in the address bar
3. Click "Install" when prompted
4. The app will open in its own window

### Benefits of Installing

- Quick access from your home screen
- Works offline after installation
- Runs in standalone mode (no browser UI)
- Faster load times

## Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: [React 18.2](https://reactjs.org/)
- **Language**: [TypeScript 4.9](https://www.typescriptlang.org/)
- **Build Tool**: [Create React App 5.0](https://create-react-app.dev/)
- **PWA**: [Workbox](https://developers.google.com/web/tools/workbox)
- **Styling**: CSS3 with custom styles
- **State Management**: React Hooks (useState)

## Project Structure

```
Kachuful-score-counter/
├── public/              # Static files
│   ├── index.html      # HTML template
│   ├── manifest.json   # PWA manifest
│   ├── favicon.ico     # App icon
│   ├── logo192.png     # PWA icon (192x192)
│   ├── logo512.png     # PWA icon (512x512)
│   └── robots.txt      # Search engine rules
├── src/                 # Source code
│   ├── App.tsx         # Main application component
│   ├── App.css         # Application styles
│   ├── index.tsx       # Application entry point
│   ├── index.css       # Global styles
│   ├── service-worker.ts           # Service worker for PWA
│   ├── serviceWorkerRegistration.ts # Service worker registration
│   └── setupTests.ts   # Test configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

### Key Files

- **`src/App.tsx`**: Main component containing game logic, state management, and UI
- **`src/App.css`**: Styling for the application
- **`public/manifest.json`**: PWA configuration (app name, icons, theme)
- **`src/serviceWorkerRegistration.ts`**: Handles PWA caching and offline functionality

## Building for Production

To build the app for production (PWA ready):

```bash
npm run build
```

This command:
- Creates an optimized production build in the `build/` folder
- Bundles React in production mode
- Minifies and optimizes all assets
- Generates a service worker for offline functionality
- Prepares the app for deployment

The build is optimized for best performance and can be deployed to any static hosting service.

## Deployment

This project can be deployed to various platforms. Here are instructions for GitHub Pages (the current deployment method):

### Deploy to GitHub Pages

1. Ensure the `homepage` field in `package.json` is set correctly:

```json
"homepage": "https://your-username.github.io/Kachuful-score-counter"
```

2. Install gh-pages (if not already installed):

```bash
npm install --save-dev gh-pages
```

3. Deploy:

```bash
npm run deploy
```

This will build the app and push it to the `gh-pages` branch.

### Other Deployment Options

- **Netlify**: Drag and drop the `build/` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use `firebase deploy`
- **Any Static Host**: Upload the contents of `build/` folder

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and passes all tests.

### Development Guidelines

- Write clean, readable code
- Follow React and TypeScript best practices
- Test your changes thoroughly
- Update documentation as needed

## Troubleshooting

### App Not Loading

- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)

### PWA Not Installing

- Ensure you're using HTTPS (required for PWA)
- Check that service worker is registered (look in browser DevTools > Application > Service Workers)
- Try clearing site data and reloading

### Scores Not Saving

- The app stores data in browser local storage
- Scores are session-based and will reset if you refresh the page
- Consider implementing localStorage persistence if you need to save progress

### Development Issues

- If dependencies fail to install, try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Ensure you're using Node.js 16.x or higher
- Check for port conflicts if the development server won't start

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for Kachuful players**

If you find this app useful, please ⭐ star the repository!
