import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: rgba(51, 51, 51, 0.4);
  padding: 0.25em 1.5em;
  border-radius: 0.2vw;
  box-shadow: none;
  font-size: 1.1vw;
  margin-bottom: 0.75em;
  color: white;
  height: 100%;
  max-width: 15rem;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
    color: black;
  }
`;

const MainButton = ({ name }) => {
  return <StyledButton>{name}</StyledButton>;
};

MainButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MainButton;
