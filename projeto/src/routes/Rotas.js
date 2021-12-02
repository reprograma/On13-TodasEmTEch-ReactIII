import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import ListPage from '../pages/ListPage'

function Rotas() {
  return(
    <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route path='/lista' component={ListPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Rotas