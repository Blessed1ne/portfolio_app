import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import BaseLayout from './BaseLayout'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import References from './References'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <BaseLayout>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/References" component={References}/>
            </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
