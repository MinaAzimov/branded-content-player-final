import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullScenes extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		addStar: PropTypes.func,
		removeStar: PropTypes.func,
		jumpToSceneOne: PropTypes.func,
		jumpToSceneTwo: PropTypes.func,
		jumpToSceneThree: PropTypes.func,
		jumpToSceneFour: PropTypes.func,
	}

	constructor(props) {
		super(props);
	}

	

	render() {

		const { show, currentTime, fullAiCardShow, data, click, jumpToScene, addStar, removeStar, checkAiStarred, starredData, starredForScrolling } = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--in-scene': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2, 
		});

		// console.log(addAiStarred);

		const inSceneList = data.map((sceneItem, index) =>
			<div key={index}>
				<AiFullListItem
				fullAiCardShow={fullAiCardShow}
				type={sceneItem.type}
				image={sceneItem.image}
				title={sceneItem.title}
				subtitle={sceneItem.subtitle}
				ctas={sceneItem.ctas}
				addS={() => addStar(sceneItem)}
				removeS={() => removeStar(sceneItem.key)}
				addAiStarred={() => addStar(sceneItem)}
				removeAiStarred={() => removeStar(sceneItem)}
				checkAiStarred={() => checkAiStarred(sceneItem.key)}
				jumpToScene={this.props.jumpToScene}
				/>
			</div>
		);

		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<div className="in-scene-header">
							<a onClick={() => click()}><i className="iconcss icon-caret-left"></i><span>All Scenes</span></a>
							<div>
								{/*<i className="iconcss icon-scene"></i>
																<h3>Elliot looks for a clue</h3>*/}
							</div>
							<div></div>
						</div>
						{inSceneList}
					</div>
					<div className="list-column"></div>
				</div>
			</div>
			)
	}
}