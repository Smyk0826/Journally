import react from "react";
import Title from "./Title";
import SignIn from "./buttons/signIn";
import Login from "./buttons/login";
import { Link } from "react-router-dom";
function Header(){
return(
    <div className="TitleBar">
        <div>
        <Title/>
        </div>
        <div className="buttonBox">
        <Link to="/signin">  <SignIn/></Link>  
        <Link to="/Login">  <Login/></Link> 
        </div>
    </div>);
}
export default Header;