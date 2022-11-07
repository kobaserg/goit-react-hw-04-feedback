import styled from 'styled-components';
import { theme } from './theme';
import PropTypes from 'prop-types';

const Stat = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.normal};
`;

const Notstat = styled.h2`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bolt};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: inline-flex;
  width: 170px;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: ${theme.fontWeights.bolt};
`;

export const Statistics = props => {
  return (
    <div>
      <Stat>Statistics</Stat>
      {props.total === 0 ? (
        <Notstat>There is no feedback</Notstat>
      ) : (
        <List>
          <Item>
            <span>Good :</span>
            <span>{props.good}</span>
          </Item>
          <Item>
            <span>Neutral :</span>
            <span>{props.neutral}</span>
          </Item>
          <Item>
            <span>Bad :</span>
            <span>{props.bad}</span>
          </Item>
          <Item>
            <span>Total : </span>
            <span>{props.total}</span>
          </Item>
          <Item>
            <span>Positive feedback :</span>
            <span>{props.percent}%</span>
          </Item>
        </List>
      )}
    </div>
  );
};

Statistics.propTypes = {
  props: PropTypes.object,
};
