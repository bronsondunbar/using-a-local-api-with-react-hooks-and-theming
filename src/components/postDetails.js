import React, { useContext, Suspense, Fragment } from 'react'
import classNames from 'classnames'

import { Store } from '../store'

import { Header, Card } from '../templates/index'

export default function PostDetails() {
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

  const favStyle = (post) => classNames("fas fa-heart", {
    "active": state.favourites.find(fav => fav.id === post.id)
  })

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {state.post && state.post.map((post, index) => {
        return (
          <Card>
            <div className="card-body">
              <Fragment key={post.id}>
                <Header>
                  <i className={favStyle(post)} onClick={() => toggleFavourite(post)}></i>
                  <h1>{post.title}</h1>
                  <h3>{post.author}</h3>
                </Header>

                
              </Fragment>
            </div>
          </Card>
        )
      })}
    </Suspense>
  )
}