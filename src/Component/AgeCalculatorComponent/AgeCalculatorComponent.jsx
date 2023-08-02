import React, { useState } from 'react';
import './AgeCalculatorComponent.css'
const AgeCalculatorComponent = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const currentDate = new Date();
    const selectedDate = new Date(birthdate);
    var day = ['monday' ,'Tuesday','wednesday','Thursday','Friday','Saturday','sunday' ]
    if(birthdate === ''){
      setAge('Please enter a birthdate.');
      alert('Please enter DOB')
    }
    else if (selectedDate >= currentDate ) {
      setAge('Please enter a valid birthdate.');
    } else {
      const birthday = selectedDate.getDay()
      const selectDay = day[(birthday-1)]
      const ageMilliseconds = currentDate - selectedDate;
      console.log(ageMilliseconds);
      const ageDate = new Date(ageMilliseconds);
      console.log(ageDate);
      const years = ageDate.getUTCFullYear() - 1970;
      console.log(years);
      const months = ageDate.getUTCMonth();
      const days = ageDate.getUTCDate() - 1; // Subtract 1 as the date is zero-indexed

      setAge(`Your age is: ${years} years, ${months} months, and ${days} days. ${selectDay}`);
    }
  };

  return (
    <div className='header'>
      <div className='wrapper'>
            <p className='headTitle'>Age Calculator</p>
            <div className='form'>
              <div>
      <label htmlFor="birthdate" className='label'>Enter DOB:</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        className='input'
      />
      </div>
      <button type ='submit' onClick={calculateAge} className='btn'>Calculate Age</button>
      </div>
      <p className='finalResult'>{age}</p>
      </div>
  
    </div>
  );
};

export default AgeCalculatorComponent;
