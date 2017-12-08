import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { debounce } from 'lodash';

export default class Video extends Component {

	static propTypes = {
		pauseCardSrc: PropTypes.bool,
	    glasses: PropTypes.bool,
	    trivia: PropTypes.bool,
	    triviaGeneral: PropTypes.bool,
	    triviaFun: PropTypes.bool,
	    actress: PropTypes.bool,
	    actor: PropTypes.bool,
	    sound: PropTypes.bool,
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
	    counter: PropTypes.array,
	    inputValue: PropTypes.string,
	    currentObject: PropTypes.string,
	    videoSrc: PropTypes.string,
	    isPlaying: PropTypes.bool,
	    onProgress: PropTypes.func,
	    onLoad: PropTypes.func,
	    updateInterval: PropTypes.number,
	    isScrubbing: PropTypes.bool,
	    currentTime: PropTypes.number,
	    volume: PropTypes.number,
	    isFullScreen: PropTypes.bool,
	    onToggleFullScreen: PropTypes.func,
	    onClick: PropTypes.func,
	    endCardShowInfo: PropTypes.bool,
	    onVideoEnd: PropTypes.func,
	    onVideoCanPlay: PropTypes.func,
	    onVideoWaiting: PropTypes.func,
	    updateInputValue: PropTypes.func,
	    changeSelectedSrc: PropTypes.func,
	    changeSelectedSrcGlasses: PropTypes.func,
	    changeSelectedSrcActress: PropTypes.func,
	    changeSelectedSrcActor: PropTypes.func,
	    changeSelectedSrcSound: PropTypes.func,
	    changeSelectedSrcTrivia: PropTypes.func,
	    changeSelectedSrcTriviaGeneral: PropTypes.func,
	    changeSelectedSrcTriviaFun: PropTypes.func,
	    changeSelectedSrcitem8: PropTypes.func,
	    changeSelectedSrcitem9: PropTypes.func,
	    changeSelectedSrcitem10: PropTypes.func,
	    changeSelectedSrcitem11: PropTypes.func,
	    changeSelectedSrcitem12: PropTypes.func,
	    changeSelectedSrcitem13: PropTypes.func,
	    changeSelectedSrcitem14: PropTypes.func,
	    changeSelectedSrcitem15: PropTypes.func,
	    changeSelectedSrcitem16: PropTypes.func,
	    changeSelectedSrcitem17: PropTypes.func,
	    changeSelectedSrcitem18: PropTypes.func,
	    changeSelectedSrcitem19: PropTypes.func,
	    changeSelectedSrcitem20: PropTypes.func,
	    videoTrigger: PropTypes.number,
	    jumpToScene: PropTypes.func,
	    resetScene: PropTypes.func
		
		
	}

	static defaultProps = {
		updateInterval: 200,
		onProgress: () => false,
		onLoad: () => false,
		onVideoEnd: () => false,
		onVideoCanPlay: () => false
	}


	constructor(props) {
		super(props);
	}

	componentDidMount() {

		// Set up player events
		this.video.addEventListener('loadedmetadata', this.onLoad);
		//this.video.addEventListener('loadeddata', this.onLoad);		
		this.video.addEventListener('ended', this.props.onVideoEnd);
		this.video.addEventListener('canplay', this.props.onVideoCanPlay);
		this.video.addEventListener('waiting', this.props.onVideoWaiting);

		this.video.addEventListener('webkitfullscreenchange', this.onFullScreenChange, false);
		this.video.addEventListener('mozfullscreenchange', this.onFullScreenChange, false);
		this.video.addEventListener('fullscreenchange', this.onFullScreenChange, false);
		this.video.addEventListener('MSFullscreenChange', this.onFullScreenChange, false);

		//ios
		this.video.addEventListener('webkitendfullscreen', this.oniOsDone, false);
	}

