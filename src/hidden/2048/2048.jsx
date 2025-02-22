import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { useNavigate } from 'react-router-dom';

const Game2048 = () => {
  const GRID_SIZE = 4;
  const [matrix, setMatrix] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('not over');
  const [records, setRecords] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Helper functions (keeping all existing helpers)
  const flatten = (mat) => mat.flat();
  const hasZero = (mat) => flatten(mat).includes(0);
  const transpose = (mat) => mat[0].map((_, i) => mat.map(row => row[i]));
  const reverse = (mat) => mat.map(row => [...row].reverse());
  const deepCopy = (mat) => JSON.parse(JSON.stringify(mat));

  // Game initialization (keeping existing initialization logic)
  const newGameMatrix = (n) => Array(n).fill().map(() => Array(n).fill(0));

  const addTwo = (mat) => {
    if (!hasZero(mat)) return mat;
    const matCopy = deepCopy(mat);
    const emptyCells = [];
    
    flatten(matCopy).forEach((cell, index) => {
      if (cell === 0) emptyCells.push(index);
    });

    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const row = Math.floor(randomIndex / GRID_SIZE);
    const col = randomIndex % GRID_SIZE;
    matCopy[row][col] = 2;
    
    return matCopy;
  };

  const initializeGame = useCallback(() => {
    let newMatrix = newGameMatrix(GRID_SIZE);
    newMatrix = addTwo(addTwo(newMatrix));
    setMatrix(newMatrix);
    setScore(0);
    setGameStatus('not over');
    setRecords([]);
  }, []);

  // Touch event handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchMove = (e) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (Math.max(absDeltaX, absDeltaY) < minSwipeDistance) return;

    if (absDeltaX > absDeltaY) {
      // Horizontal swipe
      if (deltaX > 0) {
        move('left');
      } else {
        move('right');
      }
    } else {
      // Vertical swipe
      if (deltaY > 0) {
        move('up');
      } else {
        move('down');
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keeping all existing game logic (checkGameStatus, shiftLeft, mergeLeft)
  const checkGameStatus = (mat) => {
    if (flatten(mat).includes(2048)) return 'win';
    if (hasZero(mat)) return 'not over';

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 1; j < GRID_SIZE; j++) {
        if (mat[i][j] === mat[i][j-1]) return 'not over';
      }
    }

    const transposed = transpose(mat);
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 1; j < GRID_SIZE; j++) {
        if (transposed[i][j] === transposed[i][j-1]) return 'not over';
      }
    }

    return 'lose';
  };

  const shiftLeft = (mat) => {
    return mat.map(row => {
      const filtered = row.filter(cell => cell !== 0);
      return [...filtered, ...Array(GRID_SIZE - filtered.length).fill(0)];
    });
  };

  const mergeLeft = (mat) => {
    const original = deepCopy(mat);
    let shifted = shiftLeft(mat);
    let score = 0;

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE - 1; j++) {
        if (shifted[i][j] === shifted[i][j + 1] && shifted[i][j] !== 0) {
          shifted[i][j] *= 2;
          shifted[i][j + 1] = 0;
          score += shifted[i][j];
        }
      }
    }

    shifted = shiftLeft(shifted);
    const changed = JSON.stringify(original) !== JSON.stringify(shifted);
    
    return [shifted, changed, score];
  };

  const move = useCallback((direction) => {
    let currentMatrix = deepCopy(matrix);
    let changed = false;
    let scoreIncrement = 0;

    switch (direction) {
      case 'left':
        [currentMatrix, changed, scoreIncrement] = mergeLeft(currentMatrix);
        break;
      case 'right':
        currentMatrix = reverse(currentMatrix);
        [currentMatrix, changed, scoreIncrement] = mergeLeft(currentMatrix);
        currentMatrix = reverse(currentMatrix);
        break;
      case 'up':
        currentMatrix = transpose(currentMatrix);
        [currentMatrix, changed, scoreIncrement] = mergeLeft(currentMatrix);
        currentMatrix = transpose(currentMatrix);
        break;
      case 'down':
        currentMatrix = transpose(currentMatrix);
        currentMatrix = reverse(currentMatrix);
        [currentMatrix, changed, scoreIncrement] = mergeLeft(currentMatrix);
        currentMatrix = reverse(currentMatrix);
        currentMatrix = transpose(currentMatrix);
        break;
    }

    if (changed) {
      if (records.length === 3) records.shift();
      setRecords(prevRecords => [...prevRecords, { matrix: currentMatrix, score: scoreIncrement }]);
      currentMatrix = addTwo(currentMatrix);
      setMatrix(currentMatrix);
      setScore(prevScore => prevScore + scoreIncrement);
      setGameStatus(checkGameStatus(currentMatrix));
    }
  }, [matrix, records]);

  const handleUndo = useCallback(() => {
    if (records.length === 0) return;
    const lastRecord = records[records.length - 1];
    setMatrix(lastRecord.matrix);
    setScore(prevScore => prevScore - lastRecord.score);
    setRecords(prevRecords => prevRecords.slice(0, -1));
    setGameStatus('not over');
  }, [records]);

  const handleKeyPress = useCallback((e) => {
    if (gameStatus !== 'not over') return;
    
    switch (e.key) {
      case 'ArrowLeft':
        move('left');
        break;
      case 'ArrowRight':
        move('right');
        break;
      case 'ArrowUp':
        move('up');
        break;
      case 'ArrowDown':
        move('down');
        break;
    }
  }, [gameStatus, move]);

  useEffect(() => {
    if (matrix.length === 0) {
      initializeGame();
    }
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress, initializeGame, matrix.length]);

  const getCellColor = (value) => {
    const colors = {
      0: '#eee',
      2: '#eee4da',
      4: '#ede0c8',
      8: '#f2b179',
      16: '#f59563',
      32: '#f67c5f',
      64: '#f65e3b',
      128: '#edcf72',
      256: '#edcc61',
      512: '#edc850',
      1024: '#edc53f',
      2048: '#edc22e'
    };
    return colors[value] || '#edc22e';
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative flex justify-center items-center w-full my-8">
        <h1 className="text-4xl font-bold">2048</h1>
        <nav className="absolute right-2 text-2xl">
          <a className="navLink" onClick={() => navigate('/tools')}>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px' }} />
          </a>
        </nav>
      </div>

      <div className="mb-4 flex flex-center justify-between w-full">
        <div className="text-xl font-bold pr-10">Score: {score}</div>
        <div className="space-x-2">
          <button className="button-89 my-2 sm:my-5 ml-0" onClick={initializeGame}>New Game</button>
          <button className="button-89 my-2 sm:my-5 ml-0" onClick={handleUndo} disabled={records.length === 0}>Undo</button>
        </div>
      </div>

      <div 
        className="bg-gray-300 p-4 rounded-lg touch-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="grid grid-cols-4 gap-2">
          {matrix.map((row, i) => 
            row.map((cell, j) => (
              <div 
                key={`${i}-${j}`}
                style={{
                  backgroundColor: getCellColor(cell),
                  height: '64px',
                  width: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  borderRadius: '0.5rem',
                  transition: 'background-color 0.15s ease-in-out',
                  color: 'black'
                }}
              >
                {cell !== 0 ? cell : ''}
              </div>
            ))
          )}
        </div>
      </div>

      {gameStatus !== 'not over' && (
        <div className="mt-4 text-xl font-bold">
          {gameStatus === 'win' ? 'Congratulations! You won!' : 'Game Over!'}
        </div>
      )}
    </div>
  );
};

export default Game2048;