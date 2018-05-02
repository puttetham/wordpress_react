import React from 'react';

import './UpcomingDates.css'

interface Props {
  dates: Array,
}

const UpcomingDates = (props: Props) => {  
  console.log(props.dates, 'check date props');
  
  const dateRender = props.dates.map((t, i) => (
    <div key={i} className="date-item">
      <p>{t.acf.date}</p>
      <p>{t.acf.time}</p>
      <p>{t.acf.venue}</p>
    </div>
  ));

  return (
    <div className="upcoming-dates col-start-span-7">
      <div className="divider">
        <h2>Upcoming Dates</h2>
      </div>
      <div className="date-container">
        {dateRender}
      </div>
    </div>
  )};

export default UpcomingDates;