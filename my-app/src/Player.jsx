import React from "react";
import "./Player.css"


const Player = ({ name, rank, logo}) =>{
    const imgg = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        width: "150px",
        height: "150px"
      };

    return(
        <div className="Player">
            <h3>
                Team Name: {name}
            </h3>

            <h4>
                Rank: Number {rank}
            </h4>
            <img className="teamLogo" src={logo} alt="Images not available" style={imgg} />
        </div>
    );
}

export default Player;