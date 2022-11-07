import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import styled from 'styled-components';

const View = styled.div`
  padding-left: 50px;
`;

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addStateFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  let positivFeedbackPercent;

  const sumFeedback = good + neutral + bad;
  if (sumFeedback !== 0) {
    positivFeedbackPercent = ((good + neutral) * 100) / sumFeedback;
  } else positivFeedbackPercent = 0;

  return (
    <View>
      <Section title="Please leave feedback" />
      <FeedbackOptions option={addStateFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={sumFeedback}
        percent={Math.round(positivFeedbackPercent)}
      />
    </View>
  );
}
