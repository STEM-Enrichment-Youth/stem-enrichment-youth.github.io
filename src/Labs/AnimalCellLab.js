import React from "react"; 
import "./labs.css";

export default function AnimalCellLab() {
    return (
    <div>
        <h1>Animal Cell Lab</h1>
        <p id="helptext">Use a desktop for an optimal experience</p>
        <div class="container center">
            <iframe src="../Labs/animalcell/index.html" class="responsive-iframe" frameBorder="0"></iframe>
        </div>
    </div>
    )
}
