import React, { useEffect, lazy, Suspense } from 'react'
import { Link } from '@reach/router'
import { ThemeProvider } from '@xstyled/styled-components'

import { Header, Card, Button } from './components/index'

import theme from './theme'
import { Store } from './store'

const PostsList = lazy(() => import('./postsList'))

export default function App() {
  const { state, dispatch } = React.useContext(Store)

  useEffect(() => {
    state.posts.length === 0 && getPosts()
  })

  useEffect(() => {
    if (state.selectedTheme === "default") {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#dddddd"
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#262626"
    }
  }, [state.selectedTheme])
    
  const getPosts = async () => {
    const data = await fetch('http://localhost:3004/posts?_embed=comments');
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON
    })
  }

  const toggleFavourite = post => {
    const postInFavourites = state.favourites.includes(post);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: post
    }
    if (postInFavourites) {
      const favouritesWithoutPost = state.favourites.filter(fav => fav.id !== post.id)
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favouritesWithoutPost
      }
    }
    return dispatch(dispatchObj)
  }

  const updateTheme = () => {
    return dispatch({
      type: 'UPDATE_THEME',
      payload: state.selectedTheme === 'default' ? 'alt' : 'default'
    })
  }

  const props = {
    posts: state.posts,
    toggleFavourite: toggleFavourite,
    favourites: state.favourites
  }

  return (
    <ThemeProvider theme={theme(state.selectedTheme)}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <Header>
            <h1><Link to='/'>React App With Fake REST API</Link></h1>

            <Button
              onClick={updateTheme}>
              Change Theme {state.selectedTheme}
            </Button>

            <Link to='/favs'>
              Favourites
            </Link>

            <Card>
              <div className="card-body">
                <p>This example uses a fake API to get data using <a href="https://github.com/typicode/json-server" rel="noopener noreferrer" target="_blank">JSON server</a>.</p>

                <p>It also uses React Hooks & xstyled for theming.</p>
              </div>
            </Card>
          </Header>

          <PostsList {...props} />
        </div>
      </Suspense>
    </ThemeProvider>
  )
}
