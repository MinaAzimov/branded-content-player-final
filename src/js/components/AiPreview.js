import React, { Component, PropTypes } from 'react';
import AiPreviewStar from './AiPreviewStar';
import AiPreviewListItem from './AiPreviewListItem';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";


export default class AiPreview extends Component {

	static propTypes = {
		show: PropTypes.bool,
		onClick: PropTypes.func,
		mode: PropTypes.string,
		pauseCardSrc: PropTypes.bool,
		data: PropTypes.array,
		glasses: PropTypes.bool,
		actor: PropTypes.bool,
		actress: PropTypes.bool,
		sound: PropTypes.bool,
		trivia: PropTypes.bool,
		triviaGeneral: PropTypes.bool,
		triviaFun: PropTypes.bool,
		item8: PropTypes.bool,
		item9: PropTypes.bool,
		item10: PropTypes.bool,
		item11: PropTypes.bool,
		item12: PropTypes.bool,
		item13: PropTypes.bool,
		item14: PropTypes.bool,
		item15: PropTypes.bool,
		item16: PropTypes.bool,
		item17: PropTypes.bool,
		item18: PropTypes.bool,
		item19: PropTypes.bool,
		item20: PropTypes.bool,
		currentTime: PropTypes.number,
		fullAiCardShow: PropTypes.func,
		showFullAiCard: PropTypes.bool,
		addAiStarred: PropTypes.func,
		removeAiStarred: PropTypes.func,
		checkAiStarred: PropTypes.func
	}

	
	constructor(props) {
	super(props);
	this.state = {
		isHovering: false
	}
}

	onMouseOver = (e) => {
		clearTimeout(this.mouseMoveTimeout);
		this.setState({
			isHovering: true
		})
		this.mouseMoveTimeout = setTimeout(()=> {
			this.setState({
				isHovering: false
			});
		}, 24000);
	}

	onMouseOut = (e) => {
		clearTimeout(this.mouseMoveTimeout);
		this.setState({
			isHovering: false
		})
	}