	componentDidUpdate(prevProps) {
		const { isPlaying, isScrubbing, currentTime, volume, isFullScreen, forceToTime, inputValue, handleChange, updateInputValue, counter, currentObject, pauseCardSrc, changeSelectedSrc,changeSelectedSrcGlasses, changeSelectedSrcTrivia,
			changeSelectedSrcTriviaGeneral, changeSelectedSrcTriviaFun, changeSelectedSrcActress, changeSelectedSrcActor, changeSelectedSrcSound, changeSelectedSrcitem8, changeSelectedSrcitem9, changeSelectedSrcitem10,
			changeSelectedSrcitem11, changeSelectedSrcitem12, changeSelectedSrcitem13, changeSelectedSrcitem14, changeSelectedSrcitem15, changeSelectedSrcitem16, changeSelectedSrcitem17, changeSelectedSrcitem18, changeSelectedSrcitem19, changeSelectedSrcitem, changeSelectedSrcitem20,
			currentItem, glasses, actor, actress, sound, trivia, triviaGeneral, triviaFun, data, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, videoTrigger, resetScene   } = this.props;

		// Play / pause
		if (prevProps.isPlaying !== isPlaying) {

				if (isPlaying) {
					this.play();
					if (this.props.videoTrigger == 1) {
						this.video.currentTime = 2.00;
						//this.video.currentTime = hmsToSecondsOnly(this.props.data[1].startTime);
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 2) {
						this.video.currentTime = 55.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 3) {
						this.video.currentTime = 126.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 4) {
						this.video.currentTime = 200.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 5) {
						this.video.currentTime = 139.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 6) {
						this.video.currentTime = 10.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 7) {
						this.video.currentTime = 89.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 8) {
						this.video.currentTime = 127.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 9) {
						this.video.currentTime = 55.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 10) {
						this.video.currentTime = 200.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 11) {
						this.video.currentTime = 63.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 12) {
						this.video.currentTime = 71.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 13) {
						this.video.currentTime = 200.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 14) {
						this.video.currentTime = 21.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 15) {
						this.video.currentTime = 130.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 16) {
						this.video.currentTime = 128.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 17) {
						this.video.currentTime = 10.00;
						this.props.resetScene();
					}
					if (this.props.videoTrigger == 18) {
						this.video.currentTime = 0.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 19) {
						this.video.currentTime = 126.00;
						this.props.resetScene();
					}

					if (this.props.videoTrigger == 20) {
						this.video.currentTime = 130.00;
						this.props.resetScene();
					}



				} else {
					this.pause();
				}
			}


		if (isPlaying && isScrubbing !== prevProps.isScrubbing) {
			if (isScrubbing) {
				this.pause();
			}
			else {
				this.play();
			}
		}

		if (isScrubbing) {

			if (prevProps.currentTime !== currentTime) {
				this.video.currentTime = currentTime;
				this.onProgress();
			}
		} else if (prevProps.forceToTime !== forceToTime) {
			this.video.currentTime = forceToTime;
		}

		if (volume !== prevProps.volume) {
			this.video.volume = volume;
		}

		if (isFullScreen !== prevProps.isFullScreen) {
			if (isFullScreen) {
				this.goFullScreen();
			}
			else {
				this.exitFullScreen();
			}
		}
	}

	play() {
		this.video.play();
		this.startProgressUpdates();
	}

	pause() {
		this.video.pause();
		this.stopProgressUpdates();		
	}

	oniOsDone = () => {
		console.log("oniOsDone");
		this.props.setPlayState(false);
	}

	onFullScreenChange = () => {
		let paused = this.video.paused;
		console.log("onFullScreenChange! Paused =", paused);

		const state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
		this.pendingFullScreenState = state;
		if (state !== this.props.isFullScreen) {
			// If there's a mismatch it means we applied full screen with the native browser control,
			// so we need to re-update the full screen state as a result
			this.props.onToggleFullScreen();
		}
	}

