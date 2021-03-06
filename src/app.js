import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import Store from './store/store'

import Layout from './components/Layout'
import Measures from './components/panes/Measures'
import Sales from './components/panes/Sales'
import About from './components/panes/About'


//Warning solved: http://tiny.cc/router-defaulthistory
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
let main = document.getElementById('main');

ReactDOM.render(
    <Provider store={Store}>
      <Router history={appHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Sales}></IndexRoute>
          <Route path="measures" component={Measures}></Route>
          <Route path="about" component={About}></Route>
        </Route>
      </Router>
    </Provider>

  , main);
