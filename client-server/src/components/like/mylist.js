import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const axios = require('axios');

const apiServer = 'http://localhost:8000';

const PostData = (userId, videoId, URL) => {
  axios.post(`${apiServer}/mylist/${URL}`, {
    params: {
      userId: `${userId}`,
      videoId,
    },
  });
};
const MylistBtn = ({ userId, thumbNailId }) => {
  const [Clicked, setClicked] = useState(false);
  const [mylist, setMylist] = useState(false);
  const contentText = mylist ? '✅' : '✚';

  useEffect(() => {
    if (mylist && Clicked) PostData(userId, thumbNailId, 'mylist-video');
    if (!mylist && Clicked) PostData(userId, thumbNailId, 'unMylist-video');
  }, [mylist]);

  const handleMylistClicked = () => {
    if (!Clicked) setClicked(true);
    setMylist(!mylist);
  };

  return (
    <div>
      <CheckBox id="checkbox2" type="checkbox" onClick={handleMylistClicked} />
      <CheckBoxLabel htmlFor="checkbox2">
        {contentText} 내가 찜한 콘텐츠
      </CheckBoxLabel>
    </div>
  );
};

const CheckBoxLabel = styled.label`
  background-color: gray;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  padding: 0.25em 1.5em;
  border-radius: 0.2vw;
  box-shadow: none;
  font-size: 1.1vw;
  margin-bottom: 0.75em;
  color: white;
  max-width: 15rem;
  margin: auto;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
    color: black;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  background-color: white;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
  }
`;

MylistBtn.propTypes = {
  userId: PropTypes.string.isRequired,
  thumbNailId: PropTypes.string.isRequired,
};

export default MylistBtn;
