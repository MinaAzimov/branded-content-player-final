import React, { Component, PropTypes } from 'react';
import AiFullCtas from './AiFullCtas';
import AiFullStar from './AiFullStar';
import AiFullExpandingText from './AiFullExpandingText';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";


export default class AiFullListItem extends Component {

	static propTypes = {
		type: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		quote: PropTypes.string,	
		image: PropTypes.string,
		ctas: PropTypes.array,
		addS: PropTypes.func,
		removeS: PropTypes.func,
		currentTime: PropTypes.number,
		jumpToSceneOne: PropTypes.func,
		jumpToSceneTwo: PropTypes.func,
		jumpToSceneThree: PropTypes.func,
		jumpToSceneFour: PropTypes.func,
		jumpToSceneFive: PropTypes.func,
		jumpToSceneSix: PropTypes.func,
		jumpToSceneSeven: PropTypes.func,
		jumpToSceneEight: PropTypes.func,
		jumpToSceneNine: PropTypes.func,
		jumpToSceneTen: PropTypes.func,
		jumpToSceneEleven: PropTypes.func,
		jumpToSceneTwelve: PropTypes.func,
		jumpToSceneThirteen: PropTypes.func,
		jumpToSceneFourteen: PropTypes.func,
	    jumpToSceneFifteen: PropTypes.func,
		jumpToSceneSixteen: PropTypes.func,
		jumpToSceneSeventeen: PropTypes.func,
	}

	constructor(props) {
		super(props);
	}

	hideItem = () => {
		this.setState({
			hidingItem: true
		});
	}

	componentWillMount = () => {
		this.setState({
			hidingItem: false
		});
	}

	render() {

		const { type, image, title, subtitle, quote, ctas, addS, removeS, jumpToSceneOne, jumpToSceneTwo, jumpToSceneThree, jumpToSceneFour, jumpToSceneFive, jumpToSceneSix, jumpToSceneSeven, jumpToSceneEight, jumpToSceneNine, jumpToSceneTen, jumpToSceneEleven, jumpToSceneTwelve, jumpToSceneThirteen, jumpToSceneFourteen, jumpToSceneFifteen, jumpToSceneSixteen, jumpToSceneSeventeen,  currentTime } = this.props;


		const classnames = classNames({
 			'ai-preview-list-item': true,
 			'ai-preview-list-item--person': type == 'person',
 			'ai-preview-list-item--music': type == 'music',
 			'ai-preview-list-item--product': type == 'product',
 			'ai-preview-list-item--trivia': type == 'trivia',
 			'ai-preview-list-item--scene': type == 'scene',
 			'ai-preview-list-item--hiding-item': this.state.hidingItem
 		});

 		const iconClassname = classNames({
 			'iconcss': true,
 			'icon-person': type == 'person',
 			'icon-music': type == 'music',
 			'icon-product': type == 'product',
 			'icon-trivia': type == 'trivia',
 			'icon-scene': type == 'scene'
 		});
 		
		return (
			(type != 'trivia') ? (
				<div className={classnames}>
					<div className="mask">
						<img src={image}></img>
					</div>
					<div className="text">
						<h2>
							<i className={iconClassname}></i>
							<span>{title}</span>
						</h2>
						<h3>
							<span>{subtitle}</span>
						</h3>
					</div>
					<AiFullStar
					add={ addS }
					remove={ removeS }
					hideParent={ this.hideItem }
					/>
					<AiFullCtas
					currentTime={currentTime} 
					jumpToSceneOne={this.props.jumpToSceneOne}
					jumpToSceneTwo={this.props.jumpToSceneTwo}
					jumpToSceneThree={this.props.jumpToSceneThree}
					jumpToSceneFour={this.props.jumpToSceneFour}
					jumpToSceneFive={this.props.jumpToSceneFive}
					jumpToSceneSix={this.props.jumpToSceneSix}
					jumpToSceneSeven={this.props.jumpToSceneSeven}
					jumpToSceneEight={this.props.jumpToSceneEight}
					jumpToSceneNine={this.props.jumpToSceneNine}
					jumpToSceneTen={this.props.jumpToSceneTen}
					jumpToSceneEleven={this.props.jumpToSceneEleven}
					jumpToSceneTwelve={this.props.jumpToSceneTwelve}
					jumpToSceneThirteen={this.props.jumpToSceneThirteen}
					jumpToSceneFourteen={this.props.jumpToSceneFourteen}
					jumpToSceneFifteen={this.props.jumpToSceneFifteen}
					jumpToSceneSixteen={this.props.jumpToSceneSixteen}
					jumpToSceneSeventeen={this.props.jumpToSceneSeventeen}
					ctas={ctas}
					/>
				</div>
			) 
			:
			( 
				<div className={classnames}>
					<div className="mask">
						<img src={image}></img>
					</div>
					<div className="text">
						<h2>
							<i className={iconClassname}></i>
							<span>{title}</span>
						</h2>
						<h3>{subtitle}</h3>
						<AiFullExpandingText 
						bodyText={quote}
						numLines={ 3 }
						/>
					</div>
					<AiFullCtas 
					ctas={ctas}
					currentTime={currentTime} 
					jumpToSceneOne={this.props.jumpToSceneOne}
					jumpToSceneTwo={this.props.jumpToSceneTwo}
					jumpToSceneThree={this.props.jumpToSceneThree}
					jumpToSceneFour={this.props.jumpToSceneFour}
					jumpToSceneFive={this.props.jumpToSceneFive}
					jumpToSceneSix={this.props.jumpToSceneSix}
					jumpToSceneSeven={this.props.jumpToSceneSeven}
					jumpToSceneEight={this.props.jumpToSceneEight}
					jumpToSceneNine={this.props.jumpToSceneNine}
					jumpToSceneTen={this.props.jumpToSceneTen}
					jumpToSceneEleven={this.props.jumpToSceneEleven}
					jumpToSceneTwelve={this.props.jumpToSceneTwelve}
					jumpToSceneThirteen={this.props.jumpToSceneThirteen}
					jumpToSceneFourteen={this.props.jumpToSceneFourteen}
					jumpToSceneFifteen={this.props.jumpToSceneFifteen}
					jumpToSceneSixteen={this.props.jumpToSceneSixteen}
					jumpToSceneSeventeen={this.props.jumpToSceneSeventeen}
					/>
				</div>
			)
		)
	}
}