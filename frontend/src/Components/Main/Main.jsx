import React from "react";
import "./Main.scss";
import Shadow1 from "../../Assets/shadow-1.svg"
import Shadow2 from "../../Assets/shadow-2.svg"
import character from "../../Assets/Character.png"
import FloatBubble from "../../Assets/FloatBubble.svg"
import FloatStar from "../../Assets/FloatStar.svg"
import SubscribeButton from "../GeneralCustomComponent/SubscribeButton";

const Main = () => {
  return (
    <section className="main_section">
      <div className="main_container" >
        <div>
            <p style={{fontWeight:"Bold"}}> Hello Everyone!</p>
            <h1>I'm <span>Harshit Kumar</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime, quis architecto excepturi, delectus amet, praesentium esse nemo explicabo veritatis quia quasi. A hic consequatur, veritatis quisquam veniam qui minus.</p>
            
        </div>
        <div>
            
            <img src={FloatBubble} alt="FloatBubble Logo"/>
            <img src={character} alt="character Logo"/>
            <img src={FloatStar} alt="FloatStar Logo"/>
        </div>
        <img src={Shadow1}/>
        <img src={Shadow2}/>
      </div>
    </section>
  );
};

export default Main;
