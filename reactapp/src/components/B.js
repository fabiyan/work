import React, { Component } from 'react'

export default class componentName extends Component {
   constructor(params){
        super(params);
        this.go=this.go.bind(this);
        
   }
   go(){
        this.props.history.push('/');
   }
  render() {
      console.log(this.props);
      let {match}=this.props;
      console.log(match);
    return (
      <div>

        B页{this.props.match.params.id}
        <button onClick={this.go}>跳转1</button>
        <button onClick={()=>{
            // this.props.history.push('/b/15');
            // this.props.history.go(-1);
            // this.props.history.goBack();
            this.props.history.goForward();
        }}>跳转2</button>
      </div>
    )
  }
}
