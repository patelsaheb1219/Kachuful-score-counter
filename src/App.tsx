import React, { useState } from 'react';
import './App.css';

type Suit = 'Spades' | 'Diamonds' | 'Clubs' | 'Hearts';
const SUITS: Suit[] = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const SUIT_ICONS: Record<Suit, string> = {
  'Spades': '♠️',
  'Diamonds': '♦️',
  'Clubs': '♣️',
  'Hearts': '♥️'
};

interface Player {
  id: number;
  name: string;
  score: number;
  currentBid: number | '';
  roundStatus: 'WIN' | 'LOSE' | null;
  history: { bid: number, success: boolean, points: number }[];
}

function App() {
  const [gameState, setGameState] = useState<'SETUP' | 'PLAYING' | 'FINISHED'>('SETUP');
  const [players, setPlayers] = useState<Player[]>([]);
  const [round, setRound] = useState(1);
  const [cardsPerRound, setCardsPerRound] = useState(1);
  const [trumpIndex, setTrumpIndex] = useState(0); // Index in SUITS array
  const [newPlayerName, setNewPlayerName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Setup Phase
  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    setPlayers([...players, {
      id: Date.now(),
      name: newPlayerName,
      score: 0,
      currentBid: '',
      roundStatus: null,
      history: []
    }]);
    setNewPlayerName('');
  };

  const startGame = () => {
    if (players.length < 2) {
      setErrorMsg("Need at least 2 players");
      return;
    }
    setErrorMsg('');
    setGameState('PLAYING');
  };

  // Game Logic
  const currentSuit = SUITS[trumpIndex];

  const handleBidChange = (id: number, val: string) => {
    const num = val === '' ? '' : parseInt(val);
    setPlayers(players.map(p => p.id === id ? { ...p, currentBid: num as number | '' } : p));
  };

  const handleStatusChange = (id: number, status: 'WIN' | 'LOSE') => {
    setPlayers(players.map(p => p.id === id ? { ...p, roundStatus: status } : p));
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
    
    // Check if next round is possible? 
    // Usually game goes up to max cards (52 / numPlayers) then maybe down.
    // For now, let's just increment safely.
    
    setRound(round + 1);
    setCardsPerRound(cardsPerRound + 1); // Simple progression 1, 2, 3...
    setTrumpIndex((trumpIndex + 1) % 4);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Kachuful Score Counter</h1>
      </header>
      
      {gameState === 'SETUP' && (
        <div className="card">
          <h2>Add Players</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Player Name" 
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
              style={{ padding: '10px', fontSize: '1rem', width: '200px' }}
            />
            <button onClick={addPlayer}>Add</button>
          </div>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {players.map(p => (
              <li key={p.id} style={{ padding: '5px', fontSize: '1.2rem' }}>
                {p.name}
              </li>
            ))}
          </ul>

          <button onClick={startGame} disabled={players.length < 2} style={{ marginTop: '20px' }}>
            Start Game
          </button>
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </div>
      )}

      {gameState === 'PLAYING' && (
        <>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <h2>Round {round}</h2>
                <p><strong>Cards:</strong> {cardsPerRound}</p>
              </div>
              
              <div className={`suit-display suit-${currentSuit.toLowerCase()}`}>
                Trump: {SUIT_ICONS[currentSuit]} {currentSuit}
              </div>
            </div>
          </div>

          <div className="card">
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Score</th>
                    <th>Bid</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map(p => (
                    <tr key={p.id}>
                      <td>{p.name}</td>
                      <td className="score-positive">{p.score}</td>
                      <td>
                        <input 
                          type="number" 
                          min="0" 
                          max={cardsPerRound}
                          value={p.currentBid}
                          onChange={(e) => handleBidChange(p.id, e.target.value)}
                        />
                      </td>
                      <td>
                        <button 
                          className={`btn-result ${p.roundStatus === 'WIN' ? 'btn-win' : 'btn-outline'}`}
                          onClick={() => handleStatusChange(p.id, 'WIN')}
                        >
                          Win
                        </button>
                        <button 
                          className={`btn-result ${p.roundStatus === 'LOSE' ? 'btn-lose' : 'btn-outline'}`}
                          onClick={() => handleStatusChange(p.id, 'LOSE')}
                        >
                          Lose
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: '20px' }}>
              <button onClick={finishRound}>Next Round</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
