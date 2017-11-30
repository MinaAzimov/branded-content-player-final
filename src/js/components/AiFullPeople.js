import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullPeople extends Component {

	static propTypes = {
		show: PropTypes.bool,
		click: PropTypes.func,
		isFullScreen: PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.state = {
			peopleData: [
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
					key:12,
					type:"person",
					image:"assets/img/christain-slater.jpg",
					title:"Mr. Robot",
					subtitle:"Christian Slater",
					ctas:[["Go To Bio  ","iconcss icon-person"], ["  Go To Scene        ","iconcss icon-play-outline"]],
					characterName: 'Mr. Robot',
					actorName: 'Christian Slater',
					characterImage: 'assets/img/mr-robot.jpg',
					actorImage: 'assets/img/christain-slater.jpg',
					characterBio: 'A mysterious figure who approaches Elliot with the opportunity to contribute to a worldwide revolution, Mr. Robot has a murky history but huge plans for the future. He recruits the members of fsociety to come together at the abandoned arcade – and is relentless in his leadership of the team.',
					actorBio: 'Christian Michael Leonard Slater was born on August 18, 1969 in New York City, to Michael Hawkins, a well-known soap actor, and Mary Jo Slater (née Lawton), a casting agent. Christian started in show business early, appearing on the soap opera The Edge of Night (1956) in 1976 at the age of 7. He went on to star in many Broadway shows in the early-1980s. He rose to fame in Hollywood after landing the role of Binx Davey in The Legend of Billie Jean (1985). He moved to Los Angeles in 1987 to pursue a further acting career after dropping out of high school. After having a starring role in the cult classic Heathers (1988), he became somewhat known as the Hollywood bad-boy, having many run-ins with the law. He is also well-known for having dated stars such as Winona Ryder, Christina Applegate, Samantha Mathis and was at one time engaged to actress/model Nina Huang. In 2000, he married Ryan Haddon, the daughter of 1970s model Dayle Haddon. The couple have two children, Jaden Christopher (b. 1999) and Eliana Sophia (b. 2001). As of early 2005, they separated and later divorced, but remain dedicated to bring up their children.',
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
					key:13,
					type:"person",
					image:"assets/img/angela-moss.jpg",
					title:"Angela Moss",
					subtitle:"Portia Doubleday",
					ctas:[["Go To Bio   ","iconcss icon-person"], ["  Go To Scene        ","iconcss icon-play-outline"]],
					characterName: 'Angela Moss',
					actorName: 'Portia Doubleday',
					characterImage: 'assets/img/angela-moss.jpg',
					actorImage: 'assets/img/portia-doubleday.jpg',
					characterBio: 'As an Allsafe account executive, Angela has over five years of marketing innovation experience with hands-on knowledge of go-to-market routes, business strategy and the ability to connect marketing to sales growth. She is ambitious but lacks confidence, savvy but lacks technological skills. She relies on her childhood friend and colleague, Elliot Alderson, for assistance in critical situations -- in both business and her personal life. Angelas mother died when she was young, from cancer which developed after her exposure to toxic chemicals at a factory owned by Evil Corp. She has a strong relationship with her father, Don, though events at Allsafe begin to strain their relationship. As Angela navigates corporate politics, Don worries that his daughter approaches moral compromise.',
					actorBio: 'Portia Doubleday was born on June 22, 1988 in Los Angeles, California, USA as Portia Ann Doubleday. She is an actress and producer, known for Carrie (2013), Youth in Revolt (2009) and Her (2013).',
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
					key:14,
					type:"person",
					image:"assets/img/dominique-diperro.jpg",
					title:"Dominique DiPerro",
					subtitle:"Grace Gummer",
					ctas:[["Go To Bio    ","iconcss icon-person"], ["  Go To Scene        ","iconcss icon-play-outline"]],
					characterName: 'Dominique DiPerro',
					actorName: 'Grace Gummer',
					characterImage: 'assets/img/dominique-diperro.jpg',
					actorImage: 'assets/img/grace-gummer.jpg',
					characterBio: 'Dominique "Dom" DiPierro is a FBI agent investigating the Five/Nine Hack. Though highly assertive and persuasive at work, DiPierro has no close friends, relationships, or personal life. She only finds companionship in anonymous sex chats and conversation with Alexa, her Amazon Echo smart speaker.',
					actorBio: 'Grace Gummer was born on May 9, 1986 in New York City, New York, USA as Grace Jane Gummer. She is an actress, known for Frances Ha (2012), The Homesman (2014) and Margin Call (2011).',
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
					key:15,
					type:"person",
					image:"assets/img/tyrell-wellick.jpg",
					title:"Tyrell Wellick",
					subtitle:"Martin Wallström",
					ctas:[[" Go To Bio","iconcss icon-person"], ["  Go To Scene        ","iconcss icon-play-outline"]],
					characterName: 'Tyrell Wellick',
					actorName: 'Martin Wallström',
					characterImage: 'assets/img/tyrell-wellick.jpg',
					actorImage: 'assets/img/martin-wallstrom.jpg',
					characterBio: 'After the Terry Colby hacking scandal, Wellick was appointed Interim Chief Technology Officer at Evil Corp. As CTO, Wellick relays the Evil Corps technology strategy to investors, supervises software development processes, and identifies platforms for delivering services. A visionary, he has also laid the foundations for new security protocols and measures. The Evil Corp job is a position he intends to make permanent, no matter who he has to impress or suppress to achieve this goal. His partner in social climbing and career mobility is his wife, Joanna, who goads him to more aggressive action and darker schemes. While Tyrell depends on their partnership, he also struggles to find his own path. When his interest in Elliot collides with his professional mission, Tyrell must choose whether to follow Joannas plan or take matters into his own hands.',
					actorBio: 'Martin Wallström was born on July 7, 1983 in Uddevalla, Västra Götalands län, Sweden as Carl Martin Gunnar Wallström Milkéwitz. He is an actor, known for Mr. Robot (2015), Simple Simon (2010) and Ego (2013). He is married to Lisa Linnertorp.',
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
				    key:16,
					type:"person",
					image:"assets/img/joanna-wellick.jpg",
					title:"Joanna Wellick",
					subtitle:"Stephanie Corneliussen",
					ctas:[["  Go To Bio","iconcss icon-person"], ["  Go To Scene        ","iconcss icon-play-outline"]],
					characterName: 'Joanna Wellick',
					actorName: 'Stephanie Corneliussen',
					characterImage: 'assets/img/joanna-wellick.jpg',
					actorImage: 'assets/img/stephanie-corneliussen.jpg',
					characterBio: 'She is willing to do whatever it takes to put her family in a position of wealth and power. Smart and ambitious, she knows that initiating chaos can sometimes be a path to the top.',
					actorBio: 'Stephanie Corneliussen was born on April 28, 1987 in Copenhagen, Denmark. She is an actress, known for Mr. Robot (2015), Hansel & Gretel: Witch Hunters (2013) and Legends of Tomorrow (2016).',
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
				    key:17,
					type:"person",
					image:"assets/img/whiterose-2.jpg",
					title:"Whiterose",
					subtitle:"BD Wong",
					ctas:[["   Go To Bio","iconcss icon-person"], ["  Go To Scene        ","iconcss icon-play-outline"]],
					characterName: 'Whiterose',
					actorName: 'BD Wong',
					characterImage: 'assets/img/whiterose-2.jpg',
					actorImage: 'assets/img/bd-wong.jpg',
					characterBio: 'Whiterose is the leader of the Dark Army, a Chinese hacker group. She is a transgender woman masquerading as the male Minister Zhi Zhang, the Chinese Minister of State Security.',
					actorBio: 'Bradley Darryl Wong, is an American actor. Wong appeared in Dr. George Huong for eleven seasons on Law and Order: SVU. He has acted in T.V. series, videogames, movies, and theatrical plays. Some of his works were playing Professor Hugo Strange in the series Gotham, Henry Wu in Jurassic Park, Kiki in And the Band Played On for HBO, and Captain Li Shang in the animated film Mulan, a role he reprised in the video game Kingdom Hearts: II. He is an activist in the LGBT+ community, and often dedicates time and money for the cause.',
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
				}
			]
		}
	}

	render() {

		const { show, click, isFullScreen, addAiStarred, checkAiStarred, removeAiStarred  } = this.props;

		const numPeople = this.state.peopleData.length;
		const is5Column = isFullScreen || ((numPeople % 4 != 0) && ((numPeople % 4) < (numPeople % 5)));

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--people': true,
			'list-container--people-5-column': is5Column
		});

		const people = this.state.peopleData.map((person, index, key, type, image, title, subtitle, ctas) =>
			<div key={index} >
				<AiFullListItem
				type={"person"}
				click={() => click('character', person)}
				image={person.characterImage}
				title={person.characterName}
				subtitle={person.actorName}
				addAiStarred={()  => addAiStarred({key,type,image,title,subtitle,ctas} = {key: person.key, type: person.type, image: person.image, title: person.title, subtitle:person.subtitle, ctas:person.ctas})}
				removeAiStarred={() => removeAiStarred(person.key)}
				checkAiStarred={() => checkAiStarred(person.key)}
				/>
				<div className="list-column-inner"></div>
			</div>
		);	

		let empties;
 		(is5Column) ? 
 		(
			empties = (new Array(5 - (numPeople % 5)).fill('')).map((empty, index) =>
				<div key={index} >
					<div className="empty"></div>
					<div className="list-column-inner"></div>
				</div>
			)
 		) : 
 		(
 			(numPeople % 4 != 0) ? (
	 			empties = (new Array(4 - (numPeople % 4)).fill('')).map((empty, index) =>
					<div key={index} className="empty">
						<div className="empty"></div>
						<div className="list-column-inner"></div>
					</div>
				)
			) : null
 		);
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						{people}
						{empties}					
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}