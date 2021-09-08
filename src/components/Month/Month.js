import React  from 'react';
import Week from '../Week/Week';

function Month ({month, year}) {
  const currentDate = new Date(year, month, 1);
  const daysInMonth = getDaysInMonth(month, year);
  const firstWeekDay = getFirstWeekDay(month, year);
  const daysPerWeek = 7;
  const weeksArray = []

  for (let i = 1; i <= daysInMonth + firstWeekDay; i += daysPerWeek) {
    weeksArray.push(
      <Week key={i}
            month={month}
            year={year}
            firstDay={i - firstWeekDay}/>);
  }
  return (
    <div data-testid='month'>
      <span>
        {getMonthName(month)} {currentDate.getFullYear()}
      </span>
      {weeksArray}
    </div>
  );
}

function getMonthName (month) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[month];
}

function getDaysInMonth (month, year) {
  const nextMonth = month + 1;
  return new Date(year, nextMonth, 0).getDate();
};

function getFirstWeekDay (month, year) {
  const thisMonth = month;
  let firstDay = new Date(year, thisMonth, 1).getDay() - 1;
  firstDay = (firstDay === -1) ? 6 : firstDay;
  return firstDay;
};

export default Month;
