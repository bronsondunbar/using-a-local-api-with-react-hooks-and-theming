import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import App from './app'
import DefaultPage from './components/defaultPage'
import PostDetailsPage from './components/postDetails'
import FavouritesList from './components/favouritesList'

import * as serviceWorker from './serviceWorker'
import { StoreProvider } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

ReactDOM.render(
	<StoreProvider>
		<Router>
			<App path='/'>
				<DefaultPage path='/' />
				<PostDetailsPage path='/:id' />
				<FavouritesList path='/favs' />
			</App>
		</Router>
	</StoreProvider>,
	document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
