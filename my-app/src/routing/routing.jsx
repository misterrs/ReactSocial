import './routing.css'
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { App } from '../Screens/Home'
import { Chating } from '../Screens/Rooms';
import { Profile } from '../Screens/Profile';
import { ROUTES } from './constants';



function Routing() {
 
  return (
    <div className="routing"> 
      <BrowserRouter className="content">

      <div className="menu">
        <div className="menu_list">
          <div className="list_item">
            <Link to={ROUTES.MAIN}>Home</Link>
          </div>
          <div className="list_item">
            <Link to={ROUTES.PROFILE}>Profile</Link>
          </div>
          <div className="list_item">
            <Link to={ROUTES.CHATS}>Chats</Link>
          </div>     
        </div>
      </div>


      <div className="page_content">
        <Switch>
          <Route exact path ={ROUTES.MAIN}>
              <App/>
          </Route>
          <Route exact path={ROUTES.PROFILE}>
              <Profile />
          </Route>
          <Route exact path ={ROUTES.CHATS}>
              <Chating />
          </Route>
          <Route exact path={ROUTES.NOT_FOUND}>
              not-found
          </Route>
        </Switch>
      </div>

      </BrowserRouter>

    </div>
  );
}
export default Routing;