import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';

import App from './templates/default.app';

ReactDom.render(
    <App />,
    document.getElementById('app'));
