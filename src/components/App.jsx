import React from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import styled from 'styled-components';

const View = styled.div`
  padding-left: 50px;
`;

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStateFeedback = nameState => {
    this.setState(prevState => ({
      [nameState]: prevState[nameState] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback())
      return (
        ((this.state.good + this.state.neutral) * 100) /
        this.countTotalFeedback()
      );
    return 0;
  };

  render() {
    return (
      <View>
        <Section title="Please leave feedback" />
        <FeedbackOptions option={this.addStateFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percent={Math.round(this.countPositiveFeedbackPercentage())}
        />
      </View>
    );
  }
}
