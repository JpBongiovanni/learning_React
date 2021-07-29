const helloReact = React.createElement("div", null, 
    React.createElement("h1", {style: {color: "red"}, className:"header"}, "Hello Dojo"),
    React.createElement("h2", null, "Things I need to do:"),
    React.createElement("ul", null, [
        React.createElement('li', null, 'Chocolate'),
        React.createElement('li', null, 'Vanilla'),
        React.createElement('li', null, 'Banana')
    ])
    );
    

ReactDOM.render(helloReact, document.getElementById("root"));
