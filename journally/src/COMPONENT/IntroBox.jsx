import React from "react";
import logo from "C:/Users/samya/OneDrive/Desktop/React apps/Journally/journally/src/typewriter.jpg";
function IntroBox(){
    return(
        <div>
            <div className="IntroBox">
                <p className="IntroPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>
                <img className="IntroImage" src={logo} alt={logo} />
            </div>

        </div>

    )
}
export default IntroBox;