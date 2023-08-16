import React from "react";
import { useState, useEffect } from "react";
import "./../App.css";

const Home = () => {
  const [date, setDate] = useState("");
  const [hide, setHide] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTimer] = useState(false);

  //   useEffect(() => {
  //   }, []);

  const today = new Date().toISOString().split("T")[0];
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const second = new Date().getSeconds();
  console.log(hours);
  console.log(minutes);
  console.log(second);
  console.log(hours);
  //   console.log("time: ", time);

  let numberOfDays;
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
    // console.log(numberOfDays);
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

// echo "# date-picker-timer" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/abdullah-faisal-qbatch/date-picker-timer.git
// git push -u origin main
