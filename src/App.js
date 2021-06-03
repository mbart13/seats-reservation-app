import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import { GlobalStyles } from 'styles/GlobalStyles'
import Room from 'components/Room/Room'

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
      </Switch>
    </Router>
  )
}

export default App
