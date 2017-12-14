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

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling, data} = this.props;

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
					    type={data[5].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[5].addAiStarred.image}
						title={data[5].addAiStarred.title}
						subtitle={data[5].addAiStarred.subtitle}
						quote={data[5].addAiStarred.quote}
						ctas={data[5].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[5].addAiStarred.key,type:data[5].addAiStarred.type,image:data[5].addAiStarred.image,title:data[5].addAiStarred.title,subtitle:data[5].addAiStarred.subtitle,ctas:data[5].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[5].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[5].addAiStarred.key)}
					/>
					<AiFullListItem
					type={data[7].addAiStarred.type}
					jumpToScene={this.props.jumpToScene}
					image={data[7].addAiStarred.image}
					title={data[7].addAiStarred.title}
					subtitle={data[7].addAiStarred.subtitle}
					quote={data[7].addAiStarred.quote}
					ctas={data[7].addAiStarred.ctas}
					addAiStarred={() => addAiStarred({key:data[7].addAiStarred.key,type:data[7].addAiStarred.type,image:data[7].addAiStarred.image,title:data[7].addAiStarred.title,subtitle:data[7].addAiStarred.subtitle,ctas:data[7].addAiStarred.ctas})}
					removeAiStarred={() => removeAiStarred(data[7].addAiStarred.key)}
					checkAiStarred={() => checkAiStarred(data[7].addAiStarred.key)}
					/>
					<AiFullListItem
					type={data[6].addAiStarred.type}
					jumpToScene={this.props.jumpToScene}
					image={data[6].addAiStarred.image}
					title={data[6].addAiStarred.title}
					subtitle={data[6].addAiStarred.subtitle}
					quote={data[6].addAiStarred.quote}
					ctas={data[6].addAiStarred.ctas}
					addAiStarred={() => addAiStarred({key:data[6].addAiStarred.key,type:data[6].addAiStarred.type,image:data[6].addAiStarred.image,title:data[6].addAiStarred.title,subtitle:data[6].addAiStarred.subtitle,ctas:data[6].addAiStarred.ctas})}
					removeAiStarred={() => removeAiStarred(data[6].addAiStarred.key)}
					checkAiStarred={() => checkAiStarred(data[6].addAiStarred.key)}
					/>
					<AiFullListItem
					type={data[11].addAiStarred.type}
					jumpToScene={this.props.jumpToScene}
					image={data[11].addAiStarred.image}
					title={data[11].addAiStarred.title}
					subtitle={data[11].addAiStarred.subtitle}
					quote={data[11].addAiStarred.quote}
					ctas={data[11].addAiStarred.ctas}
					addAiStarred={() => addAiStarred({key:data[11].addAiStarred.key,type:data[11].addAiStarred.type,image:data[11].addAiStarred.image,title:data[11].addAiStarred.title,subtitle:data[11].addAiStarred.subtitle,ctas:data[11].addAiStarred.ctas})}
					removeAiStarred={() => removeAiStarred(data[11].addAiStarred.key)}
					checkAiStarred={() => checkAiStarred(data[11].addAiStarred.key)}
					/>
					<AiFullListItem
					type={data[17].addAiStarred.type}
					jumpToScene={this.props.jumpToScene}
					image={data[17].addAiStarred.image}
					title={data[17].addAiStarred.title}
					subtitle={data[17].addAiStarred.subtitle}
					quote={data[17].addAiStarred.quote}
					ctas={data[17].addAiStarred.ctas}
					addAiStarred={() => addAiStarred({key:data[17].addAiStarred.key,type:data[17].addAiStarred.type,image:data[17].addAiStarred.image,title:data[17].addAiStarred.title,subtitle:data[17].addAiStarred.subtitle,ctas:data[17].addAiStarred.ctas})}
					removeAiStarred={() => removeAiStarred(data[17].addAiStarred.key)}
					checkAiStarred={() => checkAiStarred(data[17].addAiStarred.key)}
					/>
				</div>
				<div className="list-column"></div>
			</div>
		)
	}
}