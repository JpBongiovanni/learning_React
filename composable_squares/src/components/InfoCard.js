import React from 'react';

const InfoCard = (props) => {

    return (
        <div class="container justify-content: center">
            <div className="card" style={{ width: "25%", height: "25%"}}>
                <img src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jFq90EfE7SAYswkLZOxC1AHaF7%26pid%3DApi&f=1" class="card-img-top" alt="unicorn" ></img>
                <div className="card-body">
                    <h5 class="card-title">The Unicorn</h5>
                    <p class="card-text">A mythical beast from a mythical land</p>
                </div>
            </div>
        </div>
    )
}


export default InfoCard;