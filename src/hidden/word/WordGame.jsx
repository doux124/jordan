import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { useNavigate } from 'react-router-dom';

const WordGame = () => {
  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [foundWords, setFoundWords] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [definitions, setDefinitions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const vowels = 'AEIOU';
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
    const newGrid = [];
    
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        const useVowel = Math.random() < 0.3;
        const letters = useVowel ? vowels : consonants;
        row.push(letters[Math.floor(Math.random() * letters.length)]);
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  }, []);

  const checkWord = async (word) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Invalid word');
      }
      const data = await response.json();
      const definition = data[0].meanings[0].definitions[0].definition;
      setDefinitions(prev => ({ ...prev, [word]: definition }));
      return true;
    } catch (err) {
      setError('Invalid word');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const isAdjacent = (cell1, cell2) => {
    const rowDiff = Math.abs(cell1.row - cell2.row);
    const colDiff = Math.abs(cell1.col - cell2.col);
    return rowDiff <= 1 && colDiff <= 1 && !(rowDiff === 0 && colDiff === 0);
  };

  const handleMouseDown = (row, col) => {
    setIsSelecting(true);
    const newSelection = [{ row, col }];
    setSelectedCells(newSelection);
    setCurrentWord(grid[row][col]);
  };

  const handleMouseEnter = (row, col) => {
    if (isSelecting) {
      const lastCell = selectedCells[selectedCells.length - 1];
      if (isAdjacent(lastCell, { row, col }) && !selectedCells.some(cell => cell.row === row && cell.col === col)) {
        const newSelection = [...selectedCells, { row, col }];
        setSelectedCells(newSelection);
        setCurrentWord(newSelection.map(cell => grid[cell.row][cell.col]).join(''));
      }
    }
  };

  const handleMouseUp = async () => {
    setIsSelecting(false);
    if (currentWord.length >= 3 && !foundWords.includes(currentWord)) {
      const isValid = await checkWord(currentWord);
      if (isValid) {
        setFoundWords([currentWord, ...foundWords]); // Add new words to the beginning
      }
    }
    setSelectedCells([]);
    setCurrentWord('');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="max-w-xl bg-white rounded-lg shadow-lg p-6">
        <div className="relative flex justify-center items-center w-full my-8">
          <h1 className="text-2xl font-bold text-black">Word Search</h1>
          <nav className="absolute right-2 text-2xl">
            <a className="navLink text-black" onClick={() => navigate('/tools')}>
              <FontAwesomeIcon icon={faHome} />
            </a>
          </nav>
        </div>
        <div className="mb-6 flex-center">
          <div
            className="grid grid-cols-8 gap-1 select-none w-fit"
            onMouseLeave={() => {
              if (isSelecting) handleMouseUp();
            }}
          >
            {grid.map((row, i) => (
              row.map((letter, j) => {
                const isSelected = selectedCells.some(cell => cell.row === i && cell.col === j);
                return (
                  <div
                    key={`${i}-${j}`}
                    className={`
                      w-10 h-10 flex items-center justify-center
                      border rounded cursor-pointer font-medium text-lg
                      transition-colors duration-150
                      ${isSelected ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-100 text-black'}
                    `}
                    onMouseDown={() => handleMouseDown(i, j)}
                    onMouseEnter={() => handleMouseEnter(i, j)}
                    onMouseUp={handleMouseUp}
                  >
                    {letter}
                  </div>
                );
              })
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black">Current Word:</h3>
            <div className="text-xl text-black">{currentWord}</div>
            {loading && <div className="text-gray-600">Checking word...</div>}
            {error && <div className="text-red-500">{error}</div>}
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black">Found Words ({foundWords.length}):</h3>
            <div className="flex flex-col gap-2 h-48 overflow-y-auto">
              {foundWords.map((word, index) => (
                <div key={index} className="flex flex-col bg-blue-50 rounded">
                  <span className="text-black font-medium">
                    {word}
                  </span>
                  {definitions[word] && (
                    <span className="text-sm text-gray-600 mt-1">
                      {definitions[word]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordGame;