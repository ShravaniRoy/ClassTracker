import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';

const ClassTracker = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = date => {
    const newSelectedDates = [...selectedDates];

    // Check if the selected date already exists in the array
    const dateIndex = selectedDates.findIndex(
      eachSelectedDate => eachSelectedDate.toISOString().split('T')[0] === date.toISOString().split('T')[0]
    );

    if (dateIndex > -1) {
      newSelectedDates.splice(dateIndex, 1); // Remove the date if it exists
    } else {
      newSelectedDates.push(date); // Add the date if it doesn't exist
    }

    setSelectedDates(newSelectedDates);
  };

  const tileClassName = ({ date }) => {
    // return selectedDates.find(each => date.toISOString().split('T')[0] === each) ? 'attended-class' : '';
//The above code was a comparision between string representation of dates, which isn't accurate. 
//Hence, we move to converting the dates to UTC timestamps for comparision, which helped in accurate results.
    const selectedDatesTimestamps = selectedDates.map(selectedDate =>
        new Date(selectedDate.toDateString()).getTime()
      );
    
      const currentDateTimestamp = new Date(date.toDateString()).getTime();
    
      return selectedDatesTimestamps.includes(currentDateTimestamp)
        ? 'attended-class'
        : '';

  };

  
  return (
    <div>
      <h1>Class Tracker</h1>
      <Calendar
        onClickDay={handleDateChange}
        value={selectedDates}
        selectRange={false}
        tileClassName={tileClassName}
        calendarType="US"
      />
    </div>
  );
};

export default ClassTracker;