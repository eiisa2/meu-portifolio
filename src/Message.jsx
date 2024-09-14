import React from "react";

function Message(props){
    return(
        <p>Bem vindo, <b>{props.usuario}! :)</b></p>
    );
}

export default Message;