import React from 'react'
import classNames from 'classnames'

import { Card } from './components/index'

export default function PostsList(props) {
  const { posts, toggleFavourite, favourites } = props

  const favStyle = (post) => classNames('fas fa-heart', {
    'active': favourites.find(fav => fav.id === post.id)
  })

 	return (
 		<div className="row">
 			{posts.length > 0 && posts.map((post, index) => {
		    return (
		      <div
		        key={index}
		        className="col">
		        <Card>
		          <img src={post.image} className="card-img-top" alt={post.title} />
		          <div className="card-body">
		            <i className={favStyle(post)} onClick={() => toggleFavourite(post)}></i>
		            <h4>{post.title}</h4>
		            <p>{post.description}</p>
		            <p className="card-comments">({post.comments.length}) Comment(s)</p>
		          </div>
		        </Card>
		      </div>
		    )
		  })}
 		</div>
 	)
}