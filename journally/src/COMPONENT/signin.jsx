import react, { useState } from "react";
import Title from "./Title";
import axios from "axios";

function SignInPage(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/signin', {
                username,
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error registering!', error);
        }
    };
return(
    <div>
    <div className="TitleBar">
        <div>
        <Title/>
        </div>
        <div className="buttonBox">
        </div>
    
    </div>
        <div>
        <h2 className="Gratitude">Welcome!</h2>
            <form onSubmit={handleSubmit}>
            
            <div className="TextWriting">

            <div className="form-group">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" class="TextArea form-control" id="exampleFormControlInput1" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="submit btn btn-dark">Sign In</button>
            </div>
            </form>
        </div>
    </div>
    );
}

export default SignInPage;