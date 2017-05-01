import React, { Component } from 'react';
import '../App.css';
import '../css/DetailsComponent.css';
import user_hassan from '../images/hassan.png';

class DetailsComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{height: '80vh'}}>
				<div className="aligner">
					<div className="return-button-section">
						<button onClick={this.props.showOrHideDetails} className="return-button"><i className="fa fa-arrow-left"></i> Return</button>
					</div>
					<div className="app-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</div>
		);
	}
}

export default DetailsComponent;
