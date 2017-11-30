import React, { Component, PropTypes } from 'react';
import AiFullScenes from './AiFullScenes';
import AiFullPeople from './AiFullPeople';
import AiFullCharacter from './AiFullCharacter';
import AiFullMusic from './AiFullMusic';
import AiFullStarred from './AiFullStarred';
import AiFullTrivia from './AiFullTrivia';
import AiFullProducts from './AiFullProducts';

import classNames from "classnames";


export default class AiFull extends Component {

	static propTypes = {
		show: PropTypes.bool,
		close: PropTypes.func,
		showing: PropTypes.string,
		goToPage: PropTypes.func,
		personData: PropTypes.object,
		starredData: PropTypes.array,
		addAiStarred: PropTypes.func,
		removeAiStarred: PropTypes.func,
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
		currentTime: PropTypes.number,
	}

	constructor(props) {
		super(props);
	    this.state = {
	    	person: {}
	    };
	}

	loadCharacter = (e) => {
	    this.setState({
	    	person: e
	    });
	}

	render() {

		const { show, close, isFullScreen, showing, goToPage, personData, starredData, addAiStarred, removeAiStarred, currentTime, jumpToSceneOne, jumpToSceneTwo, jumpToSceneThree, jumpToSceneFour, jumpToSceneFive, jumpToSceneSix, jumpToSceneSeven, jumpToSceneEight, jumpToSceneNine, jumpToSceneTen, jumpToSceneEleven, jumpToSceneTwelve, jumpToSceneThirteen, jumpToSceneFourteen, jumpToSceneFifteen, jumpToSceneSixteen, jumpToSceneSeventeen } = this.props;


 		const classnames = classNames({
 			'ai-full': true,
 			'ai-full--show': show
 		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="navigation">
						<nav>
							<span>
								<i className="iconcss icon-vai"></i> 
								{ /* <svg viewBox="0 0 100 100">
								   <use xlinkHref='assets/img/vai.svg'></use>
								</svg> */ }
								{ /* <img src='assets/img/vai.svg'></img> */ }
							</span>
							<a className={(showing == 'scenes') ? 'active' : null } onClick={ () => goToPage('scenes')}>Scenes</a>
							<a className={(showing == 'people' || showing == 'character') ? 'active' : null } onClick={() => goToPage('people')}>People</a>
							<a className={(showing == 'products') ? 'active' : null } onClick={() => goToPage('products')}>Products</a>
							<a className={(showing == 'music') ? 'active' : null } onClick={() => goToPage('music')}>Music</a>
							<a className={(showing == 'trivia') ? 'active' : null } onClick={() => goToPage('trivia')}>Trivia</a>
							<hr/>
							<a className={(showing == 'starred') ? 'active' : null } onClick={() => goToPage('starred')}>
								<i className="iconcss icon-star-fill"></i>
								Starred
							</a>
						</nav>
						<div className="close" onClick={ this.props.close }>
							<i className="iconcss icon-close"></i>
						</div>
					</div>
					<AiFullScenes 
					show={ showing == 'scenes' }
					currentTime={currentTime}
					jumpToSceneOne={this.props.jumpToSceneOne}
					jumpToSceneTwo={this.props.jumpToSceneTwo}
					jumpToSceneThree={this.props.jumpToSceneThree}
					jumpToSceneFour={this.props.jumpToSceneFour}

					/>
					<AiFullPeople
					isFullScreen={ isFullScreen }
					show={ showing == 'people' }
					click={ goToPage }
					/>
					{ personData != null ? (
					<AiFullCharacter 
					show={ showing == 'character' }
					click={ () => goToPage('people') }
					person={ personData }
					/>
					) : null }
					<AiFullMusic 
					show={ showing == 'music' }
					jumpToSceneEight={this.props.jumpToSceneEight}
					jumpToSceneNine={this.props.jumpToSceneNine}
					jumpToSceneTen={this.props.jumpToSceneTen}
					/>
					<AiFullStarred 
					isFullScreen={this.props.isFullScreen}
					show={ showing == 'starred' }
					data={ starredData }
					addStar={ addAiStarred }
					removeStar={ removeAiStarred }
					jumpToSceneFourteen={this.props.jumpToSceneFourteen}
					jumpToSceneFifteen={this.props.jumpToSceneFifteen}
					jumpToSceneSixteen={this.props.jumpToSceneSixteen}
					jumpToSceneSeventeen={this.props.jumpToSceneSeventeen}
				
					/>
					<AiFullTrivia 
					show={ showing == 'trivia' }
					jumpToSceneEleven={this.props.jumpToSceneEleven}
					jumpToSceneTwelve={this.props.jumpToSceneTwelve}
					jumpToSceneThirteen={this.props.jumpToSceneThirteen}
					/>
					<AiFullProducts 
					show={ showing == 'products' }
					currentTime={currentTime}
					jumpToSceneFive={this.props.jumpToSceneFive}
					jumpToSceneSix={this.props.jumpToSceneSix}
					jumpToSceneSeven={this.props.jumpToSceneSeven}
				
					/>
				</div>
			</div>
		)
	}
}