import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link,Switch,Redirect,withRouter} from 'react-router-dom'
import Home from './components/Home.js'
import A from './components/A.js'
import B from './components/B'
import D from './components/D'
let Btn=withRouter((props)=>{
  return(
   <button onClick={()=>{
    props.history.push('/a/20');
   }}>跳转
   </button>
  )
})
class App extends Component {
  
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Router>
          <div>
            <Btn></Btn>
            <Link to='/'>跳转到Home page  |</Link>
            {/* 此处为模糊匹配 */}
            <Link to='/a/10'>跳转到A page  |</Link>
            <Link to='/b/5'>跳转到B page  |</Link>
            <Link to='/c'>跳转到home  |</Link>
            <Link to='/d/xx'>D page</Link>
            <Link to='/e'>E页</Link>

            
            <Route exact path='/' component={Home}></Route>
            <Route path='/a/:num' component={A}></Route>
            <Route path='/b/:id' component={B}></Route>
            <Route path='/c' render={()=>{
              return <Redirect to='/'></Redirect>
            }}></Route>
              <Route path='/e' render={()=>{
              return (
                <div>
                  <h1>aaaa</h1>
                  <p>bbbb</p>
                </div>
              )
            }}></Route>
            <Route path='/d/:x' children={D}></Route>


           
            {/* route的顺序有关，link只会匹配switch的第一个模糊项 */}
             {/* <Switch>
            <Route path='/a/:num' component={A}></Route>
            <Route path='/b/:id' component={B}></Route>
            <Route path='/' component={Home}></Route>
            </Switch> */}
          </div>
        </Router>
      </div>     
    );
  }
}

export default App;
