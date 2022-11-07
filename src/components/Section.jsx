import styled from 'styled-components';
import React from 'react';
import { theme } from './theme';
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bolt};
  color: ${theme.colors.text};
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const Section = props => {
  return <Title>{props.title}</Title>;
};

Section.propTypes = {
  props: PropTypes.object,
};
