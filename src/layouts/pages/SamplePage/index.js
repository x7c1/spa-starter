import React from 'react';
import { connect } from 'react-redux';
import { increase } from './counter/actions';

const SamplePageView = props => {
  return (
    <div className='react-sample-area'>
      <button
        type='button'
        onClick={props.increment}
      >
        increment counter : {props.currentCount}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentCount: state.sampleCounter.count,
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increase(1));
  },
});

export const SamplePage = connect(mapStateToProps, mapDispatchToProps)(SamplePageView);
