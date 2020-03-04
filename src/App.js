import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import {routes} from './router/index'
import Foot from './components/foot/Foot';


function App() {
  return (
    <div className="App">
        <Switch>
          {
            routes.map((item)=>{
              return <Route path={item.path} key={item.path} component={item.component}/>
            })
          }
          <Redirect from='/' to='/home'/>
        </Switch>
      <Foot />
    </div>
  );
}

export default App;
