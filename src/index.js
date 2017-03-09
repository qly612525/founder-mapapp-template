import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';

import { observer } from 'mobx-react';

import CountStore from './stores/countstore';

@observer
class App extends React.Component {

    constructor() {
        super();
        this.onIncreament = this.onIncreament.bind(this);
        this.onDecreament = this.onDecreament.bind(this);
    }

    render() {
        const { store } = this.props;
        return (
            <div>
                <p>Counter: {store.counter}</p>
                <p>Counter: {store.counterT}</p>
                <button onClick={this.onIncreament}>+</button>
                <button onClick={this.onDecreament}>-</button>
            </div>
        );
    }

    onIncreament() {
        this.props.store.increament();
    }

    onDecreament() {
        this.props.store.decreament();
    }
}

ReactDom.render(
    <App store = { new CountStore() } />,
    document.getElementById('app'));
