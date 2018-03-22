import React from 'react';

import './UpcomingDates.css'

interface Props {
}

const UpcomingDates = (props: Props) => {  
  
  const dateData = [
    {
      headline: 'Upcoming Dates',
    },
    {
      date: '18-04-23',
      time: '9pm',
      title: 'MGM Grand Garden Arena',
    },
    {
      date: '18-04-23',
      time: '9pm',
      title: 'MGM Grand Garden Arena',
    },
    {
      date: '18-04-23',
      time: '9pm',
      title: 'MGM Grand Garden Arena',
    },
  ]

  const dateRender = dateData.map((t, i) => (
    <div key={t} className="date-item">
      <p>{t.date}</p>
      <p>{t.time}</p>
      <p>{t.title}</p>
    </div>
  ));

  return (
    <div className="upcoming-dates col-start-span-7">
      <div className="divider">
        <h2>{dateData[0].headline}</h2>
      </div>
      <div className="date-container">
        {dateRender}
      </div>
    </div>
  )};

export default UpcomingDates;