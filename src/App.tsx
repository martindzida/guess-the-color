import {useEffect, useState} from 'react';
import Button from './Button';
import useGenColor from './useGenColor';
import {getRandInt} from './useGenColor';

function App() {
  const [curColors, setCurColors] = useState<string[]>([]);
  const [correctColor, setCorrectColor] = useState<string>();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [goodGuess, setGoodGuess] = useState(false);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const colors = useGenColor();
    setCurColors(colors);
    setCorrectColor(colors[getRandInt(3)]);
    setGoodGuess(false);
  }, [goodGuess]);

  const handlePick = (color: string) => {
    const guess = correctColor === color;
    setIsCorrect(guess);
    if (guess) {
      setGoodGuess(true);
      setStreak(current => current + 1);
    } else {
      if (streak > highScore) {
        setHighScore(streak);
      }
      setStreak(0);
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-amber-400'>
      <h1 className='font-extrabold text-6xl p-10 text-slate-700'>Guess the color</h1>
      <div className='flex items-center text-2xl font-bold text-slate-700 p-8'>
        <span>High score: </span>
        <span className='text-5xl text-orange-600 mx-4'>{highScore}</span>
      </div>
      <div className='flex items-center text-2xl font-bold text-slate-700 p-8'>
        <span>Current streak: </span>
        <span className='text-5xl text-orange-600 mx-4'>{streak}</span>
      </div>
      <div className='w-60 h-60' style={{backgroundColor: correctColor}}></div>
      <div className='flex justify-center p-10'>
        {curColors.map((c: string) => (
          <Button key={c} color={c} handler={handlePick} />
        ))}
      </div>
      <div className={`${isCorrect ? 'text-green-500' : 'text-rose-500'} text-2xl font-bold`}>
        {isCorrect !== null && isCorrect && 'Correct!'}
        {isCorrect !== null && !isCorrect && 'Wrong :c'}
      </div>
    </div>
  );
}

export default App;

