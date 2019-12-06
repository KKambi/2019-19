import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const VolumeModalWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 128px;
  height:  42.4px;
  position: absolute;
  cursor: pointer;
  display: flex;
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')}
  opacity: ${props => (props.isActive ? 1 : 0)}
  transform: rotate(270deg) translateX(5em) translateY(-2em);
  transition: all ease 0.25s;
  will-change: transform, opacity;
  `;

const VolumeBackground = styled.div`
  width: 8em;
  height: 1.3em;
  position: absolute;
  margin: 0;
  background: black;
  border-radius: 0.3em;
`;

const VolumeInput = styled.input`
  width: 7.5em;
  position: absolute;
  cursor: pointer;
  margin: 0;
  -webkit-appearance: none;
  background: transparent;

  ::-moz-range-thumb {
    width: 1.1em;
    height: 1.1em;
    border: none;
    background: ${props => props.theme.MainColor};
    transition: all ease 0.25s;
  }

  ::-moz-range-progress {
    height: 0.5em;
    transition: all ease 0.25s;
    background: ${props => props.theme.MainColor};
  }

  ::-moz-range-track {
    height: 0.5em;
    transition: all ease 0.25s;
    background: ${props => props.theme.SliderColor2};
  }

  ::-webkit-slider-thumb {
<<<<<<< HEAD
    -webkit-appearance: none;
    width: 1.1em;
    height: 1.1em;
    margin-top: -4px;
    border: none;
    border-radius: 10px;
=======
    width: 1.1em;
    height: 1.1em;
    border: none;
>>>>>>> dfb3e2d75c7fa8e0b363b4c13244b9563f7ba08b
    background: ${props => props.theme.MainColor};
    transition: all ease 0.25s;
  }

  ::-webkit-slider-runnable-track {
<<<<<<< HEAD
    -webkit-appearance: none;
=======
>>>>>>> dfb3e2d75c7fa8e0b363b4c13244b9563f7ba08b
    height: 0.5em;
    transition: all ease 0.25s;
    background: ${props => props.theme.SliderColor2};
  }

  ::-ms-thumb {
    width: 1.1em;
    height: 1.1em;
    border: none;
    background: ${props => props.theme.MainColor};
    transition: all ease 0.25s;
  }

  ::-ms-track {
    height: 0.5em;
    transition: all ease 0.25s;
    background: ${props => props.theme.SliderColor2};
  }

  ::-ms-fill-lower {
    background: ${props => props.theme.SliderColor2};
  }

  ::-ms-fill-upper {
    background: ${props => props.theme.SliderColor2};
  }
`;

const VolumeModal = ({
  volume,
  handleVolumeChange,
  hoverName,
  setHoverName,
}) => {
  const [isActive, setIsActive] = useState(false);

  /* For Hover Effect */
  const checkActive = () => {
    if (hoverName === 'volume') setIsActive(true);
    else setIsActive(false);
  };

  useEffect(() => {
    checkActive();
  }, [hoverName]);

  /* Handle Pointer Event */
  const handlePointerEnter = () => {
    setHoverName('volume');
  };

  const handlePointerLeave = () => {
    setHoverName('');
  };

  return (
    <VolumeModalWrapper
      isActive={isActive}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <VolumeBackground />
      <VolumeInput
        type="range"
        min={0}
        max={1}
        step="any"
        value={volume}
        onChange={handleVolumeChange}
      />
    </VolumeModalWrapper>
  );
};

export default VolumeModal;
