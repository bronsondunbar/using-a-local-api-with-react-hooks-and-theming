import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from '@xstyled/styled-components'

import { Header, Card, Button } from './components/index'

import theme from './theme'
import { Store } from './store';

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

  const updateTheme = () => {
    return dispatch({
      type: 'UPDATE_THEME',
      payload: state.selectedTheme === 'default' ? 'alt' : 'default'
    })
  }

  console.log(state.posts)

  return (
    <ThemeProvider theme={theme(state.selectedTheme)}>
      <div className="container">
        <Header>
          <h1>React With Fake REST API & Data</h1>

          <Button
            onClick={updateTheme}>
            Change {state.selectedTheme}
          </Button>

          <Card>
            <div className="card-body">
              <p>A Create React App with a fake API for data that uses <a href="https://github.com/typicode/json-server" rel="noopener noreferrer" target="_blank">JSON server</a>.</p>
            </div>
          </Card>
        </Header>

        <div className="row">
          {state.posts.length > 0 && state.posts.map((post, index) => {
            return (
              <div
                key={index}
                className="col">
                <Card>
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    <p>({post.comments.length}) Comment(s)</p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </ThemeProvider>
  )
}
