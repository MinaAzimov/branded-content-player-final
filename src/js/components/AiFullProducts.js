import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullProducts extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		jumpToSceneFive: PropTypes.func,
		jumpToSceneSix: PropTypes.func,
		jumpToSceneSeven: PropTypes.func,
	
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling, data } = this.props;


		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--products': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2
		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<AiFullListItem
						type={data[0].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[0].addAiStarred.image}
						title={data[0].addAiStarred.title}
						subtitle={data[0].addAiStarred.subtitle}
						ctas={data[0].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[0].addAiStarred.key,type:data[0].addAiStarred.type,image:data[0].addAiStarred.image,title:data[0].addAiStarred.title,subtitle:data[0].addAiStarred.subtitle,ctas:data[0].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[0].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[0].addAiStarred.key)}
						/>
						<AiFullListItem
						type={data[2].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[2].addAiStarred.image}
						title={data[2].addAiStarred.title}
						subtitle={data[2].addAiStarred.subtitle}
						ctas={data[2].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[2].addAiStarred.key,type:data[2].addAiStarred.type,image:data[2].addAiStarred.image,title:data[2].addAiStarred.title,subtitle:data[2].addAiStarred.subtitle,ctas:data[2].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[2].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[2].addAiStarred.key)}
						/>
						<AiFullListItem
						type={data[9].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[9].addAiStarred.image}
						title={data[9].addAiStarred.title}
						subtitle={data[9].addAiStarred.subtitle}
						ctas={data[9].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[9].addAiStarred.key,type:data[9].addAiStarred.type,image:data[9].addAiStarred.image,title:data[9].addAiStarred.title,subtitle:data[9].addAiStarred.subtitle,ctas:data[9].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[9].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[9].addAiStarred.key)}
						/>

						<AiFullListItem
						type={data[15].addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={data[15].addAiStarred.image}
						title={data[15].addAiStarred.title}
						subtitle={data[15].addAiStarred.subtitle}
						ctas={data[15].addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:data[15].addAiStarred.key,type:data[15].addAiStarred.type,image:data[15].addAiStarred.image,title:data[15].addAiStarred.title,subtitle:data[15].addAiStarred.subtitle,ctas:data[15].addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(data[15].addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(data[15].addAiStarred.key)}
						/>
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}