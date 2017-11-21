import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

export default class AiFullSlider extends Component {

	static propTypes = {
		otherWorks: PropTypes.array
	}

	constructor() {
		super();
	}

	render() {
		const { otherWorks } = this.props;
		let cards;

		if (this.props.otherWorks) {
			cards = otherWorks.map((otherWork, index) =>
				<a className="mask" key={index} href={otherWork.link} target="_blank">
					<img src={otherWork.image}></img>
				</a>
			);
		}

		return (
			<div className="slider">
				{cards}	
			</div>
		)
	}
}