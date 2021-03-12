import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ListProducts from './Pages/Products/ListProducts'
import RegisterProducts from './Pages/Products/RegisterProducts'
import ListUsers from './Pages/Users/ListUsers'
import RegisterUsers from './Pages/Users/RegisterUsers'

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login}/>
      <Route path="products" exact component={ListProducts}/>
      <Route path="/products/register" exact component={RegisterProducts}/>
      <Route path="/users" exact component={ListUsers}/>
      <Route path="/users/register" exact component={RegisterUsers}/>
    </Switch>
  )
}

export default Routes