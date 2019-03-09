import {combineReducers} from "redux";

// state若不给初值，此处会报错
let count=(state=0,action)=>{
    console.log(state,action);
    switch (action.type) {
        case 'ADD':
            state=state+action.num;
            break;
        case 'MINUS':
            state=state-action.num;
            break;
        default:
            break;
    }
    return state;
}
    let weight=(state=0,action)=>{
        switch(action.type){
        case 'WEIGHT':
            state=state+action.num;
            break;
        default:
            break;
        }
        return state;
    }
export default combineReducers({
    count,
    weight
})