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
		jumpToScene: PropTypes.func,
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

		const { show, close, isFullScreen, showing, goToPage, personData, starredData, addAiStarred, resetStarredItemState, checkAiStarred, removeAiStarred, currentTime, jumpToScene, fullAiCardShow, starredForScrolling } = this.props;



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
								{ /* <i className="iconcss icon-vai"></i> */ }
								{ /* <svg viewBox="0 0 100 100">
								   <use xlinkHref='assets/img/vai.svg'></use>
								</svg> */ }
								{  <img src='assets/img/vai.svg'></img> }
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
					starredForScrolling={starredForScrolling}
					starredData={starredData}
					show={ showing == 'scenes' }
					currentTime={currentTime}
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					<AiFullPeople
					isFullScreen={ isFullScreen }
					show={ showing == 'people' }
					click={ goToPage }
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					{ personData != null ? (
					<AiFullCharacter 
					show={ showing == 'character' }
					click={ () => goToPage('people') }
					person={ personData }
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					) : null }
					<AiFullMusic 
					starredForScrolling={starredForScrolling}
					show={ showing == 'music' }
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					<AiFullStarred 
					fullAiCardShow={fullAiCardShow}
					isFullScreen={this.props.isFullScreen}
					show={ showing == 'starred' }
					data={ starredData }
					addStar={ addAiStarred }
					checkAiStarred={checkAiStarred}
					removeStar={ removeAiStarred }
					checkAiStarred={this.props.checkAiStarred}
					jumpToScene={this.props.jumpToScene}
				
					/>
					<AiFullTrivia 
					starredForScrolling={starredForScrolling}
					show={ showing == 'trivia' }
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					<AiFullProducts 
					starredForScrolling={starredForScrolling}
					show={ showing == 'products' }
					currentTime={currentTime}
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
				
					/>
				</div>
			</div>
		)
	}
}