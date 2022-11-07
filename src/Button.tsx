import React from 'react';

interface Props {
  children: string;
  handler: (color: string) => void;
}

const Button = ({children, handler}: Props) => {
  return (
    <button className='bg-neutral-300 text-slate-700 font-semibold rounded-md p-3 m-2' onClick={() => handler(children)}>
      {children}
    </button>
  );
};

export default Button;

