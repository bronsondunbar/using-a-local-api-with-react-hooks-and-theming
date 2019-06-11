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
          <Fragment key={post.id}>
            <Card>
              <div className="card-body">
                <Header>
                  <i className={favStyle(post)} onClick={() => toggleFavourite(post)}></i>
                  <h1>{post.title}</h1>
                  <h3>{post.author}</h3>
                </Header>

                {post.contents.length > 0 && post.contents.map((contents, index) => {
                  let contentStyle = null
                  if (contents.style !== "none") {
                    contentStyle = contents.style
                  }
                  return (
                    <Fragment key={index}>
                      {contents.type === "text" &&
                        <p style={{ contentStyle }}>{contents.content}</p>
                      }
                      {contents.type === "image" &&
                        <img style={{ contentStyle }} src={contents.content} alt={post.title} />
                      }
                    </Fragment>
                  )
                })}

                {post.comments.length > 0 &&
                  <Fragment>
                    <h2>Comments</h2>

                    {post.comments.map((comment, index) => {
                      return (
                        <div key={index} className="post-comments">
                          <p>{comment.body}</p>
                        </div>
                      )
                    })}
                  </Fragment>
                }
              </div>
            </Card>
          </Fragment>
        )
      })}
    </Suspense>
  )
}