import React, { Component } from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

import theme from './theme'

import { Header, Button, Card } from './components/index'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedTheme: "default"
    }

    this.changeTheme = this.changeTheme.bind(this)
  }

  async componentDidMount () {
    fetch("http://localhost:3004/posts?_embed=comments")
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState((state, props) => {
          return { data }
        })
      })
  }

  componentDidUpdate() {
    const { selectedTheme } = this.state

    if (selectedTheme === "default") {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#dddddd"
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#262626"
    }
  }

  changeTheme () {
    const { selectedTheme } = this.state

    this.setState((state, props) => {
      return { selectedTheme: selectedTheme === "default" ? "alt" : "default"  }
    })
  }

  render () {
    const { selectedTheme, data } = this.state

    const buttonText = (selectedTheme) => {
      if (selectedTheme === "default") {
        return "Switch to Dark"
      } else {
        return "Switch to Light"
      }
    }

    return (
      <ThemeProvider theme={theme(selectedTheme)}>
        <div className="container">
          <Header>
            {/*<h1>React With Dummy REST API</h1>*/}

            <Button
              onClick={this.changeTheme}>
              {buttonText(selectedTheme)}
            </Button>

            <Card>
              <div className="card-body">
                <p>This a React app with a dummy API for data that uses <a href="https://github.com/typicode/json-server" rel="noopener noreferrer" target="_blank">JSON server</a>.</p>

                <p>Call the API endpoint using fetch.</p>

                <pre>
                  fetch("http://localhost:3004/posts")
                </pre>

                <p>Example response</p>

                <pre>
                  {JSON.stringify(data)}
                </pre>
              </div>
            </Card>
          </Header>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
