import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import { GlobalStyles } from 'styles/GlobalStyles'
import Room from 'components/Room'
import Summary from 'components/Summary/Summary'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/summary">
          <Summary />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
