import React, { Component, PropTypes } from 'react';
import { Provider } from 'mobx-react';

/*====================================
=           views import             =
====================================*/


/*=====  End of views import  ======*/

/*=========================================
=            state managements            =
=========================================*/



/*=====  End of state managements  ======*/



export default class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div className='default-template'>
                    内容添加到这里
            </div>
        );
    }
}
