import React, { Component } from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

import theme from './theme'

import { Header, Card } from './components/index'

class App extends Component {
  async componentDidMount () {
    fetch("http://localhost:3004/posts?_embed=comments")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
      })
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <div className="container">
          <Header>
            <h1>React With Dummy REST API</h1>

            <Card>
              <div className="card-body">
                <p>This a React app with a dummy API for data that uses <a href="https://github.com/typicode/json-server" rel="noopener noreferrer" target="_blank">JSON server</a>.</p>
              </div>
            </Card>
          </Header>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
