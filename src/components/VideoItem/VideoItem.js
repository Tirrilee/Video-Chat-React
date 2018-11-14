import React, { Component } from 'react';
import PropTypes from 'prop-types';

const VideoItem = (props) => (
  <div className="video-item-wrapper">
    <video className="video-item" ref={(ref) => {props.video = ref}}></video>
  </div>
);

VideoItem.propTypes = {
  video: PropTypes.any
};

export default VideoItem;
