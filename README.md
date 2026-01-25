# Kachufool Score Counter (PWA)

A Progressive Web App (PWA) to keep score for the card game **Kachufool** (also known as Judgment, Forecasting, or Oh Hell variant).

## Features

- **Score Management**: Track bids and won tricks for multiple players.
- **Round Progression**: Automatically handles rounds, cards per round, and trump suit rotation.
- **Suit Indicators**: Shows the current Trump suit with color (Spades ♠️, Diamonds ♦️, Clubs ♣️, Hearts ♥️).
- **PWA Support**: Installable on mobile devices, works offline.

## Helper

This project was built with React, TypeScript, and Webpack (using `create-react-app`).

## How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm start
    ```
3.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To build the app for production (PWA ready):

```bash
npm run build
```

This builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Game Rules (Basic)

1.  **Rounds**: Starts with 1 card per player.
2.  **Trump**: Rotates Spades -> Diamonds -> Clubs -> Hearts.
3.  **Bidding**: Players bid 0 to Number of Cards.
4.  **Scoring**:
    -   Exact Bid: 10 + Bid points.
    -   Missed Bid: 0 points.
