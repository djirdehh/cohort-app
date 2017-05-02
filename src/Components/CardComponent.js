import React, { Component } from 'react';
import '../App.css';
import '../css/CardComponent.css';

class CardComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<figure className="profile" onClick={() => this.props.selectOrResetIntern(this.props.intern, this.props.position)}>
				<img src={this.props.intern.image} alt="profile-sample1" className="background" /><img src={this.props.intern.image} alt="profile-sample1" className="profile-image" />
				<figure-caption>
					<p>{this.props.intern.name}
						<span>{this.props.intern.mention}</span>
					</p>
				    <div className="icons">
				    	{(this.props.intern.github !== '') && <a href={this.props.intern.github} target="_blank">
				    		<i className="fa fa-github"></i>
				    	</a>}
				    	{(this.props.intern.personal_website !== '') && <a href={this.props.intern.personal_website} target="_blank"> 
				    		<i className="fa fa-user" aria-hidden="true"></i>
				    	</a>}
				    </div>
			  	</figure-caption>
			</figure>
		);
	}
}

export default CardComponent;
