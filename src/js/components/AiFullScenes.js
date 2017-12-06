import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import AiSceneCard from './AiSceneCard';
import classNames from "classnames";

export default class AiFullScenes extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		showInScene: PropTypes.func,
		isFullScreen: PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.state = {
		sceneData: [
				[
					{	
						key:4,
						type:"person",
						image:"assets/img/elliot-alderson-lg.jpg",
						title:"Elliot Alderson",
						subtitle:"Rami Malek",
						ctas:[["Go To Bio","iconcss icon-person"],["  Go To Scene  ","iconcss icon-play-outline"]],
						characterName: 'Elliot Alderson',
						actorName: 'Rami Malek',
						characterImage: 'assets/img/elliot-alderson-lg.jpg',
						actorImage: 'assets/img/rami-malek.jpg',
						characterBio: 'As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those he\'s close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.',
						actorBio: 'Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian. His late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.',
						otherWorks: [
						{
							image: "assets/img/busters-mal-heart.jpg",
							link: "https://www.rottentomatoes.com/m/busters_mal_heart/"
						},
						{
							image: "assets/img/short-term-12.jpg",
							link: "https://www.rottentomatoes.com/m/short_term_12_2013"
						},
						{
							image: "assets/img/aint-them-bodies-saints.jpg",
							link: "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"
						},
						{
							image: "assets/img/da-sweet-blood-of-jesus.jpg",
							link: "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"
						},
						{
							image: "assets/img/mr-robot-extra.jpg",
							link: "https://www.rottentomatoes.com/tv/mr_robot"
						}
						]
					},
					{
						key: 3,
						type: "product",
						image: "assets/img/cadillac-escalade-lg.jpg", 
						title: "2017 Cadillac Escalade SUV",
						subtitle: "Cadillac", 
						ctas: [["View Product ", "iconcss icon-product", "http://www.cadillac.com/preceding-year/escalade-suv.html"], ["Go To Scene", "iconcss icon-play-outline"]]
					}
				]
				, [
					{	
						key:4,
						type:"person",
						image:"assets/img/elliot-alderson-lg.jpg",
						title:"Elliot Alderson",
						subtitle:"Rami Malek",
						ctas:[["Go To Bio","iconcss icon-person"],["  Go To Scene  ","iconcss icon-play-outline"]],
						characterName: 'Elliot Alderson',
						actorName: 'Rami Malek',
						characterImage: 'assets/img/elliot-alderson-lg.jpg',
						actorImage: 'assets/img/rami-malek.jpg',
						characterBio: 'As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those he\'s close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.',
						actorBio: 'Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian. His late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.',
						otherWorks: [
						{
							image: "assets/img/busters-mal-heart.jpg",
							link: "https://www.rottentomatoes.com/m/busters_mal_heart/"
						},
						{
							image: "assets/img/short-term-12.jpg",
							link: "https://www.rottentomatoes.com/m/short_term_12_2013"
						},
						{
							image: "assets/img/aint-them-bodies-saints.jpg",
							link: "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"
						},
						{
							image: "assets/img/da-sweet-blood-of-jesus.jpg",
							link: "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"
						},
						{
							image: "assets/img/mr-robot-extra.jpg",
							link: "https://www.rottentomatoes.com/tv/mr_robot"
						}
						]
					},
					{
						key: 3,
						type: "product",
						image: "assets/img/cadillac-escalade-lg.jpg", 
						title: "2017 Cadillac Escalade SUV",
						subtitle: "Cadillac", 
						ctas: [["View Product ", "iconcss icon-product", "http://www.cadillac.com/preceding-year/escalade-suv.html"], ["Go To Scene", "iconcss icon-play-outline"]]
					}
				],[
					{	
						key:2,
						type:"person",
						image:"assets/img/darlene-alderson-lg.jpg",
						title:"Darlene Alderson",
						subtitle:"Carly Chaikin",
						ctas:[["Go To Bio ","iconcss icon-person"], ["  Go To Scene ","iconcss icon-play-outline"]],
						characterName: 'Darlene Alderson',
						actorName: 'Carly Chaikin',
						characterImage: 'assets/img/darlene-alderson-lg.jpg',
						actorImage: 'assets/img/carly-chaikin.jpg',
						characterBio: 'Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.',
						actorBio: 'Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).',
						otherWorks: [
							{
								image: "assets/img/busters-mal-heart.jpg",
								link: "https://www.rottentomatoes.com/m/busters_mal_heart/"
							},
							{
								image: "assets/img/short-term-12.jpg",
								link: "https://www.rottentomatoes.com/m/short_term_12_2013"
							},
							{
								image: "assets/img/aint-them-bodies-saints.jpg",
								link: "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"
							},
							{
								image: "assets/img/da-sweet-blood-of-jesus.jpg",
								link: "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"
							},
							{
								image: "assets/img/mr-robot-extra.jpg",
								link: "https://www.rottentomatoes.com/tv/mr_robot"
							}
						]
					},
					{
						type: "music",
						image: "assets/img/sound-and-color-lg.jpg",
						title: "Sound and Color",
						subtitle: "Alabama Shakes",
						ctas: [[
							"View Song",
							"iconcss icon-music",
							"https://open.spotify.com/track/65wx71brAmEQz66GXXF8gI"
							],
							[
							"Go To Scene",
							"iconcss icon-play-outline"
							]
						]
					}
				],
				[
					{	
						key:4,
						type:"person",
						image:"assets/img/elliot-alderson-lg.jpg",
						title:"Elliot Alderson",
						subtitle:"Rami Malek",
						ctas:[["Go To Bio","iconcss icon-person"],["  Go To Scene  ","iconcss icon-play-outline"]],
						characterName: 'Elliot Alderson',
						actorName: 'Rami Malek',
						characterImage: 'assets/img/elliot-alderson-lg.jpg',
						actorImage: 'assets/img/rami-malek.jpg',
						characterBio: 'As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those he\'s close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.',
						actorBio: 'Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian. His late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.',
						otherWorks: [
						{
							image: "assets/img/busters-mal-heart.jpg",
							link: "https://www.rottentomatoes.com/m/busters_mal_heart/"
						},
						{
							image: "assets/img/short-term-12.jpg",
							link: "https://www.rottentomatoes.com/m/short_term_12_2013"
						},
						{
							image: "assets/img/aint-them-bodies-saints.jpg",
							link: "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"
						},
						{
							image: "assets/img/da-sweet-blood-of-jesus.jpg",
							link: "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"
						},
						{
							image: "assets/img/mr-robot-extra.jpg",
							link: "https://www.rottentomatoes.com/tv/mr_robot"
						}
						]
					},
					{
						key: 3,
						type: "product",
						image: "assets/img/cadillac-escalade-lg.jpg", 
						title: "2017 Cadillac Escalade SUV",
						subtitle: "Cadillac", 
						ctas: [["View Product ", "iconcss icon-product", "http://www.cadillac.com/preceding-year/escalade-suv.html"], ["Go To Scene", "iconcss icon-play-outline"]]
					}
				]
			]
		}
	}

	render() {

		const { show, isFullScreen, showInScene, currentTime, jumpToScene, addAiStarred, checkAiStarred, removeAiStarred, starredData, starredForScrolling } = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--scenes': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2, 
		});

		const numScenes = this.state.sceneData.length;

 		let empties;
 		(isFullScreen) ? 
 		(
			empties = (new Array(3 - (numScenes % 3)).fill('')).map((empty, index) =>
				<div key={index} >
					<div className="empty"></div>
					<div className="list-column-inner"></div>
				</div>
			)
 		) : ( null );
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<div>
							<AiSceneCard
							currentTime={currentTime}
							showInScene={ () => showInScene(this.state.sceneData[0])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-1-lg.jpg"}
							title={"Elliot looks for a clue"}
							subtitle={"00:00:02 — 00:00:54"}
							ctas={[
								[
								"Go To Scene",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:5,type:"scene",image:"assets/img/scene-1.jpg",title:"Elliot Looks for a clue",subtitle:"00:00:02 — 00:00:54",ctas:[["Go To Scene", "iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(5)}
							checkAiStarred={() => checkAiStarred(5)}
							/>
							<div className="list-column-inner"></div>
						</div>
						<div>
							<AiSceneCard
							currentTime={currentTime}
							showInScene={ () => showInScene(this.state.sceneData[1])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-2-lg.jpg"}
							title={"Elliot learns more about what happened"}
							subtitle={"00:00:55 — 00:02:05"}
							ctas={[
								[
								"Go To Scene ",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:6,type:"scene",image:"assets/img/scene-2.jpg",title:"Elliot learns more about what happened",subtitle:"00:00:55 — 00:02:05",ctas:[["Go To Scene ","iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(6)}
							checkAiStarred={() => checkAiStarred(6)}
							/>
							<div className="list-column-inner"></div>
						</div>
						<div>
							<AiSceneCard
							currentTime={currentTime}
							showInScene={ () => showInScene(this.state.sceneData[2])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-3-lg.jpg"}
							title={"Darlene and Fsociety take the final step"}
							subtitle={"00:02:06 — 00:03:19"}
							ctas={[
								[
								" Go To Scene",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:7,type:"scene",image:"assets/img/scene-3.jpg",title:"Darlene and Fsociety take the final step",subtitle:"00:02:06 — 00:03:19",ctas:[[" Go To Scene","iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(7)}
							checkAiStarred={() => checkAiStarred(7)}
							/>
							<div className="list-column-inner"></div>
						</div>
						<div>
							<AiSceneCard
							currentTime={currentTime}
							showInScene={ () => showInScene(this.state.sceneData[3])}
							jumpToScene={this.props.jumpToScene}
							type={"scene"}
							image={"assets/img/scene-4-lg.jpg"}
							title={"What am I supposed to do"}
							subtitle={"00:03:20 — 00:03:34"}
							ctas={[
								[
								" Go To Scene ",
								"iconcss icon-play-outline"
								]
							]}
							addAiStarred={()  => addAiStarred({key:8,type:"scene",image:"assets/img/scene-4.jpg",title:"What am I supposed to do",subtitle:"00:03:20 — 00:03:34",ctas:[[" Go To Scene ","iconcss icon-play-outline"]]})}
							removeAiStarred={() => removeAiStarred(8)}
							checkAiStarred={() => checkAiStarred(8)}
							/>
							<div className="list-column-inner"></div>
						</div>
						{ empties }
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}