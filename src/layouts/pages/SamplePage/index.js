import React from 'react';
import { connect } from 'react-redux';
import { CounterButton } from './dispatchers/counterButton';

const SamplePageView = props => {
  const button = props.createCounterButton();
  return (
    <div className='react-sample-area'>
      <button type='button' onClick={button.onClick}>
        {button.label}
      </button>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  createCounterButton: () => CounterButton,
};

export const SamplePage = connect(mapStateToProps, mapDispatchToProps)(SamplePageView);
