import React, { Component } from 'react'
import axios from 'axios';
export default class componentName extends Component {
  constructor(params){
    super(params)
    this.state={
      list:[]
    }
  }
  componentDidMount(){
      axios.get('http://www.baidu.com/test/')
      .then((result)=>{
          console.log(result.data);
          this.setState({
            list:result.data.list
          })
      })
  }
  render() {
    return (
      <div>
        home页
        <ul>
          {
            this.state.list.map((obj,index)=>{
              return (<li>
                  <p>id:{obj.id}</p>
                  <p>name:{obj.name}</p>
                  <p>date:{obj.date}</p>
                  <img src={obj.image} alt=""/>
              </li>)
            })
          }
        </ul>
      </div>
    )
  }
}
