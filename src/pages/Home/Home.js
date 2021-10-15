import React from "react";
import {useHistory} from "react-router-dom"

function Home() {

    const history = useHistory();


    return (
        <div>
         <h1>Home</h1>
         <button 
            onClick = {() => {
                history.push("Login") //history.goBack volta pra página anterior
             }}
                >Logout</button>
        </div>
    );
}

export default Home;