import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let count = 0;
const firstReducer = (state, action) => {
    if (action.type === 'BUTTON_ONE') {
        console.log('Button One was clicked');
        console.log(state);//whatever we return from our reducer, we are adding to our redux state or whatever you return from the first time is what your state is going to be the next time
        count++;
    }
    return count;
};

const secondReducer = (state, action) => {
    if (action.type === 'BUTTON_TWO'){
        console.log(`Button Two was clicked`); 
        console.log(state);
    }
    
    return 100;
}

const elementListReducer = (state, action) => {
    if (action.type === 'ADD_ELEMENT') {
        console.log(`Add Element was clicked`);
    }
    return {};
}

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer,
        elementListReducer,
    }),
);











ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


