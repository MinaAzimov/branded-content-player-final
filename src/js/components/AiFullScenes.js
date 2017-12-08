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
					key:13,
					type:"person",
					image:"assets/img/angela-moss.jpg",
					title:"Angela Moss",
					subtitle:"Portia Doubleday",
					ctas:[["Go To Bio   ","iconcss icon-person"], [" Go To Scene    ","iconcss icon-play-outline"]],
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
						key: 3,
						type: "product",
						image: "assets/img/cadillac-escalade-lg.jpg", 
						title: "2017 Cadillac Escalade SUV",
						subtitle: "Cadillac", 
						ctas: [["View Product ", "iconcss icon-product", "http://www.cadillac.com/preceding-year/escalade-suv.html"], [" Go To Scene   ", "iconcss icon-play-outline"]]
					},
					{
						key: 20,
						type: "trivia",
						image: "assets/img/trivia-1.jpg", 
						title: "General Trivia",
						subtitle: "Scene 2 — 00:01:03", 
						quote: 'Throughout the episode, Elliot references "IRC." Standing for Internet Relay Chat, IRC is an application protocol that allows for plaintext communication via a client/server model. A server hosts a "channel" where users can join to discuss various topics. However, "robots" are prevalent on servers. These allow users to communicate with the server itself, and request file transfers. There is a major presence of illegal file transfers facilitated by the use of these robots.',
						ctas: [[
						"  Go To Scene",
						"iconcss icon-play-outline"
						]]
					},
					{
						key: 9,
						type: "music",
						image: "assets/img/world-destruction.jpg", 
						title: "World Destruction (feat. John Lydon)",
						subtitle: "Time Zone feat. John Lydon", 
						ctas:[["View Song ","iconcss icon-music","https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"],["Go To Scene      ","iconcss icon-play-outline"]]
					},

																
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
						ctas: [["View Product ", "iconcss icon-product", "http://www.cadillac.com/preceding-year/escalade-suv.html"], [" Go To Scene   ", "iconcss icon-play-outline"]]
					},
					{
						key: 11,
						type: "product",
						image: "assets/img/flash-drive-lg.jpg", 
						title: "DUO 32GB Micro USB Flash Drive",
						subtitle: "Samsung at BestBuy", 
						ctas: [["View Product  ", "iconcss icon-product", "https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p"], ["Go To Scene    ", "iconcss icon-play-outline"]]
					},
					{
						key: 20,
						type: "trivia",
						image: "assets/img/trivia-1.jpg", 
						title: "General Trivia",
						subtitle: "Scene 2 — 00:01:03", 
						quote: 'Throughout the episode, Elliot references "IRC." Standing for Internet Relay Chat, IRC is an application protocol that allows for plaintext communication via a client/server model. A server hosts a "channel" where users can join to discuss various topics. However, "robots" are prevalent on servers. These allow users to communicate with the server itself, and request file transfers. There is a major presence of illegal file transfers facilitated by the use of these robots.',
						ctas: [[
						"  Go To Scene",
						"iconcss icon-play-outline"
						]]
					},
					{
						key: 21,
						type: "trivia",
						image: "assets/img/trivia-2.jpg", 
						title: "Fun Fact",
						subtitle: "Scene 2 — 00:01:11", 
						quote: "Elliot's signature black hoodie is from Rami Malek's own personal wardrobe.",
						ctas: [[
						"   Go To Scene",
						"iconcss icon-play-outline"
						]]
					},
					{
						key: 9,
						type: "music",
						image: "assets/img/world-destruction.jpg", 
						title: "World Destruction (feat. John Lydon)",
						subtitle: "Time Zone feat. John Lydon", 
						ctas:[["View Song ","iconcss icon-music","https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"],["Go To Scene      ","iconcss icon-play-outline"]]
					},
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
					key:14,
					type:"person",
					image:"assets/img/trenton-lg.jpg",
					title:"Trenton",
					subtitle:"Sunita Mani",
					ctas:[["Go To Bio    ","iconcss icon-person"], ["  Go To Scene    ","iconcss icon-play-outline"]],
					characterName: 'Trenton',
					actorName: 'Sunita Mani',
					characterImage: 'assets/img/trenton-lg.jpg',
					actorImage: 'assets/img/sunita-mani-lg.jpg',
					characterBio: 'Trenton, known only by her hacker name, is a member of fsociety. Her parents are Iranian immigrants who came to America for freedom. Her father works 60-hour weeks to find tax loopholes for a millionaire art dealer. Her mother ran up a five-figure debt earning an online degree. She has a young brother named Mohammed. The family lives together in Brooklyn and she is a student at a nearby university. In her first face-to-face meeting with the other members of fsociety Trenton uses a Stagefright exploit to own Mobley\'s Android phone.',
					actorBio: 'Sunita Mani is an actress, dancer, and comedian most commonly recognized for her gyrations in the viral music video \"Turn Down for What\" (dir. The Daniels) and as part of the Cocoon Central Dance Team. She also appears in \"Don\'t Think Twice\" as Amy, \"Mr. Robot\" as Trenton, and in the Netflix original series, G.L.O.W as Arthie. Sunita has also guest starred on network television shows including \"Broad City\" on Comedy Central, Search Party on TBS, and The Good Place on NBC.',
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
					image:"assets/img/mobley-lg.jpg",
					title:"Mobley",
					subtitle:"Azhar Khan",
					ctas:[[" Go To Bio","iconcss icon-person"], ["  Go To Scene ","iconcss icon-play-outline"]],
					characterName: 'Mobley',
					actorName: 'Azhar Khan',
					characterImage: 'assets/img/mobley-lg.jpg',
					actorImage: 'assets/img/azhar-khan-lg.jpg',
					characterBio: 'Mobley, known only by his hacker name, is a member of fsociety. Mobley was born on January 2, 1984. He lives in Brooklyn. He is a fan of an obscure DJ from whom he took his hacker name. He even created an Angelfire page in DJ Mobley\'s honor. He secures the abandoned Fun Society Arcade as Fsociety\'s base, while also recruiting experienced hacker, Leslie Romero. He meets Elliot some time in between these events. He works at Bank of E and often visits Romero at his home.',
					actorBio: 'Azhar Khan was born on January 7th, 1984 in Mumbai, India and raised in New York City. He is an actor, writer, visual artist, legerdemain enthusiast, and frustrated inventor. A peculiar blend of training and influences have led to him working in an assortment of venues and across various media platforms, from radio plays and video installations to live comedy and primetime television.',
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
					image:"assets/img/romero-lg.jpg",
					title:"Romero",
					subtitle:"Ron Cephas Jones",
					ctas:[["  Go To Bio","iconcss icon-person"], ["   Go To Scene    ","iconcss icon-play-outline"]],
					characterName: 'Romero',
					actorName: 'Ron Cephas Jones',
					characterImage: 'assets/img/romero-lg.jpg',
					actorImage: 'assets/img/ron-cephas-jones-lg.jpg',
					characterBio: 'Leslie Romero is a computer criminal, engineer, and biologist, specializing in phone phreaking and marijuana husbandry. He lives with his elderly mother, Nell Romero, and has a history with Mobley. Though Romero is highly knowledgeable, his thirst for fame and lack of commitment leads to conflict with other members of fsociety.',
					actorBio: 'Ron Cephas Jones is an actor, known for Half Nelson (2006), Sweet and Lowdown (1999) and This Is Us (2016). Jones has also performed in several theatrical productions with the Steppenwolf Theatre Company in Chicago, Illinois; appeared as the title character of Shakespeare\'s Richard III with The Public Theater in New York City, New York, as well as other Off Broadway productions. Jones has served as an understudy or standby in several Broadway theatre productions.',
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
						image: "assets/img/floral-heart-sunglasses-lg.jpg", 
						title: "Floral Heart Glasses",
						subtitle: "Torrid Fashion", 
						ctas: [["View Product", "iconcss icon-product", "http://www.torrid.com/product/floral-heart-sunglasses/10265338.html"], ["  Go To Scene ", "iconcss icon-play-outline"]]
					},
					{
						key: 20,
						type: "trivia",
						image: "assets/img/trivia-1.jpg", 
						title: "General Trivia",
						subtitle: "Scene 2 — 00:01:03", 
						quote: 'Throughout the episode, Elliot references "IRC." Standing for Internet Relay Chat, IRC is an application protocol that allows for plaintext communication via a client/server model. A server hosts a "channel" where users can join to discuss various topics. However, "robots" are prevalent on servers. These allow users to communicate with the server itself, and request file transfers. There is a major presence of illegal file transfers facilitated by the use of these robots.',
						ctas: [[
						"  Go To Scene",
						"iconcss icon-play-outline"
						]]
					},
					{
						key: 1,
						type: "music",
						image: "assets/img/sound-and-color-lg.jpg", 
						title: "Sound and Color",
						subtitle: "Alabama Shakes", 
						ctas:[["View Song","iconcss icon-music","https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"],[" Go To Scene  ","iconcss icon-play-outline"]]
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
						key: 10,
						type: "music",
						image: "assets/img/people-who-died.jpg", 
						title: "People Who Died",
						subtitle: "The Jim Caroll Band", 
						ctas:[["View Song  ","iconcss icon-music","https://open.spotify.com/track/6taFIgW5YE94x1icBh5vTg"],["Go To Scene       ","iconcss icon-play-outline"]]
					},
					{
						key: 20,
						type: "trivia",
						image: "assets/img/trivia-1.jpg", 
						title: "General Trivia",
						subtitle: "Scene 2 — 00:01:03", 
						quote: 'Throughout the episode, Elliot references "IRC." Standing for Internet Relay Chat, IRC is an application protocol that allows for plaintext communication via a client/server model. A server hosts a "channel" where users can join to discuss various topics. However, "robots" are prevalent on servers. These allow users to communicate with the server itself, and request file transfers. There is a major presence of illegal file transfers facilitated by the use of these robots.',
						ctas: [[
						"  Go To Scene",
						"iconcss icon-play-outline"
						]]
					},
					{
					    key: 22,
	                    type: "trivia",
	                    image: "assets/img/trivia-3.jpg",
	                    title: "Other Trivia",
	                    subtitle: "Scene 4 — 00:03:23", 
	                    quote: 'In this episode, the security company has to thwart a DDoS attack. "DDoS" stands for "distributed denial of service." It\'s a tactic used to prevent a company\'s servers from functioning by using all their bandwidth. Real or virtual computers all send and receive data to all servers on a network, stopping legitimate users from exercising real transactions. This effectively stops business from taking place, causing a loss in revenue and consumer trust.',
	                    ctas: [[
		                 "    Go To Scene",
		                "iconcss icon-play-outline"
		                    ]]
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