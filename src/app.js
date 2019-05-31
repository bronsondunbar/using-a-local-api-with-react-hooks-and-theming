import React, { Component } from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

import theme from './theme'

import { Header } from './components/index'

class App extends Component {
  async componentDidMount () {
    fetch("http://localhost:3004/posts")
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
          </Header>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
