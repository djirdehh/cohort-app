import React, { Component } from 'react';
import '../App.css';
import '../css/WelcomeComponent.css';
import logo from '../the-cohort-logo.png';

class WelcomeComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="title-section">
		    		<img src={logo} className="logo" />
					<h3 className="title-heading">Cohort</h3>
					<div className="border"></div>
					<h3 className="title-subheading">Graduates from the Shopicruit internship program</h3>
					<div className="launch-button-section">
						<button onClick={() => this.props.showOrHideHomepage()} className="launch-button">Launch</button>
					</div>
				</div>
        	</div>
		);
	}
}

export default WelcomeComponent;
