import React from "react";
import { useState, useEffect } from "react";
import "./../App.css";

function convertToSecondsFromTime(hours, minutes, seconds) {
  const totalSeconds = seconds + minutes * 60 + hours * 3600 - 86400;
  return totalSeconds;
}
function convertToTimeFromSeconds(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return { days, hours, minutes, seconds };
}

const Time = () => {
  // const [date, setDate] = useState("");
  const [hide, setHide] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let intervalId;
    if (startTimer) {
      intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTimer]);
  const today = new Date().toISOString().split("T")[0];
  const handleDateChange = (e) => {
    setHide(!hide);
    let futureDate = e.target.value;
    let currentDate = today;
    let timeDifference = new Date(futureDate) - new Date(currentDate);
    const hours = 23 - new Date().getHours();
    const minutes = 59 - new Date().getMinutes();
    const second = 59 - new Date().getSeconds();
    let totalSeconds = Math.floor(timeDifference / 1000);
    let totalSecondsIncludedCurrent =
      totalSeconds + convertToSecondsFromTime(hours, minutes, second);
    setSeconds(totalSecondsIncludedCurrent);
    setStartTimer(true);
  };

  const finalTime = convertToTimeFromSeconds(seconds);

  return (
    <div className="center-container">
      <h1>Timer App</h1>
      <div>
        {!hide && (
          <>
            Date Picker: {"  "}
            <input
              type="date"
              id="dateInput"
              name="dateInput"
              min={today}
              onChange={handleDateChange}
            ></input>
          </>
        )}
        {startTimer && (
          <div>
            <h1>
              {finalTime.days} days :{finalTime.hours} hours :
              {finalTime.minutes} minutes:
              {finalTime.seconds} seconds
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Time;
