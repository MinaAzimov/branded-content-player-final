import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

export default class ShareItemCard extends Component {



  constructor(props) {
	  super(props);
	  this.state = {title: '',
	                url: 'http://brandedcontent.nbcuxlab.com/player-staging-2/',
	                exampleImage: 'assets/img/scene-1-lg.jpg'};
		
  }

	
  handleChange = (event)=>{
  if(this.props.fullAiShared[0].key == 0){
  	 this.setState({title: this.props.fullAiShared[0].title,
  	                url: this.state.url+this.props.fullAiShared[0].image,
  	                exampleImage: this.props.fullAiShared[0].image  });
  }
  if(this.props.fullAiShared[0].key == 3){
  	 this.setState({title: this.props.fullAiShared[0].title,
  	                url: this.state.url+this.props.fullAiShared[0].image,
  	                exampleImage: this.props.fullAiShared[0].image  });
  }
  if(this.props.fullAiShared[0].key == 11){
  	 this.setState({title: this.props.fullAiShared[0].title,
  	                url: this.state.url+this.props.fullAiShared[0].image,
  	                exampleImage: this.props.fullAiShared[0].image  });
  }
  if(this.props.fullAiShared[0].key == 24	){
  	 this.setState({title: this.props.fullAiShared[0].title,
  	                url: this.state.url+this.props.fullAiShared[0].image,
  	                exampleImage: this.props.fullAiShared[0].image  });
  }
  if(this.props.fullAiShared[0].key == 1	){
  	 this.setState({title: this.props.fullAiShared[0].title,
  	                url: this.state.url+this.props.fullAiShared[0].image,
  	                exampleImage: this.props.fullAiShared[0].image  });
  }
  if(this.props.fullAiShared[0].key == 9	){
  	 this.setState({title: this.props.fullAiShared[0].title,
  	                url: this.state.url+this.props.fullAiShared[0].image,
  	                exampleImage: this.props.fullAiShared[0].image  });
  }
  if(this.props.fullAiShared[0].key == 10	){
  	 this.setState({title: this.props.fullAiShared[0].title,
  	                url: this.state.url+this.props.fullAiShared[0].image,
  	                exampleImage: this.props.fullAiShared[0].image  });
  }
  }

  handleSubmit = (event)=>{
   
    console.log(this.state.value);
    
    event.preventDefault();
  }




	

	render() {

		let { show, allowEmbed, sharePlatforms, data, addShareData, fullAiShared, shareUrl} = this.props;

		const {
              FacebookShareButton,
              GooglePlusShareButton,
              TwitterShareButton,
              PinterestShareButton,
            } = ShareButtons;

        



        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');
        const GooglePlusIcon = generateShareIcon('google');
        const PinterestIcon = generateShareIcon('pinterest');
   

const title = 'Scene 1: Elliot looks for a clue';
let shareUrl1 = "http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-1-lg.jpg";
let exampleImage = "assets/img/scene-1-lg.jpg";


		const content = (
			<div className="share-item-card">

		
				<i className="iconcss icon-share" onClick={(event)=>{addShareData(), this.handleChange()}}></i>
			

         <button className="share-card__button facebook">
            <FacebookShareButton
               url={this.state.url}
               quote={this.state.title}
               windowWidth={1000}
               windowHeight={730}
               className="Demo__some-network__share-button">
               <i className="iconcss icon-facebook"></i>
              </FacebookShareButton> 
	     </button>
	     <button className="share-card__button twitter">
		     <TwitterShareButton
                   url={this.state.url}
                   title={this.state.title}
                   windowWidth={1000}
                   windowHeight={730}
                   className="Demo__some-network__share-button">
                  <i className="iconcss icon-twitter"></i>
              </TwitterShareButton>
	     </button>
         <button className="share-card__button mail">
			  <PinterestShareButton
                   url={String(this.state.url)}
                   media={`${String(window.location)}${this.state.exampleImage}`}
                   windowWidth={1000}
                   windowHeight={730}
                   className="Demo__some-network__share-button">
                   <i className="iconcss icon-pinterest"></i>
               </PinterestShareButton>
		 </button>
		 <button className="share-card__button google-plus">
			  <GooglePlusShareButton
                   url={this.state.url}
                   windowWidth={1000}
                   windowHeight={730}
                   className="Demo__some-network__share-button">
                   <i className="iconcss icon-google-plus"></i>
              </GooglePlusShareButton>
		 </button>		
	 </div>
		) 
		return (
			<div>
				{content}
			</div>
		)
	}
}