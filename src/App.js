import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
          <NavBar tittle="NewsApp"/>
            <Routes>
              <Route  exact path='/' element={<News key="general" pageSize={5} category='general'/>}></Route>
              <Route  exact path='/business' element={<News key="business" pageSize={5} category='business'/>}></Route>
              <Route  exact path='/entertainment' element={<News key="entertainment"pageSize={5} category='entertainment'/>}></Route>
              <Route  exact path='/health' element={<News key="health" pageSize={5} category='health'/>}></Route>
              <Route  exact path='/science' element={<News key="science" pageSize={5} category='science'/>}></Route>
              <Route  exact path='/sports' element={<News key="sports" pageSize={5} category='sports'/>}></Route>
              <Route  exact path='/technology' element={<News key="technology" pageSize={5} category='technology'/>}></Route>
            
            </Routes>
      </div>
    )
  }
}

export default App
