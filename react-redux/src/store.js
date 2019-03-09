import {createStore} from 'redux';
import reducer from './reducer'
let initialState={
    count:0,
    weight:150
};
let store=createStore(reducer,initialState);
export default store;