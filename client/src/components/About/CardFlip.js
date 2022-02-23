
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
// import Photo from '../../images/hex-img.svg';
import BenPhoto from '../../images/ben.jpg'

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
        <>
        <div className="card-flip">
      
         <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
         <div className="front">
           <div>
             <img id="its-me"  alt="me" onClick={this.handleClick}/>
           </div>
         </div>
         <div className="back">
           <div style={{ border: "1px solid #cccc", width: "500px", height: "250px"}}>
            <p className="abt-txt" onClick={this.handleClick}>I'm Bridget, I completed a full stack boot camp at the University 
            of Utah in February. I have a previous degree in geology but I have discovered that web development 
            is truly my passion! I am available to work as soon as possible. My favorite technologies/languages include React, Mongo, javaScript and GraphQl. I cannot wait
            to continue learning and broaden my skill-set. 
            </p>
           </div>
         </div>
       </ReactCardFlip>
       <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="front">
          <div>
            <img id="its-me" src={BenPhoto} alt="me"style={{width: "500px"}} onClick={this.handleClick}/>
          </div>
        </div>
        <div className="back">
          <div style={{ border: "1px solid #cccc", width: "500px", height: "250px"}}>
           <p className="abt-txt" onClick={this.handleClick}>I'm Ben, 
           </p>
          </div>
        </div>
      </ReactCardFlip>
         <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
         <div className="front">
           <div>
             <img id="its-me"  alt="me" onClick={this.handleClick}/>
           </div>
         </div>
         <div className="back">
           <div style={{ border: "1px solid #cccc", width: "500px", height: "250px"}}>
            <p className="abt-txt" onClick={this.handleClick}>I'm Bridget, I completed a full stack boot camp at the University 
            of Utah in February. I have a previous degree in geology but I have discovered that web development 
            is truly my passion! I am available to work as soon as possible. My favorite technologies/languages include React, Mongo, javaScript and GraphQl. I cannot wait
            to continue learning and broaden my skill-set. 
            </p>
           </div>
         </div>
       </ReactCardFlip>
       </div>
       </>
    );
  }
}


  
//   const Card = () => {
//     const [isFlipped, setIsFlipped] = React.useState(false);
//     return (
//       <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//         <div
//           onMouseEnter={() => setIsFlipped((prev) => !prev)}
//           className="CardFront"
//         >
//           <div>
//             This is the fron of the card
//             <h3>title</h3>
//             <img id="its-me" src={require('../../images/hex-img.PNG')} alt="" />
//           </div>
//         </div>
//         <div
//           onMouseLeave={() => setIsFlipped((prev) => !prev)}
//           className="CardBack"
//         >
//           This is the back of the card.
//         </div>
//       </ReactCardFlip>
//     );
//   };
export default Card;