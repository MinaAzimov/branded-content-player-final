import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import AiSceneCard from './AiSceneCard';
import classNames from "classnames";

export default class AiFullScenes extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		showInScene: PropTypes.func,
		isFullScreen: PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.state = {
		
		}
	}

	render() {

		const { show, isFullScreen, showInScene, currentTime, jumpToScene, addAiStarred, checkAiStarred, removeAiStarred, starredData, starredForScrolling, data, sceneData } = this.props;


		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--scenes': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2, 
		});

		const numScenes = this.props.sceneData.length;
	

 		let empties;
 		(isFullScreen) ? 
 		(
			empties = (new Array(3 - (numScenes % 3)).fill('')).map((empty, index) =>
				<div key={index} >
					<div className="empty"></div>
					<div className="list-column-inner"></div>
				</div>
			)
 		) : ( 
 			(numScenes % 2 != 0) ? (
	 			empties = (new Array(2 - (numScenes % 2)).fill('')).map((empty, index) =>
					<div key={index} >
						<div className="empty"></div>
						<div className="list-column-inner"></div>
					</div>
				)
			) : null
 		);
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<div>
							<AiSceneCard
							data={data}
							sceneData={sceneData}
							currentTime={currentTime}
							showInScene={ () => showInScene(this.props.sceneData[0])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-1-lg.jpg"}
							title={"Elliot looks for a clue"}
							subtitle={"00:00:02 — 00:00:54"}
							ctas={[
								[
								"Go To Scene",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:5,type:"scene",image:"assets/img/scene-1.jpg",title:"Elliot Looks for a clue",subtitle:"00:00:02 — 00:00:54",ctas:[["Go To Scene", "iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(5)}
							checkAiStarred={() => checkAiStarred(5)}
							/>
							<div className="list-column-inner"></div>
						</div>
						<div>
							<AiSceneCard
							data={data}
							sceneData={sceneData}
							currentTime={currentTime}
							showInScene={ () => showInScene(this.props.sceneData[1])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-2-lg.jpg"}
							title={"Elliot learns more about what happened"}
							subtitle={"00:00:55 — 00:02:05"}
							ctas={[
								[
								"Go To Scene ",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:6,type:"scene",image:"assets/img/scene-2-lg.jpg",title:"Elliot learns more about what happened",subtitle:"00:00:55 — 00:02:05",ctas:[["Go To Scene ","iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(6)}
							checkAiStarred={() => checkAiStarred(6)}
							/>
							<div className="list-column-inner"></div>
						</div>
						<div>
							<AiSceneCard
							data={data}
							sceneData={sceneData}
							currentTime={currentTime}
							showInScene={ () => showInScene(this.props.sceneData[2])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-3-lg.jpg"}
							title={"Darlene and Fsociety take the final step"}
							subtitle={"00:02:06 — 00:03:19"}
							ctas={[
								[
								" Go To Scene",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:7,type:"scene",image:"assets/img/scene-3.jpg",title:"Darlene and Fsociety take the final step",subtitle:"00:02:06 — 00:03:19",ctas:[[" Go To Scene","iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(7)}
							checkAiStarred={() => checkAiStarred(7)}
							/>
							<div className="list-column-inner"></div>
						</div>
						<div>
							<AiSceneCard
							data={data}
							sceneData={sceneData}
							currentTime={currentTime}
							showInScene={ () => showInScene(this.props.sceneData[3])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-4-lg.jpg"}
							title={"Angela goes to buy shoes"}
							subtitle={"00:03:14 — 00:05:00"}
							ctas={[
								[
								" Go To Scene ",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:8,type:"scene",image:"assets/img/scene-4-lg.jpg",title:"Angela goes to buy shoes",subtitle:"00:03:14 — 00:05:00",ctas:[[" Go To Scene ","iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(8)}
							checkAiStarred={() => checkAiStarred(8)}
							/>

							<div className="list-column-inner"></div>
						</div>

						<div>
							<AiSceneCard
							data={data}
							sceneData={sceneData}
							currentTime={currentTime}
							showInScene={ () => showInScene(this.props.sceneData[4])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-5-lg.jpg"}
							title={"Elliot tests his limits"}
							subtitle={"00:05:00 — 00:06:48"}
							ctas={[
								[
								"    Go To Scene",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:25,type:"scene",image:"assets/img/scene-5-lg.jpg",title:"Elliot tests his limits",subtitle:"00:05:00 — 00:06:48",ctas:[["    Go To Scene","iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(25)}
							checkAiStarred={() => checkAiStarred(25)}
							/>

						   <div className="list-column-inner"></div>
						</div>

						{ empties }
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}