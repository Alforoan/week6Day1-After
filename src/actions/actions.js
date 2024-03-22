export const START_TIMER = 'START_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const INCREASE_ELAPSED_TIME = 'INCREASE_ELAPSED_TIME';


export const startTimer = () => ({
  type: START_TIMER,
});

export const pauseTimer = () => ({
  type: PAUSE_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const increaseElapsedTime = () => ({
  type: INCREASE_ELAPSED_TIME,
});
