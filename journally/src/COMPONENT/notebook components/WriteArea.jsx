import React from "react";
import pageArea from "C:/Users/samya/OneDrive/Desktop/React apps/Journally/journally/src/page.png";
function WriteArea(){
    return(
        <div className="TextWriting">
            {/* <img alt={pageArea} className="WritingPage" src={pageArea}></img> */}
            <h2 className="Gratitude">Hi!, how have you been?</h2>
            <div className="form-group">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title" />
            </div>
            <textarea  rows="8" cols="60" className="TextArea form-control" placeholder="Content"></textarea>
            <button className="submit btn btn-dark">Submit</button>
        </div>

    );
}
export default WriteArea;