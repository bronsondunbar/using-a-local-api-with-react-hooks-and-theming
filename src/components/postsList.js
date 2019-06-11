import React, { useContext } from 'react'
import { navigate } from '@reach/router'
import classNames from 'classnames'

import { Store } from '../store'

import { Button, Card } from '../templates/index'

export default function PostsList(props) {
	const { dispatch } = useContext(Store)
  const { posts, toggleFavourite, favourites } = props

  const getPost = async (id) => {
    const data = await fetch(`http://localhost:3004/posts/${id}?_embed=comments`)
    const dataJSON = await data.json()
    navigate(`/${id}`)
    return dispatch({
      type: "GET_POST",
      payload: dataJSON
    })
  }

  const favStyle = (post) => classNames("fas fa-heart", {
    "active": favourites.find(fav => fav.id === post.id)
  })

 	return (
 		<div className="row">
 			{posts.length > 0 && posts.map((post, index) => {
		    return (
		      <div
		        key={index}
		        className="col-md-4">
		        <Card className="card">
		          <img src={post.image} className="card-img-top" alt={post.title} />
		          <div className="card-body">
		            <i className={favStyle(post)} onClick={() => toggleFavourite(post)}></i>
		            <h4>{post.title}</h4>
		            <p>{post.description}</p>
		            <Button
		            	onClick={() => getPost(post.id)}>
		            	Read More
		            </Button>
		            {post.comments.length > 0 &&
		            	<p className="card-comments">({post.comments.length}) Comment(s)</p>
		            }
		          </div>
		        </Card>
		      </div>
		    )
		  })}
 		</div>
 	)
}