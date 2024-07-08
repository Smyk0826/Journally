import React from "react";

function ListItem(props){
    return(
        <div className="NotesItem">
            <h2>{props.date}</h2>
            <h3>{props.title}</h3>
        </div>
    );
}

export default ListItem;