import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiFullTrivia extends Component {

	static propTypes = {
		show: PropTypes.bool,
		jumpToSceneEleven: PropTypes.func,
		jumpToSceneTwelve: PropTypes.func,
		jumpToSceneThirteen: PropTypes.func,
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling} = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--trivia': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2
		});
 		
		return (
			<div className={classnames}>
				<div className="list-column"></div>
				<div className="list-scrolling">
					<AiFullListItem
					type={"trivia"}
					jumpToScene={this.props.jumpToScene}
					image={"assets/img/trivia-1.jpg"}
					title={"General Trivia"}
					subtitle={"Scene 1 — 00:01:21"}
					quote={'Throughout the episode, Elliot references "IRC." Standing for Internet Relay Chat, IRC is an application protocol that allows for plaintext communication via a client/server model. A server hosts a "channel" where users can join to discuss various topics. However, "robots" are prevalent on servers. These allow users to communicate with the server itself, and request file transfers. There is a major presence of illegal file transfers facilitated by the use of these robots.'}
					ctas={[
						[
						"  Go To Scene",
						"iconcss icon-play-outline"
						]
					]}
					/>
					<AiFullListItem
					type={"trivia"}
					jumpToScene={this.props.jumpToScene}
					image={"assets/img/trivia-2.jpg"}
					title={"Fun Fact"}
					subtitle={"Scene 1 — 00:03:46"}
					quote={"Elliot's signature black hoodie is from Rami Malek's own personal wardrobe."}	
					ctas={[
						[
						"   Go To Scene",
						"iconcss icon-play-outline"
						]
					]}
					/>
					<AiFullListItem
					type={"trivia"}
					jumpToScene={this.props.jumpToScene}
					image={"assets/img/trivia-3.jpg"}
					title={"Other Trivia"}
					subtitle={"Scene 2 — 00:05:61"}
					quote={'In this episode, the security company has to thwart a DDoS attack. "DDoS" stands for "distributed denial of service." It\'s a tactic used to prevent a company\'s servers from functioning by using all their bandwidth. Real or virtual computers all send and receive data to all servers on a network, stopping legitimate users from exercising real transactions. This effectively stops business from taking place, causing a loss in revenue and consumer trust.'}
					ctas={[
						[
						"    Go To Scene",
						"iconcss icon-play-outline"
						]
					]}
					/>
				</div>
				<div className="list-column"></div>
			</div>
		)
	}
}