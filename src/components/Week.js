import React from 'react';
import DayCard from './DayCard';

function Week ({firstDay, month, year}) {
  const daysPerWeek = 7;
  const daysCards = []
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  const thisMonthLastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < daysPerWeek; i++) {
    let date = firstDay + i;
    if (date < 1) {
      date += prevMonthLastDate;
      daysCards.push(<DayCard key={i} number={date} differentMonth={true}/>);
    } else if (date > thisMonthLastDate) {
      date = date - thisMonthLastDate;
      daysCards.push(<DayCard key={i} number={date} differentMonth={true}/>);
    } else {
      daysCards.push(<DayCard key={i} number={date} differentMonth={false}/>);
    }
  }
  return (
    <div className='flex flex-row flex-nowrap' >
      {daysCards}
    </div>
  );
}

export default Week;