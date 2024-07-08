import react, { useEffect, useState } from "react";
import Title from "./Title";
import ListItem from "./NotesList/NotesItem";
import Note_book from "./buttons/notebook";
import LogOut from "./buttons/logout";

function Profile_page(props){
    const [name, setName] = useState('');

    // fetch(url,{method: , header: , bady: })

    useEffect(() => {
        try {
        const response = axios.get('http://localhost:3001/profile', {
            
        });
        console.log(response.data);
    } catch (error) {
        console.error('There was an error in Logging in -', error);
        alert('An error occurred. Please try again.');
    }}, [])
return(
    <div>
        <div className="TitleBar">
            <div>
            <Title/>
            </div>
            <div className="buttonBox">
                <Note_book/> 
                <LogOut/>
            </div>
        
        </div>
            <div className="NoteListContainer">
                <ListItem date = "22 April 2024" title = {"samyak"}></ListItem>
            </div>
            
    </div>
    );
}

export default Profile_page;