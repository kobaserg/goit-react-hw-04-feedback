import styled from 'styled-components';
import React from 'react';
import { theme } from './theme';
import PropTypes from 'prop-types';

const Btnbox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const Button = styled.button`
  padding: ${theme.sizes.btnPadding};
  background-color: ${theme.colors.btnBackground};
  color: ${theme.colors.btnColorSweet};
  border-radius: ${theme.radii.normal};
  cursor: pointer;
  border: none;
  :hover,
  :focus {
    background-color: ${theme.colors.accentBackground};
    color: ${theme.colors.btnColorDarc};
  }
  :last-child {
    margin-right: 0px;
  }
`;

export const FeedbackOptions = ({ option }) => {
  return (
    <Btnbox>
      <Button type="button" name="good" onClick={e => option(e.target.name)}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={e => option(e.target.name)}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={e => option(e.target.name)}>
        Bad
      </Button>
    </Btnbox>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.func,
};
