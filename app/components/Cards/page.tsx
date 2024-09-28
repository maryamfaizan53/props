

import React from 'react';

interface CardsProps {
  Name: string;
  RollNo: string;
  Day: string;
  Slot: string;
}

const Cards: React.FC<CardsProps> = (props) => {
  return (
    <div className='bg-black border border-red-600  ring-offset-orange-800 h-60 w-56 flex flex-col justify-center text-lime-400 p-6'>
      <h1 className=' text-blue-800 text-2xl font-extrabold text-center'>Identification Card</h1>
      <h1>Name: {props.Name}</h1>
      <h1>Roll No: {props.RollNo}</h1>
      <h1>Day: {props.Day}</h1>
      <h1>Slot: {props.Slot}</h1>
    </div>
  );
}

export default Cards;

