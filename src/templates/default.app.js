import React, { Component, PropTypes } from 'react';
import { Provider } from 'mobx-react';

/*====================================
=           views import             =
====================================*/
import CounterView from '../views/counterview';

/*=====  End of views import  ======*/

/*=========================================
=            state managements            =
=========================================*/
import CounterStore from '../stores/counterstore';


/*=====  End of state managements  ======*/



export default class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div>
                <Provider counter={new CounterStore()}>
                    <CounterView />
                </Provider>
            </div>
        );
    }
}
