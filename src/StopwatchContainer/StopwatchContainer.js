import React from 'react';
import { connect } from 'react-redux';
import Stopwatch from '../Stopwatch/Stopwatch'; 
import { startTimer, pauseTimer, resetTimer } from './actions'; 

const mapStateToProps = (state) => {
  return {
    isRunning: state.isRunning,
    elapsedTime: state.elapsedTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartTimer: () => dispatch(startTimer()),
    onPauseTimer: () => dispatch(pauseTimer()),
    onResetTimer: () => dispatch(resetTimer()),
  };
};

const ConnectedStopwatch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stopwatch);

export default ConnectedStopwatch;
