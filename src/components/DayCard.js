import React from 'react';

function DayCard ({number, differentMonth}) {
  return (
    <div className={"inline-flex m-2 w-60 h-36 items-center justify-center cursor-pointer text-center rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500"
      + (differentMonth ? " bg-gray-500" : " bg-white")} >
      <p>
        {number}
      </p>
    </div>
  );
}

export default DayCard;