import React from 'react';
import './App.css';
import AllPost from './component/AllPost/AllPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/Not Fount/NotFound';
import PostDtl from './component/PostDtl/PostDtl';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>

          <Route exact path="/">
            <AllPost/>
          </Route>

          <Route path="/home">
            <AllPost/>
          </Route>
          
          <Route path='/posts/:postId'>
            <PostDtl/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
