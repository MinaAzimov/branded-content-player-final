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
 			'ai-list-item--show': triviaGeneral,
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
						<div className="slit">
							<span>Vai</span>
						</div>
						<div className="circle"></div>
					</label>
					<div className="ai-preview-list">
						<div className="ai-preview-list-column"></div>
						<div className="ai-preview-list-scrolling" ref="list">
						

						<div className={item16ClassName}>
						   <AiPreviewListItem
							type={data[16].type}
							image={data[16].src}
							title={data[16].title}
							subtitle={data[16].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Mr. Robot",actorName:"Christian Slater",
							characterImage:"assets/img/mr-robot.jpg",actorImage:"assets/img/christain-slater.jpg",
					        characterBio: 'A mysterious figure who approaches Elliot with the opportunity to contribute to a worldwide revolution, Mr. Robot has a murky history but huge plans for the future. He recruits the members of fsociety to come together at the abandoned arcade – and is relentless in his leadership of the team.',
					        actorBio: 'Christian Michael Leonard Slater was born on August 18, 1969 in New York City, to Michael Hawkins, a well-known soap actor, and Mary Jo Slater (née Lawton), a casting agent. Christian started in show business early, appearing on the soap opera The Edge of Night (1956) in 1976 at the age of 7. He went on to star in many Broadway shows in the early-1980s. He rose to fame in Hollywood after landing the role of Binx Davey in The Legend of Billie Jean (1985). He moved to Los Angeles in 1987 to pursue a further acting career after dropping out of high school. After having a starring role in the cult classic Heathers (1988), he became somewhat known as the Hollywood bad-boy, having many run-ins with the law. He is also well-known for having dated stars such as Winona Ryder, Christina Applegate, Samantha Mathis and was at one time engaged to actress/model Nina Huang. In 2000, he married Ryan Haddon, the daughter of 1970s model Dayle Haddon. The couple have two children, Jaden Christopher (b. 1999) and Eliana Sophia (b. 2001). As of early 2005, they separated and later divorced, but remain dedicated to bring up their children.',
							otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }
							addStar={() => addAiStarred({key:12,type:"person",image:"assets/img/mr-robot.jpg",title:"Mr. Robot",subtitle:"Christian Slater",ctas:[["Go To Bio  ","iconcss icon-person","",() => fullAiCardShow('character', {characterName:"Mr. Robot",actorName:"Christian Slater",characterImage:"assets/img/mr-robot.jpg",actorImage:"assets/img/christain-slater.jpg",
					        actorBio: 'Christian Michael Leonard Slater was born on August 18, 1969 in New York City, to Michael Hawkins, a well-known soap actor, and Mary Jo Slater (née Lawton), a casting agent. Christian started in show business early, appearing on the soap opera The Edge of Night (1956) in 1976 at the age of 7. He went on to star in many Broadway shows in the early-1980s. He rose to fame in Hollywood after landing the role of Binx Davey in The Legend of Billie Jean (1985). He moved to Los Angeles in 1987 to pursue a further acting career after dropping out of high school. After having a starring role in the cult classic Heathers (1988), he became somewhat known as the Hollywood bad-boy, having many run-ins with the law. He is also well-known for having dated stars such as Winona Ryder, Christina Applegate, Samantha Mathis and was at one time engaged to actress/model Nina Huang. In 2000, he married Ryan Haddon, the daughter of 1970s model Dayle Haddon. The couple have two children, Jaden Christopher (b. 1999) and Eliana Sophia (b. 2001). As of early 2005, they separated and later divorced, but remain dedicated to bring up their children.',
						    otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene        ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(12)}
							isStarred={() => checkAiStarred(12)}

							/>
						</div>
					
					
						<div className={item8ClassName}>
						   <AiPreviewListItem
							type={data[8].type}
							image={data[8].src}
							title={data[8].title}
							subtitle={data[8].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Angela Moss",actorName:"Portia Doubleday",characterImage:"assets/img/angela-moss.jpg",actorImage:"assets/img/portia-doubleday.jpg",characterBio:"As an Allsafe account executive, Angela has over five years of marketing innovation experience with hands-on knowledge of go-to-market routes, business strategy and the ability to connect marketing to sales growth. She is ambitious but lacks confidence, savvy but lacks technological skills. She relies on her childhood friend and colleague, Elliot Alderson, for assistance in critical situations -- in both business and her personal life. Angelas mother died when she was young, from cancer which developed after her exposure to toxic chemicals at a factory owned by Evil Corp. She has a strong relationship with her father, Don, though events at Allsafe begin to strain their relationship. As Angela navigates corporate politics, Don worries that his daughter approaches moral compromise.",actorBio:"Portia Doubleday was born on June 22, 1988 in Los Angeles, California, USA as Portia Ann Doubleday. She is an actress and producer, known for Carrie (2013), Youth in Revolt (2009) and Her (2013).",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }
							addStar={() => addAiStarred({key:13,type:"person",image:"assets/img/angela-moss.jpg",title:"Angela Moss",subtitle:"Portia Doubleday",ctas:[["Go To Bio   ","iconcss icon-person","",() => fullAiCardShow('character', {characterName:"Angela Moss",actorName:"Portia Doubleday",characterImage:"assets/img/angela-moss.jpg",actorImage:"assets/img/portia-doubleday.jpg",characterBio:"As an Allsafe account executive, Angela has over five years of marketing innovation experience with hands-on knowledge of go-to-market routes, business strategy and the ability to connect marketing to sales growth. She is ambitious but lacks confidence, savvy but lacks technological skills. She relies on her childhood friend and colleague, Elliot Alderson, for assistance in critical situations -- in both business and her personal life. Angelas mother died when she was young, from cancer which developed after her exposure to toxic chemicals at a factory owned by Evil Corp. She has a strong relationship with her father, Don, though events at Allsafe begin to strain their relationship. As Angela navigates corporate politics, Don worries that his daughter approaches moral compromise.",actorBio:"Portia Doubleday was born on June 22, 1988 in Los Angeles, California, USA as Portia Ann Doubleday. She is an actress and producer, known for Carrie (2013), Youth in Revolt (2009) and Her (2013).", otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],[" Go To Scene    ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(13)}
							isStarred={() => checkAiStarred(13)}

							/>
						</div>

						<div className={item15ClassName}>
							<AiPreviewListItem
							type={data[15].type}
							image={data[15].src}
							title={data[15].title}
							subtitle={data[15].subtitle}
							onclick={() => fullAiCardShow('products')}
							addStar={() => addAiStarred({key:24,type:"product",image:"assets/img/shoes-lg.jpg",title:"Floret Patent Leather Pump",subtitle:"L.K. Bennett",ctas:[["View Product   ","iconcss icon-product","https://us.lkbennett.com/product/CONTSCFLORETEPATENTLEATHERBlackBlack~Floret-Patent-Leather-Heel-Black"],["    Go To Scene    ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(24)}
							isStarred={() => checkAiStarred(24)}
							/>
						</div>
						

						<div className={item11ClassName}>
							<AiPreviewListItem
							type={data[11].type}
							title={data[11].title}
							subtitle={data[11].subtitle}
							onclick={() => fullAiCardShow('trivia')}
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

						<div className={item13ClassName}>
							<AiPreviewListItem
							type={data[13].type}
							image={data[13].src}
							title={data[13].title}
							subtitle={data[13].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Mobley",actorName:"Azhar Khan",characterImage:"assets/img/mobley-lg.jpg",actorImage:"assets/img/azhar-khan-lg.jpg",
					        characterBio: 'Mobley, known only by his hacker name, is a member of fsociety. Mobley was born on January 2, 1984. He lives in Brooklyn. He is a fan of an obscure DJ from whom he took his hacker name. He even created an Angelfire page in DJ Mobley\'s honor. He secures the abandoned Fun Society Arcade as Fsociety\'s base, while also recruiting experienced hacker, Leslie Romero. He meets Elliot some time in between these events. He works at Bank of E and often visits Romero at his home.',
					        actorBio: 'Azhar Khan was born on January 7th, 1984 in Mumbai, India and raised in New York City. He is an actor, writer, visual artist, legerdemain enthusiast, and frustrated inventor. A peculiar blend of training and influences have led to him working in an assortment of venues and across various media platforms, from radio plays and video installations to live comedy and primetime television.',
                            otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }							
							addStar={() => addAiStarred({key:15,type:"person",image:"assets/img/mobley-lg.jpg",title:"Mobley",subtitle:"Azhar Khan",ctas:[[" Go To Bio","iconcss icon-person","#",() => fullAiCardShow('character', 
							{characterName:"Mobley",actorName:"Azhar Khan",characterImage:"assets/img/mobley-lg.jpg",actorImage:"assets/img/azhar-khan-lg.jpg",
					        characterBio: 'Mobley, known only by his hacker name, is a member of fsociety. Mobley was born on January 2, 1984. He lives in Brooklyn. He is a fan of an obscure DJ from whom he took his hacker name. He even created an Angelfire page in DJ Mobley\'s honor. He secures the abandoned Fun Society Arcade as Fsociety\'s base, while also recruiting experienced hacker, Leslie Romero. He meets Elliot some time in between these events. He works at Bank of E and often visits Romero at his home.',
							otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(15)}
							isStarred={() => checkAiStarred(15)}
							/>
						</div>
						<div className={item14ClassName}>
							<AiPreviewListItem
							type={data[14].type}
							image={data[14].src}
							title={data[14].title}
							subtitle={data[14].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Romero",actorName:"Ron Cephas Jones",characterImage:"assets/img/romero-lg.jpg",actorImage:"assets/img/ron-cephas-jones-lg.jpg",
					        characterBio: 'Leslie Romero is a computer criminal, engineer, and biologist, specializing in phone phreaking and marijuana husbandry. He lives with his elderly mother, Nell Romero, and has a history with Mobley. Though Romero is highly knowledgeable, his thirst for fame and lack of commitment leads to conflict with other members of fsociety.',
					        actorBio: 'Ron Cephas Jones is an actor, known for Half Nelson (2006), Sweet and Lowdown (1999) and This Is Us (2016). Jones has also performed in several theatrical productions with the Steppenwolf Theatre Company in Chicago, Illinois; appeared as the title character of Shakespeare\'s Richard III with The Public Theater in New York City, New York, as well as other Off Broadway productions. Jones has served as an understudy or standby in several Broadway theatre productions.',
                            otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }							
							addStar={() => addAiStarred({key:16,type:"person",image:"assets/img/romero-lg.jpg",title:"Romero",subtitle:"Ron Cephas Jones",ctas:[["  Go To Bio","iconcss icon-person","#",() => fullAiCardShow('character', 
							{characterName:"Romero",actorName:"Ron Cephas Jones",characterImage:"assets/img/romero-lg.jpg",actorImage:"assets/img/ron-cephas-jones-lg.jpg",
					        characterBio: 'Leslie Romero is a computer criminal, engineer, and biologist, specializing in phone phreaking and marijuana husbandry. He lives with his elderly mother, Nell Romero, and has a history with Mobley. Though Romero is highly knowledgeable, his thirst for fame and lack of commitment leads to conflict with other members of fsociety.',
							otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["   Go To Scene    ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(16)}
							isStarred={() => checkAiStarred(16)}
							/>
						</div>

						<div className={item12ClassName}>
							<AiPreviewListItem
							type={data[12].type}
							image={data[12].src}
							title={data[12].title}
							subtitle={data[12].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Trenton",actorName:"Sunita Mani",characterImage:"assets/img/trenton-lg.jpg",actorImage:"assets/img/sunita-mani-lg.jpg",
							characterBio: 'Trenton, known only by her hacker name, is a member of fsociety. Her parents are Iranian immigrants who came to America for freedom. Her father works 60-hour weeks to find tax loopholes for a millionaire art dealer. Her mother ran up a five-figure debt earning an online degree. She has a young brother named Mohammed. The family lives together in Brooklyn and she is a student at a nearby university. In her first face-to-face meeting with the other members of fsociety Trenton uses a Stagefright exploit to own Mobley\'s Android phone.',
					        actorBio: 'Sunita Mani is an actress, dancer, and comedian most commonly recognized for her gyrations in the viral music video \"Turn Down for What\" (dir. The Daniels) and as part of the Cocoon Central Dance Team. She also appears in \"Don\'t Think Twice\" as Amy, \"Mr. Robot\" as Trenton, and in the Netflix original series, G.L.O.W as Arthie. Sunita has also guest starred on network television shows including \"Broad City\" on Comedy Central, Search Party on TBS, and The Good Place on NBC.',
                            otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }							
							addStar={() => addAiStarred({key:14,type:"person",image:"assets/img/sunita-mani-lg.jpg",title:"Trenton",subtitle:"Sunita Mani",ctas:[["Go To Bio    ","iconcss icon-person","#",() => fullAiCardShow('character', {characterName:"Trenton",actorName:"Sunita Mani",characterImage:"assets/img/trenton-lg.jpg",actorImage:"assets/img/sunita-mani-lg.jpg",characterBio:"Trenton, known only by her hacker name, is a member of fsociety. Her parents are Iranian immigrants who came to America for freedom. Her father works 60-hour weeks to find tax loopholes for a millionaire art dealer. Her mother ran up a five-figure debt earning an online degree. She has a young brother named Mohammed. The family lives together in Brooklyn and she is a student at a nearby university. In her first face-to-face meeting with the other members of fsociety Trenton uses a Stagefright exploit to own Mobley\'s Android phone.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene    ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(14)}
							isStarred={() => checkAiStarred(14)}
							/>
						</div>

						<div className={itemActress}>
							<AiPreviewListItem
							type={data[3].type}
							image={data[3].src}
							title={data[3].title}
							subtitle={data[3].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Darlene Alderson",actorName:"Carly Chaikin",characterImage:"assets/img/darlene-alderson-lg.jpg",actorImage:"assets/img/carly-chaikin.jpg",characterBio:"Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.",actorBio:"Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }							
							addStar={() => addAiStarred({key:2,type:"person",image:"assets/img/darlene-alderson-lg.jpg",title:"Darlene Alderson",subtitle:"Carly Chaikin",ctas:[["Go To Bio ","iconcss icon-person","#",() => fullAiCardShow('character', {characterName:"Darlene Alderson",actorName:"Carly Chaikin",characterImage:"assets/img/darlene-alderson-lg.jpg",actorImage:"assets/img/carly-chaikin.jpg",characterBio:"Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.",actorBio:"Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(2)}
							isStarred={() => checkAiStarred(2)}
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

						<div className={itemTrivia}>
							<AiPreviewListItem
							type={data[6].type}
							title={data[6].title}
							subtitle={data[6].subtitle}
							onclick={() => fullAiCardShow('trivia')}
							/>
						</div>


						<div className={item9ClassName}>
							<AiPreviewListItem
							type={data[9].type}
							image={data[9].src}
							title={data[9].title}
							subtitle={data[9].subtitle}
							onclick={() => fullAiCardShow('products')}
							addStar={() => addAiStarred({key:11,type:"product",image:"assets/img/flash-drive-lg.jpg",title:"DUO 32GB Micro USB Flash Drive",subtitle:"Samsung at BestBuy",ctas:[["View Product  ","iconcss icon-product","https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p"],["Go To Scene    ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(11)}
							isStarred={() => checkAiStarred(11)}
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

						

						<div className={item10ClassName}>
							<AiPreviewListItem
							type={data[10].type}
							image={data[10].src}
							title={data[10].title}
							subtitle={data[10].subtitle}
							onclick={() => fullAiCardShow('music')}
							addStar={() => addAiStarred({key:9,type:"music",image:"assets/img/world-destruction.jpg",title:"World Destruction (feat. John Lydon)",subtitle:"Time Zone feat. John Lydon",ctas:[["View Song ","iconcss icon-music","https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"],["Go To Scene      ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(9)}
							isStarred={() => checkAiStarred(9)}
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

						<div className={itemActor}>
							<AiPreviewListItem
							type={data[1].type}
							image={data[1].src}
							title={data[1].title}
							subtitle={data[1].subtitle}
							onclick={() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }
							addStar={() => addAiStarred({key:4,type:"person",image:"assets/img/elliot-alderson-lg.jpg",title:"Elliot Alderson",subtitle:"Rami Malek",ctas:[["Go To Bio","iconcss icon-person","#",() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["  Go To Scene  ","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(4)}
							isStarred={() => checkAiStarred(4)}
							/>
						</div>

					    <div className={item17ClassName}>
							<AiPreviewListItem
							type={data[17].type}
							title={data[17].title}
							subtitle={data[17].subtitle}
							onclick={() => fullAiCardShow('trivia')}
							/>
						</div>

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