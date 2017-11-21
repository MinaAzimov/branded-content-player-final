import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullScenes extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		jumpToSceneOne: PropTypes.func,
		jumpToSceneTwo: PropTypes.func,
		jumpToSceneThree: PropTypes.func,
		jumpToSceneFour: PropTypes.func,

	}

	constructor(props) {
		super(props);
	}



	render() {

		const { show, currentTime, jumpToSceneOne, jumpToSceneTwo, jumpToSceneThree, jumpToSceneFour } = this.props;

	

		


		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--scenes': true
		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<AiFullListItem
						currentTime={currentTime}
						jumpToSceneOne={this.props.jumpToSceneOne}
						type={"scene"}
						image={"assets/img/scene-1.jpg"}
						title={"Elliot Looks for a clue"}
						subtitle={"00:00:02 — 00:00:54"}
						ctas={[
							[
							"Go To Scene",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						currentTime={currentTime}
						jumpToSceneTwo={this.props.jumpToSceneTwo}
						type={"scene"}
						image={"assets/img/scene-2.jpg"}
						title={"Elliot learns more about what happened"}
						subtitle={"00:00:55 — 00:02:05"}
						ctas={[
							[
							"Go To Scene ",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						currentTime={currentTime}
						jumpToSceneThree={this.props.jumpToSceneThree}
						type={"scene"}
						image={"assets/img/scene-3.jpg"}
						title={"Darlene and Fsociety take the final step"}
						subtitle={"00:02:06 — 00:03:19"}
						ctas={[
							[
							" Go To Scene",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						currentTime={currentTime}
						jumpToSceneFour={this.props.jumpToSceneFour}
						type={"scene"}
						image={"assets/img/scene-4.jpg"}
						title={"What am I supposed to do"}
						subtitle={"00:03:20 — 00:03:34"}
						ctas={[
							[
							" Go To Scene ",
							"iconcss icon-play-outline"
							]
						]}
						/>
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}