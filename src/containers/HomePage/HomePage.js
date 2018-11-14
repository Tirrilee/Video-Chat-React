import React, { Component } from 'react';

import VideoItem from '../../components/VideoItem';
import MediaHandler from '../../utils/MediaHandler';

class HomePage extends Component {
	constructor(){
	    super()
	    
	    this.state = {
	      // 미디어 권한 여부
	      hasMedia: false,
	      otherUserId: null
	    }
	    this.mediaHandler = new MediaHandler()
  	}
	// 페이지 로딩이 될때 
	// React LifeCycle 부분 확인
	componentWillMount() {
		// 미디어 권한 확인 후 영상 재생
		this.mediaHandler.getPermissions()
			.then((stream) => {
				this.setState({hasMedia: true})
				try{
					this.myVideo.srcObject = stream
				}
				catch (e){
					this.myVideo.src = URL.createObjectURL(stream)
				}
				this.myVideo.play()
			})
	}
  	render() {
    	return (
      		<div className="HomePage">
      			<VideoItem video={this.myVideo}/>
      		</div>
    	);
  	}
}

export default HomePage;
