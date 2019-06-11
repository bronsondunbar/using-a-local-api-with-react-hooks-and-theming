import React, { useContext, lazy, Suspense } from 'react'
import { Store } from '../store'

import { Card } from '../templates/index'

const PostsList = lazy(() => import('../components/postsList'))

export default function FavouritesList() {
  const { state, dispatch } = useContext(Store)

  const toggleFavourite = post => {
    const postInFavourites = state.favourites.includes(post)
    let dispatchObj = {
      type: "ADD_FAV",
      payload: post
    }
    if (postInFavourites) {
      const favouritesWithoutPost = state.favourites.filter(fav => fav.id !== post.id)
      dispatchObj = {
        type: "REMOVE_FAV",
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
    <Suspense fallback={<div>Loading...</div>}>
      {state.favourites.length === 0 &&
        <Card>
          <div className="card-body">
            <h2>No favourites</h2>
          </div>
        </Card>
      }
      <PostsList {...props} />
    </Suspense>
  )
}