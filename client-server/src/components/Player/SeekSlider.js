import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Slider = styled.input`
  width: 100%;
  cursor: pointer;
  margin: 0;

  -webkit-appearance: none;
  background-color: transparent;

  ::-moz-range-thumb {
    width: 1.1em;
    height: 1.1em;
    border: none;
    background: ${props => props.theme.MainColor};
    transition: all ease 0.25s;
  }

  :hover::-moz-range-thumb {
    transform: scale(1.1);
  }

  ::-moz-range-progress {
    height: 0.25em;
    transition: all ease 0.25s;
    background: ${props => props.theme.MainColor};
  }

  :hover::-moz-range-progress {
    height: 0.5em;
  }

  ::-moz-range-track {
    height: 0.25em;
    transition: all ease 0.25s;
    background: ${props => props.theme.SliderColor2};
  }

  :hover::-moz-range-track {
    height: 0.5em;
  }

  ::-webkit-slider-thumb {
<<<<<<< HEAD
    -webkit-appearance: none
    width: 1.1em;
    height: 1.1em;
    margin-top: -5.25px;
    border: none;
    border-radius: 10px;
    background: ${props => props.theme.MainColor};
    transition: all ease 0.25s;
  }

  :hover::-webkit-slider-thumb {
    width: 1.35em;
    height: 1.35em;
  }

  ::-webkit-slider-runnable-track {
    height: 0.25em;
    transition: all ease 0.25s;
=======
    border: none;
    background: ${props => props.theme.MainColor};
  }

  :hover::-webkit-slider-thumb {
    transform: scale(1.1);
  }

  ::-webkit-slider-runnable-track {
>>>>>>> dfb3e2d75c7fa8e0b363b4c13244b9563f7ba08b
    background: ${props => props.theme.SliderColor2};
  }

  :hover::-webkit-slider-runnable-track {
    height: 0.5em;
  }

  ::-ms-thumb {
<<<<<<< HEAD
    width: 1.1em;
    height: 1.1em;
    border: none;
    background: ${props => props.theme.MainColor};
    transition: all ease 0.25s;
=======
    border: none;
    background: ${props => props.theme.MainColor};
>>>>>>> dfb3e2d75c7fa8e0b363b4c13244b9563f7ba08b
  }

  :hover::-ms-thumb {
    transform: scale(1.1);
  }

  ::-ms-track {
<<<<<<< HEAD
    height: 0.25em;
    transition: all ease 0.25s;
    background: ${props => props.theme.MainColor};
=======
    background: ${props => props.theme.SliderColor2};
>>>>>>> dfb3e2d75c7fa8e0b363b4c13244b9563f7ba08b
  }

  :hover::-ms-track {
    height: 0.5em;
  }

  ::-ms-fill-lower {
<<<<<<< HEAD
    background: ${props => props.theme.MainColor};
=======
    background: ${props => props.theme.SliderColor2};
>>>>>>> dfb3e2d75c7fa8e0b363b4c13244b9563f7ba08b
  }

  ::-ms-fill-upper {
    background: ${props => props.theme.SliderColor2};
  }
`;

const SeekSlider = ({
  duration,
  playedSeconds,
  handleSeekSliderMouseDown,
  handleSeekSliderChange,
  handleSeekSliderMouseUp,
}) => {
  return (
    <>
      <Slider
        type="range"
        min={0}
        max={duration}
        step="any"
        value={playedSeconds}
        onMouseDown={handleSeekSliderMouseDown}
        onChange={handleSeekSliderChange}
        onMouseUp={handleSeekSliderMouseUp}
      />
    </>
  );
};

SeekSlider.propTypes = {
  duration: PropTypes.number.isRequired,
  playedSeconds: PropTypes.number.isRequired,
  handleSeekSliderMouseDown: PropTypes.func.isRequired,
  handleSeekSliderChange: PropTypes.func.isRequired,
  handleSeekSliderMouseUp: PropTypes.func.isRequired,
};

export default SeekSlider;
