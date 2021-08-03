import React from 'react';



const ComSquares = (props) => {
    // const bgColor = props['bgColor'];
    // const txtColor = props['txtColor'];
    return (
        <div className="container container-lg">
            <div className="row align-items-start">
                <div className="col" style={{backgroundColor: RandomBG, color: RandomBG}}>
                    <h1>{RandomBG+ ' on ' + RandomBG}</h1>
                </div>
                <div className="col" style={{backgroundColor: RandomBG, color: RandomBG}}>
                    <h1>{RandomBG + ' on ' + RandomBG}</h1>
                </div>
                <div className="col" style={{backgroundColor: RandomBG, color: RandomBG}}>
                    <h1>{RandomBG + ' on ' + RandomBG}</h1>
                </div>
            </div>
        </div>
    );
}

const RandomBG = () => {
    "#" + ((1<<24)*Math.random() | 0).toString(16);
}

export default ComSquares;
// export {RandomBG};