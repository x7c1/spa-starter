import React from 'react';
import { connect } from 'react-redux';
import { counterButton } from './dispatchers/counterButton';

const SamplePageView = props => {
  const button = props.counterButton();
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
  counterButton,
};

export const SamplePage = connect(mapStateToProps, mapDispatchToProps)(SamplePageView);
