import React from 'react';

class Voting_app extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            counter1: 0,
            counter2: 0,
            counter3: 0,
            counter4: 0,
        };
    }

    render(){
        return (
            <div className="container">
                <div className="card text-center" style={{width: `18rem`}}>
                    <div className="card-header">
                        Your favorite JS Library
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.state.counter1} - React <button onClick={() => this.setState((prevState) => ({
                            counter1: prevState.counter1 + 1
                        }))}>Click Me!</button></li>

                        <li className="list-group-item">{this.state.counter2} - Vue <button onClick={() => this.setState((prevState) => ({
                            counter2: prevState.counter2 + 1
                        }))}>Click Me!</button></li>

                        <li className="list-group-item">{this.state.counter3} - Angular <button onClick={() => this.setState((prevState) => ({
                            counter3: prevState.counter3 + 1
                        }))}>Click Me!</button></li>

                        <li className="list-group-item">{this.state.counter4} -Ember <button onClick={() => this.setState((prevState) => ({
                            counter4: prevState.counter4 + 1
                        }))}>Click Me!</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}


// const Voting_app = (props) => {
//     let counter1 = 0;
//     let counter2 = 0;
//     let counter3 = 0;
//     let counter4 = 0;
//     function click(){
//         alert("You clicked me!")
//     }
//     return (
//         <div className="container">
//             <div className="card text-center" style={{width: `18rem`}}>
//                 <div className="card-header">
//                     Your favorite JS Library
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">{counter1} - React <button onClick={click}>Click Me!</button></li>
//                     <li className="list-group-item">{counter2} - Vue <button onClick={click}>Click Me!</button></li>
//                     <li className="list-group-item">{counter3} - Angular <button onClick={click}>Click Me!</button></li>
//                     <li className="list-group-item">{counter4} -Ember <button onClick={click}>Click Me!</button></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

export default Voting_app;