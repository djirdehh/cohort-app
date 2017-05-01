import * as _ from 'lodash';
import React, { Component } from 'react';
import CardContainerComponent from './Components/CardContainerComponent';
import PostComponent from './Components/PostComponent';
import DetailsComponent from './Components/DetailsComponent';
import WelcomeComponent from './Components/WelcomeComponent';
import './App.css';

import hd_image from './images/hd.png';
import homepage_mp4_1 from './homepage_1/homepage_1.mp4';
import homepage_webm_1 from './homepage_1/homepage_1.webm';
import homepage_jpg_1 from './homepage_1/homepage_1.jpg';
import homepage_mp4_2 from './homepage_2/homepage_2.mp4';
import homepage_webm_2 from './homepage_2/homepage_2.webm';
import homepage_jpg_2 from './homepage_2/homepage_2.jpg';
import homepage_mp4_3 from './homepage_3/homepage_3.mp4';
import homepage_webm_3 from './homepage_3/homepage_3.webm';
import homepage_jpg_3 from './homepage_3/homepage_3.jpg';

const homepage_mp4_videos = [homepage_mp4_1, homepage_mp4_2, homepage_mp4_3];
const homepage_webm_videos = [homepage_webm_1, homepage_webm_2, homepage_webm_3];
const homepage_jpg_images = [homepage_jpg_1, homepage_jpg_2, homepage_jpg_3];

class App extends Component {

	state = {
		homepage: true,
		homepage_video_mp4: homepage_mp4_videos[0],
		homepage_video_webm: homepage_webm_videos[0],
		homepage_jpg_image: homepage_jpg_images[0],
		selectedIntern: null,
		showDetails: false,
		position: 0
	}

	
	showOrHideHomepage = () => {
		this.setState({
			homepage: this.state.homepage ? false : true,
			position: 0
		});
	}

	selectOrResetIntern = (intern, position) => {
		this.setState({
			selectedIntern: intern,
			position: position
		});
	}

	showOrHideDetails = () => {
		this.setState({
			showDetails: this.state.showDetails ? false : true
		});
	}

	componentDidMount() {
		const rand_video_mp4 = homepage_mp4_videos[Math.floor(Math.random() * homepage_mp4_videos.length)];
		const rand_video_webm = homepage_webm_videos[Math.floor(Math.random() * homepage_webm_videos.length)];
		const rand_jpg_image = homepage_webm_videos[Math.floor(Math.random() * homepage_webm_videos.length)];

		this.setState({
			homepage_video_mp4: rand_video_mp4,
			homepage_video_webm: rand_video_webm,
			homepage_jpg_image: rand_jpg_image
		});
	}

	render() {
		return (
		  <div className="app">
		  	<div className="homepage-hero-module">
			    <div className="video-container">
			    	<div className="filter" style={(this.state.homepage) ? {background: 'rgba(0, 0, 0, 0.4)'} : {background: 'rgba(0, 0, 0, 0.7)'}}></div>
			    	{(this.state.homepage) && <WelcomeComponent showOrHideHomepage={this.showOrHideHomepage}/>}
		  			{(!this.state.homepage && _.isNil(this.state.selectedIntern)) && <CardContainerComponent selectOrResetIntern={this.selectOrResetIntern} showOrHideHomepage={this.showOrHideHomepage} position={this.state.position}/>}
		  			{(!this.state.homepage && !_.isNil(this.state.selectedIntern)) && <PostComponent selectedIntern={this.state.selectedIntern} selectOrResetIntern={this.selectOrResetIntern} position={this.state.position}/>}
			        <video id="background-video" loop autoPlay>
		                <source src={this.state.homepage_video_mp4} type="video/mp4" />
		                <source src={this.state.homepage_video_webm} type="video/webm" />
		                Your browser does not support the video tag.
		            </video>
			    </div>
			</div>
		  </div>
		);
	}
}

export default App;
