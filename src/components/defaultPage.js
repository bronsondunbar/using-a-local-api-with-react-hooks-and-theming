import React, { useEffect, useContext, lazy, Suspense } from 'react'
import { Store } from '../store'

const PostsList = lazy(() => import('../components/postsList'))

export default function FavouritesList() {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.posts.length === 0 && getPosts()
  })

  const getPosts = async () => {
    const data = await fetch("http://localhost:3004/posts?_embed=comments")
    const dataJSON = await data.json()
    return dispatch({
      type: "GET_POSTS",
      payload: dataJSON
    })
  }

  const toggleFavourite = post => {
    const postInFavourites = state.favourites.includes(post);
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
    posts: state.posts,
    toggleFavourite: toggleFavourite,
    favourites: state.favourites
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostsList {...props} />
    </Suspense>
  )
}