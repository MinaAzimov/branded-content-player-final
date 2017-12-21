import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import AiFullExpandingText from './AiFullExpandingText';
import AiCardFlip from './AiCardFlip';
import AiFullSlider from './AiFullSlider';
import TextTruncate from 'react-text-truncate';
import AiFullCtas from './AiFullCtas';
import AiPreviewStar from './AiPreviewStar';
import AiListStar from './AiListStar';
import classNames from "classnames";

export default class AiFullCharacter extends Component {

	static propTypes = {
		show: PropTypes.bool,
		click: PropTypes.func,
		person: PropTypes.object
	}

	constructor() {
		super();
		this.state = {
	    	flipped: false
	    };
	}

	flip = () => {
		this.setState({
	    	flipped: !this.state.flipped
	    });		
	}



	render() {

		let { show, click, person, addAiStarred, checkAiStarred, removeAiStarred, data,  ctas, addS, removeS, jumpToScene, fullAiCardShow } = this.props;
		
		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--character': true
		});
 		
		return (
			<div className={classnames}>
				<div className="list-column"></div>
				<div className="col">
					<a className="link" onClick={click}>
						<i className="iconcss icon-caret-left"></i>
						<span>All People</span>
					</a>
					<AiCardFlip
					frontImg={person.characterImage}
					backImg={person.actorImage}
					flipped={this.state.flipped}
					flip={this.flip}
					/>
					
					
					
				
				</div>
				<div className="list-scrolling">
					<div className="col">
						<div className="row">
							<h2>{this.state.flipped ? person.actorName : person.characterName}
								<AiPreviewStar
					            add={()  => addAiStarred({key: person.key, type: person.type, image: person.image, title: person.title, subtitle:person.subtitle, ctas:person.ctas})}
				                remove={() => removeAiStarred(person.key)}
				                starred={() => checkAiStarred(person.key)}
					            />
					        </h2>

							<h3>
								<span>{this.state.flipped ? 'As' : 'By'}</span> 
								<a onClick={this.flip}>
									{this.state.flipped ? person.characterName : person.actorName}
								</a>								
								<i className="iconcss icon-swap"></i>
								
								
							
							</h3>
						</div>
						<div className="row">
							{ this.state.flipped ? (
								<AiFullExpandingText 
								bodyText={person.actorBio}
								flipped={ this.state.flipped }
								numLines={ 4 }
								/>
							) : (
								<AiFullExpandingText
								bodyText={person.characterBio}
								flipped={ this.state.flipped }
								numLines={ 4 }
								/>
							)
							}
						</div>
						{ this.state.flipped ? (
							<div className="row">
								<AiFullSlider
								otherWorks={person.otherWorks}
								/>
							</div>
						) :
						null
						}
					</div>
				</div>
				<div className="list-column"></div>
			</div>
		)
	}
}