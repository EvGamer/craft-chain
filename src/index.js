import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './stores'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { itemsAdd } from './stores/actionCreators';

const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>
, document.getElementById('root'));
registerServiceWorker();
