
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";

import Photo from '../../images/peoplehike.jpg';
import dog from '../../assets/images/pexels-rachel-claire-4992604.jpg';
import './About.css';


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

           <div className="about-div">
            <p className="about-txt" onClick={this.handleClick}>
               <p>Route: a way or course taken in getting from a starting point to a destination.</p>
               <p>Root: the part of a thing attaching it to a greater or more fundamental whole; the end or base.</p>

            </p>
            <img src={dog} style={{width: '125vh'}} alt="puppy"></img>
            <div>
                <h2 className="about-txt">
                    As outdoor enthusiasts we wanted to build an app that would help connect people online and bring it to the outdoors.
                </h2>
            </div>
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