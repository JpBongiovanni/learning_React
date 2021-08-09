import React from 'react';

class HelloJS extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            greeting: "Hello",
            excitement: ""
        };
    }

    render(){
        return (
            <div className="jumbotron">
                <h1 onClick={() => this.setState({greeting: "Goodbye"})}>{this.state.greeting} {this.props.title}{this.state.excitement}</h1>
                <p>{this.props.title} is {this.props.description}</p>
                <button onClick={() => this.setState((prevState) => ({
                    excitement: prevState.excitement +"!"
                }))} className="btn btn-primary">Add Excitement</button>
            </div>
        );
    }
}

// const HelloJS = (props) => {
//     return (
//         <div className="jumbotron">
//             <h1>Hello {props.title}</h1>
//             <p>{props.title} is {props.description}</p>
//         </div>
//     );
// }

export default HelloJS;