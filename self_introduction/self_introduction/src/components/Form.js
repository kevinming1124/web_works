import React from "react";
import "../styles/Form.css"
import "../assets/portrait.png";
function Form(props){
    return(
        <div className="container">
            <div>
            <h2 className="title">
                小茗 ( 楊凱茗 )
            </h2>
            </div>
            <div className="photo_item">
                <img className="photo" width="20%" src={require('../assets/portrait.png')}  alt="portrait" />
            </div>
        </div>
    );
}

export default Form;