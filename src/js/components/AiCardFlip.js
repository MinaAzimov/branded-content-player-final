import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiCardFlip extends Component {

	static propTypes = {
		frontImg: PropTypes.string,
		backImg: PropTypes.string,
		flipped: PropTypes.bool,
		flip: PropTypes.func
	}

	constructor() {
		super();
	}

	render() {
		const { frontImg, backImg, flipped, flip } = this.props;

		const classnames = classNames({
			'flip-container': true,
			'flip-container--flipped': flipped
		});

		return (
			<div className={classnames} >
				<div className="flipper">
					<div className="front">
						<div className="mask">
							<img src={frontImg}></img>
							<a onClick={flip}>
								<i className="iconcss icon-swap"></i>
								<span>View Actor</span>
							</a>
						</div>
					</div>
					<div className="back">
						<div className="mask">
							<img src={backImg}></img>
							<a onClick={flip}>
								<i className="iconcss icon-swap"></i>
								<span>View Character</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}