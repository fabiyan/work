import React, { Component } from 'react';
import store from './store'
// import action from './action'
import {add,minus,weight} from './action'
import reducer from './reducer'
import {connect} from 'react-redux'
class App extends Component {
  constructor(params){
    super(params);
    this.add=this.add.bind(this);
  }
  add(){
     console.log('sadas'); 
      // store.dispatch(action(2));
      store.dispatch(add(2))
  }
  render() {
    return (
      <div>
      {this.props.count}
      <button onClick={this.add}>+++</button>
      <button onClick={()=>{
          store.dispatch(minus(1));
      }}>---</button>
      <h1>tom的体重为：{this.props.weight}</h1>
      <button onClick={()=>{
          store.dispatch(weight(5))
      }}>吃吃吃</button>
      </div>
    );
  }
}
let statetoProps=(state)=>{
  return{
    count:state.count,
    weight:state.weight
  }
}
export default connect(statetoProps)(App);
