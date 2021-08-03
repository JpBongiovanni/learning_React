import ReactDOM from 'react-dom';
import React from 'react';

import ComSquares from './components/composable_squares';

// import RandomBG from './components/composable_squares';

// const RandomBG = () => {
//     const randomColor = 
//     Math.floor(Math.random()*16777215).toString(16);
//     return randomColor
// }
// console.log(RandomBG);

// const props = {
//     bgColor: randColor,
//     txtColor: "white",
// };



// const RandomBG2 = "#" + ((1<<24)*Math.random() | 0).toString(16);


// ReactDOM.render(<ComSquares bgColor={RandomBG} txtColor={RandomBG}/>, document.getElementById("root"));

ReactDOM.render(<ComSquares />, document.getElementById("root"));
