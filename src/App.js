import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'

import TodosPage from './pages/TodoPages'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={TodosPage} />
    
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App