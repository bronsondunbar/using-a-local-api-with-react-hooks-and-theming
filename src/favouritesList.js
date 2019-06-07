import React, { lazy } from 'react'
import { Store } from './store'

const PostsList = lazy(() => import('./postsList'))

export default function FavouritesList() {
  const { state, dispatch } = React.useContext(Store)

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

  const props = {
    posts: state.favourites,
    toggleFavourite: toggleFavourite,
    favourites: state.favourites
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <PostsList {...props} />
      </div>
    </React.Suspense>
  )
}