import React from "react"; 

export default function TeamCard(props) {
    return (
        <div class="con-item team-card">
                    <div class="con-img">
                        <div class="image-cropper">
                            <img src={props.imgURL} style={{maxWidth: "150px"}}/>
                        </div>
                    </div>
                    <h2 class="h">{props.name}</h2>
                    <h3 class="teacher-position" style={{width: "80%"}}>{props.position}</h3>
                    <p class="p-team" style={{width: "80%"}}>
                    {props.des}
                    </p>
                    
                    
                </div>
    )

}

