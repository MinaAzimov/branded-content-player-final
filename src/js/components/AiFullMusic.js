import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullMusic extends Component {

	static propTypes = {
		show: PropTypes.bool,
		jumpToSceneEight: PropTypes.func,
		jumpToSceneNine: PropTypes.func,
		jumpToSceneTen: PropTypes.func,
		
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling  } = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--music': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2
		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<AiFullListItem
						jumpToScene={this.props.jumpToScene}
						type={"music"}
						image={"assets/img/sound-and-color-lg.jpg"}
						title={"Sound and Color"}
						subtitle={"Alabama Shakes"}
						ctas={[[
							"View Song",
							"iconcss icon-music",
							"https://open.spotify.com/track/65wx71brAmEQz66GXXF8gI"
							],
							[
							"Go To Scene     ",
							"iconcss icon-play-outline"
							]
						]}
						addAiStarred={()  => addAiStarred({key:1,type:"music",image:"assets/img/sound-and-color-lg.jpg",title:"Sound and Color",subtitle:"Alabama Shakes",ctas:[["View Song","iconcss icon-music","https://open.spotify.com/track/65wx71brAmEQz66GXXF8gI"],["Go To Scene     ","iconcss icon-play-outline"]]})}
						removeAiStarred={() => removeAiStarred(1)}
						checkAiStarred={() => checkAiStarred(1)}
						/>
						<AiFullListItem
						type={"music"}
						jumpToScene={this.props.jumpToScene}
						image={"assets/img/world-destruction.jpg"}
						title={"World Destruction (feat. John Lydon)"}
						subtitle={"Time Zone feat. John Lydon"}
						ctas={[[
							"View Song ",
							"iconcss icon-music",
							"https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"
							],
							[
							"Go To Scene      ",
							"iconcss icon-play-outline"
							]
						]}
						addAiStarred={()  => addAiStarred({key:9,type:"music",image:"assets/img/world-destruction.jpg",title:"World Destruction (feat. John Lydon)",subtitle:"Time Zone feat. John Lydon",ctas:[["View Song ","iconcss icon-music","https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"],["Go To Scene      ","iconcss icon-play-outline"]]})}
						removeAiStarred={() => removeAiStarred(9)}
						checkAiStarred={() => checkAiStarred(9)}
						/>
						<AiFullListItem
						type={"music"}
						jumpToScene={this.props.jumpToScene}
						image={"assets/img/people-who-died.jpg"}
						title={"People Who Died"}
						subtitle={"The Jim Caroll Band"}
						ctas={[[
							"View Song  ",
							"iconcss icon-music",
							"https://open.spotify.com/track/6taFIgW5YE94x1icBh5vTg"
							],
							[
							"Go To Scene       ",
							"iconcss icon-play-outline"
							]
						]}
						addAiStarred={()  => addAiStarred({key:10,type:"music",image:"assets/img/people-who-died.jpg",title:"People Who Died",subtitle:"The Jim Caroll Band",ctas:[["View Song  ","iconcss icon-music","https://open.spotify.com/track/6taFIgW5YE94x1icBh5vTg"],["Go To Scene       ","iconcss icon-play-outline"]]})}
						removeAiStarred={() => removeAiStarred(10)}
						checkAiStarred={() => checkAiStarred(10)}
						/>

					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}