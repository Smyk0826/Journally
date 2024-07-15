import react, { useState, useContext } from "react";
import Title from "./Title";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { nameContext } from "../context/context";

function Login_page(){
const navigate = useNavigate();
const [loginPass, setLoginPass] = useState('');
const [loginID,setLoginID] = useState('');
const value = useContext(nameContext);

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/Login', {
            loginID,
            loginPass,
        });
        console.log(response.data);
        if (response.data.success) {
            value.setName(response.data.userName);
            navigate('/profile'); // Redirect to the dashboard page
          } else {
            alert('Login failed!');
          }
    } catch (error) {
        console.error('There was an error in Logging in -', error);
        alert('An error occurred. Please try again.');
    }
    // try {
    //     const response = await axios.post('http://localhost:3001/profile', {
    //         loginID
    //     });
    //     console.log(response.data);
    //     if (response.data.success) {
    //         console.log('recieved data for id -', response.data.loginID)// Redirect to the dashboard page
    //       } else {
    //         alert('Login failed!');
    //       }
    // } catch (error) {
    //     console.error('There was an error in Logging in -', error);
    //     alert('An error occurred. Please try again.');
    // }
};
return(
    <div>
    <div className="TitleBar">
        <div>
        <Title/>
        </div>
        <div className="buttonBox">
            {/* <LogOut/> */}
        </div>
    
    </div>
        <div>
            <form onSubmit={handleSubmit}>
            <div className="TextWriting">
            <div className="form-group">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value={loginID} onChange={(e)=>setLoginID(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" class="TextArea form-control" id="exampleFormControlInput1" placeholder="Password" value={loginPass} onChange={(e)=>setLoginPass(e.target.value)}/>
            </div>
            <button type="submit" className="submit btn btn-dark">Log In</button>
            </div>
            </form>
        </div>
    </div>
    );
}

export default Login_page;