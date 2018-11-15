import React, { Component } from 'react';
import PropTypes from 'prop-types';


class VideoItem extends Component {
  	render() {
	    return (
	    	<div className="video-item-wrapper">
				<video className="video-item" ref={this.props.video}></video>
			</div>
	    )
	}	
}

export default VideoItem;
