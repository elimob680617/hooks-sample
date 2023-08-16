import { useEffect, useState } from "react";

const useTimer = (initialTime, speed = 1000) => {
  const [timer, setTimer] = useState(initialTime);
  const [isTimerStart, setIsTimerStart] = useState(true);

  // ? create timer
  useEffect(() => {
    let timerInterval;

    // ? if timer is off start the timer
    if (isTimerStart) {
      timerInterval = setInterval(() => {
        // ? reduce time based on speed
        setTimer((prevTime) => prevTime - 1);
      }, speed);
    }

    // ? kill timer interval when component didmount
    return () => clearInterval(timerInterval);
  }, [isTimerStart, speed]);

  // ? set timer off or on based on timer value
  useEffect(() => {
    if (timer === 0) {
      setIsTimerStart(false);
      setTimer(initialTime);
    }
  }, [timer, initialTime]);

  return { timer, isTimerStart, setIsTimerStart };
};

export default useTimer;

// ? this hook is for creating timer based on given initial time and speed
// ? in args and returns timer number and timer starting state and also function
// ? to start timer manualy
