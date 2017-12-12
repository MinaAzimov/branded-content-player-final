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

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling } = this.props;

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
						type={"product"}
						jumpToScene={this.props.jumpToScene}
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
						addAiStarred={()  => addAiStarred({key:0,type:"product",image:"assets/img/floral-heart-sunglasses-lg.jpg",title:"Floral Heart Glasses",subtitle:"Torrid Fashion",ctas:[["View Product","iconcss icon-product","http://www.torrid.com/product/floral-heart-sunglasses/10265338.html"],["Go To Scene  ","iconcss icon-play-outline"]]})}
						removeAiStarred={() => removeAiStarred(0)}
						checkAiStarred={() => checkAiStarred(0)}
						/>
						<AiFullListItem
						type={"product"}
						jumpToScene={this.props.jumpToScene}
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
						addAiStarred={()  => addAiStarred({key:3,type:"product",image:"assets/img/cadillac-escalade-lg.jpg",title:"2017 Cadillac Escalade SUV",subtitle:"Cadillac",ctas:[["View Product ","iconcss icon-product","http://www.cadillac.com/preceding-year/escalade-suv.html"],["Go To Scene   ","iconcss icon-play-outline"]]})}
						removeAiStarred={() => removeAiStarred(3)}
						checkAiStarred={() => checkAiStarred(3)}
						/>
						<AiFullListItem
						type={"product"}
						jumpToScene={this.props.jumpToScene}
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
						addAiStarred={()  => addAiStarred({key:11,type:"product",image:"assets/img/flash-drive-lg.jpg",title:"DUO 32GB Micro USB Flash Drive",subtitle:"Samsung at BestBuy",ctas:[["View Product  ","iconcss icon-product","https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p"],["Go To Scene    ","iconcss icon-play-outline"]]})}
						removeAiStarred={() => removeAiStarred(11)}
						checkAiStarred={() => checkAiStarred(11)}
						/>

						<AiFullListItem
						type={"product"}
						jumpToScene={this.props.jumpToScene}
						image={"assets/img/shoes-lg.jpg"}
						title={"Floret Patent Leather Pump"}
						subtitle={"L.K. Bennett"}
						ctas={[[
							"View Product   ",
							"iconcss icon-product",
							"https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p"
							],
							[
							"    Go To Scene    ",
							"iconcss icon-play-outline"
							]
						]}
						addAiStarred={() => addAiStarred({key:24,type:"product",image:"assets/img/shoes-lg.jpg",title:"Floret Patent Leather Pump",subtitle:"L.K. Bennett",ctas:[["View Product   ","iconcss icon-product","https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p"],["    Go To Scene    ","iconcss icon-play-outline"]]})}
						removeAiStarred={() => removeAiStarred(24)}
						checkAiStarred={() => checkAiStarred(24)}
						/>
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}