	render() {

		let listHeight = 0;

        if (this.refs.list) {
	      listHeight = this.refs.list.clientHeight;   
        }


		const { show, isFullScreen, currentTime, endCardShow, pauseCardSrc, data, glasses, actor, actress, sound, trivia, triviaGeneral, triviaFun, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, fullAiCardShow, showFullAiCard, addAiStarred, removeAiStarred, checkAiStarred} = this.props;
		const { isHovering } = this.state;
	

 		const classnames = classNames({
 			'ai-preview': true,
 			'ai-preview--show': show || (isHovering && currentTime != 0 && !showFullAiCard && endCardShow),
 			'ai-preview--needs-scrolling': (isFullScreen && window.innerWidth > 1824) ? listHeight >= 880 : listHeight >= 510
 		});

 		const itemCar = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': pauseCardSrc
 		});

 		const itemGlasses = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': glasses
 		});

 		const itemActor = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': actor
 		});

 		const itemActress = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': actress
 		});

 		const itemSound = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': sound
 		});

 		const itemTrivia = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': trivia
 		});

 		const itemTriviaGeneral = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': triviaGeneral
 		});

 		const itemTriviaFun = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': triviaFun
 		});

 		const item8ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item8
 		});

 		const item9ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item9
 		});

 		const item10ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item10
 		});

 		const item11ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item11
 		});

 		const item12ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item12
 		});

 		const item13ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item13
 		});

 		const item14ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item14
 		});

 		const item15ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item15
 		});

 		const item16ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item16
 		});

 		const item17ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item17
 		});

 		const item18ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item18
 		});

 		const item19ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item19
 		});

 		const item20ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item20
 		});

 		
		return (
			<div>
				<div className={classnames} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
					<div className="ai-more" onClick={ () => fullAiCardShow('starred') }>
						<div className="divider"></div>
						<span>More</span>
						<div className="ellipsis"></div>
						<div className="ellipsis"></div>
						<div className="ellipsis"></div>
					</div>
					<input id="toggleWikiPreview" type="checkbox" defaultChecked="true"/>
					<label htmlFor="toggleWikiPreview" className="">
						<div className="circle">
							{  /* <i className="iconcss icon-vai-sm"></i>  */}
							{ /*  <img src='assets/img/vai.svg'></img> */ }
							{ /* <svg viewBox="0 0 100 100">
							   <use xlinkHref='assets/img/vai.svg'></use>
							</svg> */ } 
						</div>
						<span>vai</span>
					</label>
					<div className="ai-preview-list">
						<div className="ai-preview-list-column"></div>
						<div className="ai-preview-list-scrolling" ref="list">
						<div className={itemActor}>
							<AiPreviewListItem
							type={data[1].type}
							image={data[1].src}
							title={data[1].title}
							subtitle={data[1].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }
							addStar={() => addAiStarred({key:4,type:"person",image:"assets/img/elliot-alderson-lg.jpg",title:"Elliot Alderson",subtitle:"Rami Malek",ctas:[["Go To Bio","iconcss icon-person","",() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene  ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(4)}
							isStarred={() => checkAiStarred(4)}


							/>
						</div>
						<div className={itemCar}>
							<AiPreviewListItem
							type={data[2].type}
							image={data[2].src}
							title={data[2].title}
							subtitle={data[2].subtitle}
							onclick={() => fullAiCardShow('products')}
							addStar={() => addAiStarred({key:3,type:"product",image:"assets/img/cadillac-escalade-lg.jpg",title:"2017 Cadillac Escalade SUV",subtitle:"Cadillac",ctas:[["View Product","iconcss icon-product","http://www.cadillac.com/preceding-year/escalade-suv.html"],[" Go To Scene   ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(3)}
							isStarred={() => checkAiStarred(3)}
							/>
						</div>
						<div className={itemActress}>
							<AiPreviewListItem
							type={data[3].type}
							image={data[3].src}
							title={data[3].title}
							subtitle={data[3].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Darlene Alderson",actorName:"Carly Chaikin",characterImage:"assets/img/darlene-alderson-lg.jpg",actorImage:"assets/img/carly-chaikin.jpg",characterBio:"Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.",actorBio:"Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }							
							addStar={() => addAiStarred({key:2,type:"person",image:"assets/img/darlene-alderson-lg.jpg",title:"Darlene Alderson",subtitle:"Carly Chaikin",ctas:[["Go To Bio","iconcss icon-person","#",() => fullAiCardShow('character', {characterName:"Darlene Alderson",actorName:"Carly Chaikin",characterImage:"assets/img/darlene-alderson-lg.jpg",actorImage:"assets/img/carly-chaikin.jpg",characterBio:"Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.",actorBio:"Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(2)}
							isStarred={() => checkAiStarred(2)}
							/>
						</div>
						<div className={itemGlasses}>
							<AiPreviewListItem
							type={data[0].type}
							image={data[0].src}
							title={data[0].title}
							subtitle={data[0].subtitle}
							onclick={() => fullAiCardShow('products')}
							addStar={() => addAiStarred({key:0,type:"product",image:"assets/img/floral-heart-sunglasses-lg.jpg",title:"Floral Heart Glasses",subtitle:"Torrid Fashion",ctas:[["View Product","iconcss icon-product","http://www.torrid.com/product/floral-heart-sunglasses/10265338.html"],["  Go To Scene ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(0)}
							isStarred={() => checkAiStarred(0)}
							/>
						</div>

						<div className={itemSound}>
							<AiPreviewListItem
							type={data[4].type}
							image={data[4].src}
							title={data[4].title}
							subtitle={data[4].subtitle}
							onclick={() => fullAiCardShow('music')}
							addStar={() => addAiStarred({key:1,type:"music",image:"assets/img/sound-and-color-lg.jpg",title:"Sound and Color",subtitle:"Alabama Shakes",ctas:[["View Song","iconcss icon-music","https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"],[" Go To Scene  ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(1)}
							isStarred={() => checkAiStarred(1)}
							/>
						</div>
						<div className={itemTriviaFun}>
							<AiPreviewListItem
							type={data[7].type}
							title={data[7].title}
							subtitle={data[7].subtitle}
							onclick={() => fullAiCardShow('trivia')}
							/>
						</div>
						
						<div className={itemTrivia}>
							<AiPreviewListItem
							type={data[6].type}
							title={data[6].title}
							subtitle={data[6].subtitle}
							onclick={() => fullAiCardShow('trivia')}
							/>
						</div>
				
{/*
						<div className={item8ClassName}>
						   <AiPreviewListItem
							type={data[8].type}
							image={data[8].src}
							title={data[8].title}
							subtitle={data[8].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }
							addStar={() => addAiStarred({key:4,type:"person",image:"assets/img/elliot-alderson-lg.jpg",title:"Elliot Alderson",subtitle:"Rami Malek",ctas:[["Go To Bio","iconcss icon-person","",() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene  ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(4)}
							isStarred={() => checkAiStarred(4)}

							/>
						</div>

						<div className={item9ClassName}>
						    <AiPreviewListItem
							type={data[9].type}
							image={data[9].src}
							title={data[9].title}
							subtitle={data[9].subtitle}
							onclick={() => fullAiCardShow('trivia')}
							/>
						</div>

						
						

						<div className={item10ClassName}>
						    <AiPreviewListItem
							type={data[10].type}
							image={data[10].src}
							title={data[10].title}
							subtitle={data[10].subtitle}
							/>
						</div>
						<div className={item11ClassName}>
						    <AiPreviewListItem
							type={data[11].type}
							image={data[11].src}
							title={data[11].title}
							subtitle={data[11].subtitle}
							/>
						</div>
						<div className={item12ClassName}>
						    <AiPreviewListItem
							type={data[12].type}
							image={data[12].src}
							title={data[12].title}
							subtitle={data[12].subtitle}
							/>
						</div>
						<div className={item13ClassName}>
						    <AiPreviewListItem
							type={data[13].type}
							image={data[13].src}
							title={data[13].title}
							subtitle={data[13].subtitle}
							/>
						</div>
						<div className={item14ClassName}>
						    <AiPreviewListItem
							type={data[14].type}
							image={data[14].src}
							title={data[14].title}
							subtitle={data[14].subtitle}
							/>
						</div>
						<div className={item15ClassName}>
						    <AiPreviewListItem
							type={data[15].type}
							image={data[15].src}
							title={data[15].title}
							subtitle={data[15].subtitle}
							/>
						</div>
						<div className={item16ClassName}>
						    <AiPreviewListItem
							type={data[16].type}
							image={data[16].src}
							title={data[16].title}
							subtitle={data[16].subtitle}
							/>
						</div>
						<div className={item17ClassName}>
						   <AiPreviewListItem
							type={data[17].type}
							image={data[17].src}
							title={data[17].title}
							subtitle={data[17].subtitle}
							/>
						</div>
						<div className={item18ClassName}>
						    <AiPreviewListItem
							type={data[18].type}
							image={data[18].src}
							title={data[18].title}
							subtitle={data[18].subtitle}
							/>
						</div>
						<div className={item19ClassName}>
						   <AiPreviewListItem
							type={data[19].type}
							image={data[19].src}
							title={data[19].title}
							subtitle={data[19].subtitle}
							/>
						</div>
						<div className={item20ClassName}>
						    <AiPreviewListItem
							type={data[20].type}
							image={data[20].src}
							title={data[20].title}
							subtitle={data[20].subtitle}
							/>
						</div> */}  
						<div className={itemTriviaGeneral}>
						    <AiPreviewListItem
							type={data[5].type}
							title={data[5].title}
							subtitle={data[5].subtitle}
							onclick={() => fullAiCardShow('trivia')}
							/>
						</div>
						</div>
						<div className="ai-preview-list-column"></div>

					</div>			
				</div>
			</div>
		)
	}
}