import React from 'react';

import './UpcomingDates.css'

interface Props {
  dates: Array,
}

const UpcomingDates = (props: Props) => {    
  const dateRender = props.dates.map((t, i) => (
    <div key={i} className="date-item">
      <p className="venue">{t.acf.venue}</p>
      <p>{t.acf.date}</p>
      <p>{t.acf.time}</p>
    </div>
  ));

  return (
    <div className="upcoming-dates col-start-span-7">
      <div className="date-container">
      <h2 className="date-title">Upcoming Dates</h2>
        {dateRender}
      </div>
    </div>
  )};

export default UpcomingDates;