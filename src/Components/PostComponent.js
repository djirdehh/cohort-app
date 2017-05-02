import React, { Component } from 'react';
import '../App.css';
import '../css/PostComponent.css';
	
class PostComponent extends Component {
	render() {
		return (
			<div className="post-container">
				<div className="return-button-section">
					<button onClick={() => this.props.selectOrResetIntern(null, this.props.position)} className="return-button"><i className="fa fa-arrow-left"></i> Return</button>
				</div>
				<div className="post-component-box">
					<div className="container welcome-details-block">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: 0}}>
								<div className="user-posting-section">
									<div className="user">
										<div className="user-details">
											<div className="user-link">
			 									<div className="profile-picture" style={{backgroundImage: `url(${this.props.selectedIntern.image})`}}></div>
			 									{this.props.selectedIntern.name}
			 									<span className="date">Jan - May 2017 <i style={{fontWeight: 700}} className="fa fa-globe"></i></span>
		 									</div>
		 								</div>
		 								<span className="user-menu"><i className="fa fa-ellipsis-h"></i></span>
									</div>
									<div className="posting">
										{this.props.selectedIntern.cohort_message}
									</div>
									<div><img className="user-img" src={this.props.selectedIntern.cohort_image} alt=""/></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PostComponent;
