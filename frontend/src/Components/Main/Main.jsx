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
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
          
            {/* <div className="inputDiv">  
            <input type="text" id="fname" name="fname"/>
                <SubscribeButton variant="contained" href="/signup">Subscribe --</SubscribeButton>
                <button>hii</button>
            </div> */}
            
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
