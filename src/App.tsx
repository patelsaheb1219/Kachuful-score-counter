import React, { useState } from 'react';
import './App.css';
import { Player, GameState } from './types';
import { Setup } from './components/Setup';
import { Playing } from './components/Playing';
import { Finished } from './components/Finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('SETUP');
  const [players, setPlayers] = useState<Player[]>([]);
  const [round, setRound] = useState(1);
  const [cardsPerRound, setCardsPerRound] = useState(1);
  const [trumpIndex, setTrumpIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const startGame = () => {
    if (players.length < 2) {
      setErrorMsg("Need at least 2 players");
      return;
    }
    setErrorMsg('');
    setGameState('PLAYING');
  };

  const finishRound = () => {
    // Validate inputs
    for (const p of players) {
      if (p.currentBid === '' || p.roundStatus === null) {
        setErrorMsg("All players must have a Bid and a Result (Win/Lose).");
        return;
      }
    }

    setErrorMsg('');

    // Calculate scores
    const updatedPlayers = players.map(p => {
      const bid = p.currentBid as number;
      const success = p.roundStatus === 'WIN';
      let points = 0;

      if (success) {
        points = 10 + bid;
      } else {
        points = 0;
      }

      return {
        ...p,
        score: p.score + points,
        history: [...p.history, { bid, success, points }],
        currentBid: '' as '',
        roundStatus: null as 'WIN' | 'LOSE' | null
      };
    });

    setPlayers(updatedPlayers);
    setRound(round + 1);
    setCardsPerRound(cardsPerRound + 1);
    setTrumpIndex((trumpIndex + 1) % 4);
  };

  const finishGame = () => {
    setGameState('FINISHED');
  };

  const resetGame = () => {
    setGameState('SETUP');
    setPlayers([]);
    setRound(1);
    setCardsPerRound(1);
    setTrumpIndex(0);
    setErrorMsg('');
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Kachuful Score Counter</h1>
      </header>

      {gameState === 'SETUP' && (
        <Setup
          players={players}
          setPlayers={setPlayers}
          startGame={startGame}
          errorMsg={errorMsg}
        />
      )}

      {gameState === 'PLAYING' && (
        <Playing
          players={players}
          setPlayers={setPlayers}
          round={round}
          cardsPerRound={cardsPerRound}
          trumpIndex={trumpIndex}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          finishRound={finishRound}
          finishGame={finishGame}
        />
      )}

      {gameState === 'FINISHED' && (
        <Finished
          players={players}
          resetGame={resetGame}
        />
      )}
    </div>
  );
}

export default App;
