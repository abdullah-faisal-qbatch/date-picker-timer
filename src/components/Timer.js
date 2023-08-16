import React from "react";
import { useState, useEffect } from "react";
import "./../App.css";
import { min } from "lodash";

const Home = () => {
  const [date, setDate] = useState("");
  const [hide, setHide] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTimer] = useState(false);

  //   useEffect(() => {
  //   }, []);
  function toSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
  }
  function convertSecondsToTime(seconds) {
    const hoursFinal = Math.floor(seconds / 3600);
    const minutesFinal = Math.floor((seconds % 3600) / 60);
    const remainingSecondsFinal = seconds % 60;

    return {
      hours: hoursFinal,
      minutes: minutesFinal,
      seconds: remainingSecondsFinal,
    };
  }

  const today = new Date().toISOString().split("T")[0];
  const hours = 24 - new Date().getHours();
  const minutes = 60 - new Date().getMinutes();
  const second = 60 - new Date().getSeconds();
  console.log("Hours: ", hours);
  console.log("Minutes: ", minutes);
  console.log("Seconds: ", second);
  console.log("In seconds: ", toSeconds(hours, minutes, second));
  let numberOfDays;

  // console.log(hours);
  //   console.log("time: ", time);

  //   const timerInterval = setInterval(() => {
  //     setSeconds((prevSeconds) => prevSeconds - 1);
  //     //   console.log(seconds);
  //   }, 1000);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setHide(!hide);
    console.log("your selected: ", e.target.value);

    let futureDate = e.target.value.split("-");
    console.log(futureDate);

    let currentDate = today.split("-");
    console.log(currentDate);

    let timeDifference = [0, 0, 0];
    timeDifference = timeDifference.map((val, index) => {
      val = Number(futureDate[index]) - Number(currentDate[index]);
      return val;
    });
    console.log("Time diff: ", timeDifference);
    numberOfDays =
      timeDifference[0] * 365 + timeDifference[1] * 30 + timeDifference[2] * 1;
    console.log("Total days: ", numberOfDays);
    numberOfDays--;
    // setSeconds(8640);
    // setStartTimer(true);
    // timerInterval();
  };

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
              // onSelect={handleDateChange}
              // onLoadedData={handleDateChange}
            ></input>
          </>
        )}
        {/* Display the timer  */}
        {/* {
            hide && {
                console.log("Time Difference")
            }
        } */}
      </div>
    </div>
  );
};

export default Home;
