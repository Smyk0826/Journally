import react from "react";
import Title from "./Title";
import LogOut from "./buttons/logout";
import WriteArea from "./notebook components/WriteArea";
function Notebook(){
return(
    <div>
        <div className="TitleBar">
            <div>
            <Title/>
            </div>
            <div className="buttonBox">
                <LogOut/>
            </div>
        
        </div>
        <h2>whats on your mind</h2>
        <WriteArea/>
    </div>);
}
export default Notebook;