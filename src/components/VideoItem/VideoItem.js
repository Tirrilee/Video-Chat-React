import React, { Component } from 'react';
import PropTypes from 'prop-types';

const VideoItem = (video) => (
  <div className="video-item-wrapper">
    <video className="video-item" ref={(ref) => {video = ref}}></video>
  </div>
);

VideoItem.propTypes = {
  video: PropTypes.any
};

export default VideoItem;
