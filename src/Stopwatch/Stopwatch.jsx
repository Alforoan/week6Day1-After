import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, increaseElapsedTime } from '../actions/actions';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { isRunning, elapsedTime } = useSelector((state) => state);

  const handleStart = () => {
    dispatch(startTimer());
  };

  const handlePause = () => {
    dispatch(pauseTimer());
  };

  const handleReset = () => {
    dispatch(resetTimer());
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        dispatch(increaseElapsedTime());
      }, 1000);
    }

    return () => clearInterval(intervalId); 
  }, [isRunning]);

  return (
    <div>
      <div>{elapsedTime}</div>
      {isRunning ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
