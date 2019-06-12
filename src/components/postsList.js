import React, { useContext } from 'react'
import { navigate } from '@reach/router'
import classNames from 'classnames'

import { Store } from '../store'

import { truncateString } from '../utils'

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
		            <p>{truncateString(post.description, 140)}</p>
		            <Button
		            	onClick={() => getPost(post.id)}>
		            	Continue reading...
		            </Button>
		            {post.comments.length > 0 &&
		            	<div className="post-comments">
		            		<p>({post.comments.length}) Comment(s)</p>
		            	</div>
		            }
		          </div>
		        </Card>
		      </div>
		    )
		  })}
 		</div>
 	)
}