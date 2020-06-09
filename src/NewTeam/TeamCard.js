import React from "react"; 

export default function TeamCard(props) {
    return (
        <div class="con-item">
                    <div class="con-img">
                        <img src={props.imgURL} />
                    </div>
                    <h2 class="h">{props.name}</h2>
                    <p class="p-team">
                    {props.des}
                    </p>
                </div>
    )

}

