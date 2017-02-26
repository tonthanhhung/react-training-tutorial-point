import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './components/home';
import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import WidgetList from './components/WidgetList';

ReactDOM.render(
	<Router history = {browserHistory}>
      <Route path = "/" component = {MainLayout}>
         <IndexRoute component = {Home} />
         <Route path="users">
	        <Route component={SearchLayout}>
	          <IndexRoute component={UserList} />
	        </Route>
	        <Route path=":userId" component={UserProfile} />
	     </Route>
         <Route path="widgets">
	        <Route component={SearchLayout}>
	          <IndexRoute component={WidgetList} />
	        </Route>
      	</Route>	
      </Route>
   </Router>
, document.getElementById('app')); 