	goFullScreen() {
		let video = this.video;
		if (video.requestFullscreen) {
			video.requestFullscreen();
		}
		else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		}
		else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen();
		}
	}

	exitFullScreen() {
		let video = this.video;
		if (document.exitFullscreen) {
			video.exitFullscreen();
		}
		else if (document.mozExitFullscreen) {
			video.mozExitFullscreen();
		}
		else if (document.webkitExitFullscreen) {
			video.webkitExitFullscreen();
		}
	}

	debounceRestart = debounce(()=>{
		console.log("restarting....");
		this.video.play();
	}, 1000)

	componentWillUnmount() {
		this.stopProgressUpdates();
		this.video.removeEventListener('loadeddata', this.onLoad);
	}

	startProgressUpdates() {
		this.onProgress();
		this.progressUpdateTimeout = setInterval(this.onProgress, this.props.updateInterval);
	}

	stopProgressUpdates() {
		clearInterval(this.progressUpdateTimeout);
	}

	onProgress = () => {
			var currentTime = this.video.currentTime;
			var bufferedRange = this.video.buffered;

			this.props.onProgress(currentTime, bufferedRange);
			var val;

			var toHHMMSS = function toHHMMSS(secs) {
				var sec_num = parseInt(secs, 10);
				var hours = Math.floor(sec_num / 3600) % 24;
				var minutes = Math.floor(sec_num / 60) % 60;
				var seconds = sec_num % 60;
				return [hours, minutes, seconds].map(function (v) {
					return v < 10 ? "0" + v : v;
				}).filter(function (v, i) {
					return v !== "00" || i > 0;
				}).join(":");
			};


switch (true) {
	case this.props.currentItem.indexOf(this.props.data[0].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[0].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[0].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[0].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[0].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[0].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[0].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[0].startTime && toHHMMSS(currentTime) <= this.props.data[0].endTime) {
    var val = true;
	this.props.changeSelectedSrcGlasses(val);
    break;

}
    case this.props.currentItem.indexOf(this.props.data[0].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[0].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[0].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[0].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[0].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[0].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[0].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcGlasses(val);
    break;
}


if ((this.video.currentTime > 2.00 && this.video.currentTime <= 126.00) ||  (this.video.currentTime > 197.00) &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[1].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[1].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[1].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[1].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[1].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[1].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[1].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[1].startTime && toHHMMSS(currentTime) <= this.props.data[1].endTime) {
    var val = true;
	this.props.changeSelectedSrcActor(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[1].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[1].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[1].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[1].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[1].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[1].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[1].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcActor(val);
    break;

     default:
   var val = false;
   break;
}

}

if ((this.video.currentTime > 2.00 && this.video.currentTime <= 126.00)  &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[2].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[2].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[2].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[2].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[2].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[2].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[2].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[2].startTime && toHHMMSS(currentTime) <= this.props.data[2].endTime) {
    var val = true;
	this.props.changeSelectedSrc(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[2].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[2].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[2].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[2].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[2].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[2].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[2].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrc(val);
    break;

}
}

if ((this.video.currentTime > 126.00 && this.video.currentTime < 197.00)  &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[3].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[3].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[3].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[3].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[3].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[3].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[3].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[3].startTime && toHHMMSS(currentTime) <= this.props.data[3].endTime) {
    var val = true;
	this.props.changeSelectedSrcActress(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[3].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[3].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[3].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[3].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[3].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[3].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[3].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcActress(val);
    break;
}
}

if ((this.video.currentTime > 126.00 && this.video.currentTime < 197.00)  &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[4].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[4].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[4].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[4].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[4].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[4].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[4].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[4].startTime && toHHMMSS(currentTime) <= this.props.data[4].endTime) {
    var val = true;
	this.props.changeSelectedSrcSound(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[4].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[4].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[4].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[4].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[4].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[4].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[4].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcSound(val);
    break;
}
}

if ((this.video.currentTime > 198.00 && this.video.currentTime < 223.00)  &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[6].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[6].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[6].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[6].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[6].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[6].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[6].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[6].startTime && toHHMMSS(currentTime) <= this.props.data[6].endTime) {
    var val = true;
	this.props.changeSelectedSrcTrivia(val);
    break;
}

    case this.props.currentItem.indexOf(this.props.data[6].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[6].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[6].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[6].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[6].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[6].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[6].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcTrivia(val);
    break;
}
}

if ((this.video.currentTime > 55.00 && this.video.currentTime < 126.00) || !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[7].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[7].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[7].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[7].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[7].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[7].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[7].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[7].startTime && toHHMMSS(currentTime) <= this.props.data[7].endTime) {
    var val = true;
	this.props.changeSelectedSrcTriviaFun(val);
    break;
}

    case this.props.currentItem.indexOf(this.props.data[7].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[7].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[7].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[7].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[7].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[7].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[7].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcTriviaFun(val);
    break;
}
}

