import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

export default class AiFullCtas extends Component {

	static propTypes = {
		ctas: PropTypes.array,
		currentTime: PropTypes.number,
		jumpToSceneOne: PropTypes.func,
		jumpToSceneTwo: PropTypes.func,
		jumpToSceneThree: PropTypes.func,
		jumpToSceneFour: PropTypes.func,
		jumpToSceneFive: PropTypes.func,
		jumpToSceneSix: PropTypes.func,
		jumpToSceneSeven: PropTypes.func,
		jumpToSceneEight: PropTypes.func,
		jumpToSceneNine: PropTypes.func,
		jumpToSceneTen: PropTypes.func,
		jumpToSceneEleven: PropTypes.func,
		jumpToSceneTwelve: PropTypes.func,
		jumpToSceneThirteen: PropTypes.func,
		jumpToSceneFourteen: PropTypes.func,
		jumpToSceneFifteen: PropTypes.func,
		jumpToSceneSixteen: PropTypes.func,
		jumpToSceneSeventeen: PropTypes.func,
	}

	constructor() {
		super();
	}



	handleClick = (e, href, onclick) => {
	

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product") {
			window.open("http://www.torrid.com/product/floral-heart-sunglasses/10265338.html");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product ") {
			window.open("http://www.cadillac.com/preceding-year/escalade-suv.html");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product  ") {
			window.open("https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song") {
			window.open("https://open.spotify.com/track/65wx71brAmEQz66GXXF8gI");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song ") {
			window.open("https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song  ") {
			window.open("https://open.spotify.com/track/6taFIgW5YE94x1icBh5vTg");

		}
		

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene") {

			this.props.jumpToSceneOne();
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene ") {

			this.props.jumpToSceneTwo();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML ==" Go To Scene") {

	
		    this.props.jumpToSceneThree();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene ") {

	
		   this.props.jumpToSceneFour();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene  ") {

	
		   this.props.jumpToSceneFive();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene   ") {

	
		   this.props.jumpToSceneSix();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene    ") {

	
		   this.props.jumpToSceneSeven();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene     ") {

	
		   this.props.jumpToSceneEight();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene      ") {

	
		   this.props.jumpToSceneNine();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene       ") {

	
		   this.props.jumpToSceneTen();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene") {

	
		   this.props.jumpToSceneEleven();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "   Go To Scene") {

	
		   this.props.jumpToSceneTwelve();
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "    Go To Scene") {

	
		   this.props.jumpToSceneThirteen();
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene  ") {

	
		   this.props.jumpToSceneFourteen();
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene ") {

	
		   this.props.jumpToSceneFifteen();
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene  ") {

	
		   this.props.jumpToSceneSixteen();
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene   ") {

	
		   this.props.jumpToSceneSeventeen();
		}	
	

		else {
			console.log("no target")
		}
	
	
	}

	render() {
		const { ctas, jumpToSceneOne, jumpToSceneTwo, jumpToSceneThree, jumpToSceneFour, jumpToSceneFive, jumpToSceneSix, jumpToSceneSeven, jumpToSceneEight, jumpToSceneNine, jumpToSceneTen, jumpToSceneEleven, jumpToSceneTwelve, jumpToSceneThirteen, jumpToSceneFourteen, jumpToSceneFifteen, jumpToSceneSixteen, jumpToSceneSeventeen, currentTime } = this.props;
		let buttons;


	

		if (this.props.ctas) {
			buttons = ctas.map((cta, index) =>
				<a key={index} onClick={ (e) => this.handleClick(e, cta[2], cta[3]) }>
					<i className={cta[1]}></i>
					<span>{cta[0]}</span>
				</a>
			);
		}

		return (
			<div className="ctas">
				{buttons}	
			</div>
		)
	}
}