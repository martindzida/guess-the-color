import React from 'react';

interface Props {
  color: string;
  handler: (color: string) => void;
}

const Button = ({color, handler}: Props) => {
  return (
    <button className='bg-neutral-300 text-slate-700 font-semibold rounded-md p-3 m-2' onClick={() => handler(color)}>
      {color}
    </button>
  );
};

export default Button;

