import React from 'react'

class TriviaCard extends React.Component {
    constructor(props){
        super(props);
        this.heandleClick = this.heandleClick.bind(this);

        this.state = {
            hint: "What is the name of this mythical beast from a mythical land?",
            button: "Click for a hint!",
            active: false
        };
    }

    toggleClass(){
        const currentState = this.state.active;
        this.setState({active: !currentState})
    }

    render(){
        return (
            <div className="container justify-content: center">
                <div className="card text" style={{ width: "25%", height: "25%"}}>
                    <img src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jFq90EfE7SAYswkLZOxC1AHaF7%26pid%3DApi&f=1" className="card-img-top" alt="unicorn" ></img>
                    <div className="card-body">
                        <h5 className="card-title">Mythical Beasts</h5>
                        <p className="card-text">{this.state.hint}</p>
                        <button onClick={() => this.setState((prevState) => ({
                            hint: prevState.hint = "This beast looks like a horse with a horn on it's head. It is considered very rare", button: "back to prompt"
                        }))} className="btn btn-primary">{this.state.button}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TriviaCard;