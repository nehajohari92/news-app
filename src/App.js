import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  pageSize=5;
  render() {
    return (
      <div>
          <NavBar tittle="NewsApp"/>
            <Routes>
              <Route  exact path='/' element={<News key="general" pageSize={this.pageSize} category='general'/>}></Route>
              <Route  exact path='/business' element={<News key="business" pageSize={this.pageSize} category='business'/>}></Route>
              <Route  exact path='/entertainment' element={<News key="entertainment"pageSize={this.pageSize} category='entertainment'/>}></Route>
              <Route  exact path='/health' element={<News key="health" pageSize={this.pageSize} category='health'/>}></Route>
              <Route  exact path='/science' element={<News key="science" pageSize={this.pageSize} category='science'/>}></Route>
              <Route  exact path='/sports' element={<News key="sports" pageSize={this.pageSize} category='sports'/>}></Route>
              <Route  exact path='/technology' element={<News key="technology" pageSize={this.pageSize} category='technology'/>}></Route>
            
            </Routes>
      </div>
    )
  }
}

export default App
