import React, { Component } from 'react';
import CardComponent from './CardComponent';
import '../App.css';
import '../css/CardContainerComponent.css';
import user_hassan from '../images/hassan.png';

const FRONT_END_INTERNS = require('../data/front-end-interns').ALL;
const BACK_END_INTERNS = require('../data/back-end-interns').ALL;
const MOBILE_INTERNS = require('../data/mobile-interns').ALL;
const PRODUCTION_INTERNS = require('../data/production-interns').ALL;

const ALL_INTERNS = [FRONT_END_INTERNS, BACK_END_INTERNS, MOBILE_INTERNS, PRODUCTION_INTERNS];
const ORDER_OF_INTERNS = ['Front End Development', 'Back End Development', 'Mobile Development', 'Production/Data Engineering'];
class CardContainerComponent extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		position: this.props.position,
		displayedInterns: ALL_INTERNS[this.props.position],
		titleOfInterns: ORDER_OF_INTERNS[this.props.position]
	}

	showNextInterns = () => {
		const newPosition = this.state.position + 1;
		this.setState({
			position: newPosition,
			displayedInterns: ALL_INTERNS[newPosition],
			titleOfInterns: ORDER_OF_INTERNS[newPosition]
		});
	}

	showPreviousInterns = () => {
		const newPosition = this.state.position - 1;
		this.setState({
			position: newPosition,
			displayedInterns: ALL_INTERNS[newPosition],
			titleOfInterns: ORDER_OF_INTERNS[newPosition]
		});
	}

	render() {
		const card_columns = this.state.displayedInterns.map((intern, idx) =>
			<div key={idx} className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<CardComponent selectOrResetIntern={this.props.selectOrResetIntern} intern={intern} position={this.state.position}/>
			</div>
		);
		return (
			<div style={{height: '100%'}} className="card-container">
				<div className="menu-button-section">
					<button onClick={() => this.props.showOrHideHomepage()} className="menu-button"><i className="fa fa-graduation-cap"></i> Menu</button>
				</div>
				<div className="container-fluid">
					<div className="position-title">
						{this.state.titleOfInterns}
					</div>
					<div className="border"></div>
					<div className="row" style={{marginTop:'50px', marginBottom: '30px'}}> 
						{card_columns}
					</div>
					{(this.state.position !== 0) && <div className="left-arrow-section" onClick={() => this.showPreviousInterns()}>
						<span className="fa-stack fa-lg">
							 <i className="fa fa-circle-thin fa-stack-2x"></i>
	  						 <i className="fa fa-arrow-left fa-stack-1x"></i>
						</span>
					</div>}
					{(this.state.position !== (ALL_INTERNS.length - 1)) && <div className="right-arrow-section" onClick={() => this.showNextInterns()}>
						<span className="fa-stack fa-lg">
							 <i className="fa fa-circle-thin fa-stack-2x"></i>
	  						 <i className="fa fa-arrow-right fa-stack-1x"></i>
						</span>
					</div>}
				</div>
			</div>
		);
	}
}

export default CardContainerComponent;
