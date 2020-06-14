import React from "react"; 

export default function TeamCard(props) {
    return (
        <div class="con-item">
                    <div class="con-img">
                        <img src={props.imgURL} alt="instructor image" style={{maxWidth: "150px"}}/>
                    </div>
                    <h2 class="h">{props.name}</h2>
                    <h3>{props.position}</h3>
                    <p class="p-team" style={{width: "80%"}}>
                    {props.des}
                    </p>
                </div>
    )

}

