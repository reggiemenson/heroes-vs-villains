import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import GameDeck from './components/GameDeck'
import StartPanel from './components/StartPanel'




const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/game" component={GameDeck} />
      <Route exact path="/" component={StartPanel} />
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)


