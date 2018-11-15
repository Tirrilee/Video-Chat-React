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
	// 참고 - React LifeCycle 부분 확인
	componentWillMount() {
		// 미디어 권한 확인 후 영상 재생
		this.mediaHandler.getPermissions()
			.then((stream) => {
				// console.log(this)
				// childNode로 보낼 _myVideo라는 ref 객체 생성
				this._myVideo = React.createRef()
				// state를 변경하고
				this.setState({hasMedia: true})
				// _myVideo 속성 값들을 설정한다.
				try{
					this._myVideo.current.srcObject = stream
				}
				catch (e){
					this._myVideo.current.src = URL.createObjectURL(stream)
				}
				this._myVideo.current.play()
			})
	}
	
  	render() {
    	return (
      		<div className="HomePage">
      			{/* VideoItem 컴포넌트에 props로 ref 객체를 넘긴다. */}
			  	<VideoItem video={this._myVideo}/>
      		</div>
    	);
  	}
}

export default HomePage;
