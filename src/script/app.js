require('../style/app.scss')
import react from 'react'
import ReactDOM from 'react-dom'
import {Router,IndexRedirect,Route,hashHistory,IndexRoute} from 'react-router'

import Index from './component/index'
import Home from './component/home'
import Kind from './component/kind'
import Cart from './component/cart'
import User from './component/user'


ReactDOM.render(
	<Router history={hashHistory}>
	    <Route path="/" component={Index}>
	      <IndexRedirect component={Home}></IndexRedirect>
	      <Route path="home" component={Home}></Route>
	      <Route path="kind" component={Kind}></Route>
	      <Route path="cart" component={Cart}></Route>
	      <Route path="user" component={User}></Route>
	    </Route>
	</Router>,
	document.getElementById("root")
)

