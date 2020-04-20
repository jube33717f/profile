import React from 'react';

import Home from './page/home/home'
import Navbar from './component/navbar'
import Resume from './page/resume/resume'
import Contact from './page/contact/contact'
import Services from './page/services/services'
import Blog from './page/blog/blog'
import Editor from './page/blog/editor/editor'
import Article from './page/blog/article/article'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path="/blog" component={Blog}>
            
            {/* <Redirect from="edit" to="/edit" /> */}
            
            {/* <Redirect from="article/:id" to="article/:id" /> */}
        </Route>
        <Route path='/services' component={Services} />       
      </Switch>
        <Route path='/edit' component={Editor} />
        <Route path="/article/:id" component={Article}/>
    </Router>
    <div className="footer">Jubi's Website | <span>Nice to meet u❤</span></div>
    </>
  );
}

export default App;
