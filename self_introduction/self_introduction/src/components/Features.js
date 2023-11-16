import React from "react";
import "../styles/Feature.css";

function Features(props){
    return(
        <ul className="feature">
          <div className="textbox">
            <h1>
              {props.title}
            </h1>
            <ul className="content">
              <p>{props.content}</p>
              <p>{props.content1}</p>
              <p>{props.content2}</p>
            </ul>
          
            
          </div>
        </ul>
    );
}

export default Features;