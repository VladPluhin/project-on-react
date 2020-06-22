import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from "./state/state";
import  './style.scss';
import  {BrowserRouter} from 'react-router-dom';


const rerenderPage = (state, logo) => {
    ReactDOM.render(
        <BrowserRouter>
          <App data={state} logo={ logo}/>
        </BrowserRouter>,document.getElementById('root')

)};

rerenderPage(state.getData());
state.getStart(rerenderPage);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
