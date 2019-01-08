import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
ReactDOM.render(
    <div>
        <Provider store={store}>
        <App />
        </Provider>
        {/* <Method /> */}
        {/* <Clock /> 
<MyEvent />*/}
    </div>
    , document.getElementById('root'));
registerServiceWorker();
