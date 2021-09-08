import React, {useState} from 'react';
import Month from '../Month/Month';

function Calendar ({initialMonth, initialYear}) {
  if (!initialMonth || !initialYear) {
    const currentDate = new Date();
    initialMonth = currentDate.getMonth();
    initialYear = currentDate.getFullYear();
  }
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);

  const nextMonth = () => {
    if (month > 10) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  const prevMonth = () => {
    if (month < 1) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }

  return (
    <div data-testid='calendar' className='bg-red-300 m-4'>
      <div className='border rounded-lg px-1'>
        <button
          aria-label='Previous month'
          type='button'
          onClick={prevMonth}
          className='leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center'>
          <svg className='h-6 w-6 text-gray-500 inline-flex leading-none'  fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'/>
          </svg>  
        </button>
        <div className='border-r inline-flex h-6'></div>    
        <button
          aria-label='Next month'
          type='button'
          onClick={nextMonth}
          className='leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1' >
          <svg className='h-6 w-6 text-gray-500 inline-flex leading-none'  fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'/>
          </svg>                    
        </button>
      </div>
      <Month month={month} year={year}/>
    </div>
  );
}

export default Calendar;