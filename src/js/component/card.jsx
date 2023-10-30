import React from "react";


import cardImage from "../../img/card-image.png";


const myCardStyles = {
width: "18rem",
};


const Card = () => {
return(
<div className="col py-5">
<div className="card" style={myCardStyles}>
<img src={cardImage} className="card-img-top" alt="Card Image"/>
<div className="card-body text-center">
<h5 className="card-title">Card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
)
}


export default Card
