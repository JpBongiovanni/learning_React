import ReactDOM from 'react-dom';
import React from 'react';

import Voting_app from './components/voting_app';
import HelloJS from './components/states';




ReactDOM.render(<Voting_app />, document.getElementById("root"));
ReactDOM.render(<HelloJS title='React' description='React is JavaScript for building user interfaces' />, document.getElementById("root2"));