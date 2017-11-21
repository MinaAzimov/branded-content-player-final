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

		const { show, jumpToSceneFive, jumpToSceneSix, jumpToSceneSeven } = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--products': true
		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<AiFullListItem
						type={"product"}
						jumpToSceneFive={this.props.jumpToSceneFive}
						image={"assets/img/floral-heart-sunglasses-lg.jpg"}
						title={"Floral Heart Glasses"}
						subtitle={"Torrid Fashion"}
						ctas={[[
							"View Product",
							"iconcss icon-product",
							"http://www.torrid.com/product/floral-heart-sunglasses/10265338.html"
							],
							[
							"Go To Scene  ",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						type={"product"}
						jumpToSceneSix={this.props.jumpToSceneSix}
						image={"assets/img/cadillac-escalade-lg.jpg"}
						title={"2017 Cadillac Escalade SUV"}
						subtitle={"Cadillac"}
						ctas={[[
							"View Product ",
							"iconcss icon-product",
							"http://www.cadillac.com/preceding-year/escalade-suv.html"
							],
							[
							"Go To Scene   ",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						type={"product"}
						jumpToSceneSeven={this.props.jumpToSceneSeven}
						image={"assets/img/flash-drive-lg.jpg"}
						title={"DUO 32GB Micro USB Flash Drive"}
						subtitle={"Samsung at BestBuy"}
						ctas={[[
							"View Product  ",
							"iconcss icon-product",
							"https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p"
							],
							[
							"Go To Scene    ",
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