if ((this.video.currentTime > 0.00 && this.video.currentTime < 5.00)  &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[8].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[8].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[8].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[8].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[8].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[8].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[8].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[8].startTime && toHHMMSS(currentTime) <= this.props.data[8].endTime) {
    var val = true;
	this.props.changeSelectedSrcitem8(val);
    break;
}

    case this.props.currentItem.indexOf(this.props.data[8].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[8].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[8].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[8].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[8].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[8].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[8].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcitem8(val);
    break;
}
}
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[9].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[9].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[9].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[9].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[9].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[9].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[9].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[9].startTime && toHHMMSS(currentTime) <= this.props.data[9].endTime) {
    var val = true;
	this.props.changeSelectedSrcitem9(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[9].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[9].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[9].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[9].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[9].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[9].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[9].key7) <= 0: 
 	var val = false;
	this.props.changeSelectedSrcitem9(val);
    break;
}



if ((this.video.currentTime > 55.00 && this.video.currentTime < 126.00)  ||  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[10].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[10].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[10].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[10].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[10].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[10].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[10].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[10].startTime && toHHMMSS(currentTime) <= this.props.data[10].endTime) {
    var val = true;
	this.props.changeSelectedSrcitem10(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[10].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[10].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[10].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[10].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[10].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[10].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[10].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcitem10(val);
    break;
}
}

if ((this.video.currentTime > 198.00 && this.video.currentTime < 223.00)  &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[11].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[11].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[11].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[11].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[11].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[11].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[11].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[11].startTime && toHHMMSS(currentTime) <= this.props.data[11].endTime) {
    var val = true;
	this.props.changeSelectedSrcitem11(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[11].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[11].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[11].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[11].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[11].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[11].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[11].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcitem11(val);
    break;

}
}

	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[12].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[12].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[12].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[12].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[12].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[12].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[12].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[12].startTime && toHHMMSS(currentTime) <= this.props.data[12].endTime) {
    var val = true;
	this.props.changeSelectedSrcitem12(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[12].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[12].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[12].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[12].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[12].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[12].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[12].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcitem12(val);
    break;
}

	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[13].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[13].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[13].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[13].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[13].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[13].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[13].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[13].startTime && toHHMMSS(currentTime) <= this.props.data[13].endTime) {
    var val = true;
	this.props.changeSelectedSrcitem13(val);
    break;
}

    case this.props.currentItem.indexOf(this.props.data[13].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[13].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[13].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[13].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[13].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[13].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[13].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcitem13(val);
    break;
}



if ((this.video.currentTime > 130.00 && this.video.currentTime < 210.00)  &&  !this.props.isScrubbing || this.props.isScrubbing) {
	switch (true) {
    case this.props.currentItem.indexOf(this.props.data[14].key1) !== -1:
	case this.props.currentItem.indexOf(this.props.data[14].key2) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[14].key3) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[14].key4) !== -1:
	case this.props.currentItem.indexOf(this.props.data[14].key5) !== -1:
	case this.props.currentItem.indexOf(this.props.data[14].key6) !== -1: 
	case this.props.currentItem.indexOf(this.props.data[14].key7) !== -1: 
	if (toHHMMSS(currentTime) >= this.props.data[14].startTime && toHHMMSS(currentTime) <= this.props.data[14].endTime) {
    var val = true;
	this.props.changeSelectedSrcitem14(val);
    break;
}
    case this.props.currentItem.indexOf(this.props.data[14].key1) <= 0:
	case this.props.currentItem.indexOf(this.props.data[14].key2) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[14].key3) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[14].key4) <= 0:
	case this.props.currentItem.indexOf(this.props.data[14].key5) <= 0:
	case this.props.currentItem.indexOf(this.props.data[14].key6) <= 0: 
	case this.props.currentItem.indexOf(this.props.data[14].key7) <= 0: 
    var val = false;
	this.props.changeSelectedSrcitem14(val);
    break;

}
}
		}


	onLoad = () => {
		let data = {
			duration: this.video.duration
		}
		this.props.onLoad(data);

		if (this.props.isPlaying) {
			this.play();
		}
	}

	render() {

		const { videoSrc, onClick, endCardShowInfo, updateInputValue, inputValue, handleChange, counter } = this.props;

		return (
			<div className="video-container">
				<video className="video" src={inputValue} ref={(el)=> { this.video = el }} onClick={onClick} />
				<i className="iconcss icon-replay"></i>
			</div>
		)
	}
}