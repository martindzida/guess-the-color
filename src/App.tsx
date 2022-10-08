import {useEffect, useState} from 'react';
import Button from './Button';

function App() {
  const [curColors, setCurColors] = useState<string[]>([]);
  const [correctColor, setCorrectColor] = useState<string>();
  const [isCorrect, setIsCorrect] = useState<boolean | null>();

  useEffect(() => {
    setCurColors(genColors());
  }, []);

  const genColors = () => {
    const hex = '0123456789ABCDEF';
    const colors: string[] = [];

    for (let i = 0; i < 3; i++) {
      const indices = [...Array(6)].map(() => getRandInt(16));
      colors.push(`#${indices.map(index => hex[index]).join('')}`);
    }
    setCorrectColor(colors[getRandInt(3)]);
    return colors;
  };

  const getRandInt = (n: number) => Math.floor(Math.random() * n);

  const handlePick = (color: string) => {
    setIsCorrect(correctColor === color);
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-amber-400'>
      <h1 className='font-extrabold text-5xl p-10 text-slate-700'>Guess the color</h1>
      <div className='w-60 h-60' style={{backgroundColor: correctColor}}></div>
      <div className='flex justify-center p-10'>
        {curColors.map((c: string) => (
          <Button key={c} color={c} handler={handlePick} />
        ))}
      </div>
    </div>
  );
}

export default App;

