import react, {useContext, useEffect, useState } from "react";
import Title from "./Title";
import ListItem from "./NotesList/NotesItem";
import Note_book from "./buttons/notebook";
import LogOut from "./buttons/logout";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { nameContext } from "../context/context";

function Profile_page(){
    const value = useContext(nameContext);
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
                <ListItem date = "22 April 2024" title = {value.name}></ListItem>
            </div>
            
    </div>
    );
}

export default Profile_page;