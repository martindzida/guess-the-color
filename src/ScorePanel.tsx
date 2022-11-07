import React from 'react';

interface Props {
  heading: string;
  children: number;
}

const ScorePanel = ({heading, children}: Props) => {
  return (
    <div className='flex items-center text-2xl font-bold text-slate-700 p-8'>
      <span>{heading}</span>
      <span className='text-5xl text-orange-600 mx-4'>{children}</span>
    </div>
  );
};

export default ScorePanel;

