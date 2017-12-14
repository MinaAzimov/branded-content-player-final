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

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling, data  } = this.props;

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
						type={data[4].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[4].addAiStarred.image}
						title={data[4].addAiStarred.title}
						subtitle={data[4].addAiStarred.subtitle}
						ctas={data[4].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[4].addAiStarred.key,type:data[4].addAiStarred.type,image:data[4].addAiStarred.image,title:data[4].addAiStarred.title,subtitle:data[4].addAiStarred.subtitle,ctas:data[4].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[4].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[4].addAiStarred.key)}
						/>
						<AiFullListItem
						type={data[10].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[10].addAiStarred.image}
						title={data[10].addAiStarred.title}
						subtitle={data[10].addAiStarred.subtitle}
						ctas={data[10].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[10].addAiStarred.key,type:data[10].addAiStarred.type,image:data[10].addAiStarred.image,title:data[10].addAiStarred.title,subtitle:data[10].addAiStarred.subtitle,ctas:data[10].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[10].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[10].addAiStarred.key)}
						/>
						<AiFullListItem
						type={data[19].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[19].addAiStarred.image}
						title={data[19].addAiStarred.title}
						subtitle={data[19].addAiStarred.subtitle}
						ctas={data[19].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[19].addAiStarred.key,type:data[19].addAiStarred.type,image:data[19].addAiStarred.image,title:data[19].addAiStarred.title,subtitle:data[19].addAiStarred.subtitle,ctas:data[19].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[19].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[19].addAiStarred.key)}
						/>

					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}