import React, { useEffect, useContext, Fragment } from 'react'
import { Link } from '@reach/router'
import { ThemeProvider } from '@xstyled/styled-components'

import { Body, Header, Card, Button } from './components/index'

import theme from './theme'
import { Store } from './store'

export default function App(props) {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    if (state.selectedTheme === "default") {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#dddddd"
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#262626"
    }
  }, [state.selectedTheme])  

  const updateTheme = () => {
    return dispatch({
      type: 'UPDATE_THEME',
      payload: state.selectedTheme === 'default' ? 'alt' : 'default'
    })
  }

  const themeName = () => {
    if (state.selectedTheme === "default") {
      return "Dark"
    } else if (state.selectedTheme === "alt") {
      return "Default"
    }
  }

  return (
    <ThemeProvider theme={theme(state.selectedTheme)}>
      <Body>
        <p className="active-theme">Selected theme: {state.selectedTheme}</p>
        <div className="container">
          <Header>
            <h1><Link to="/">Using a Fake API with React Hooks & Theming</Link></h1>

            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Button
                  onClick={updateTheme}>
                  Change Theme to {themeName()}
                </Button>
              </li>
              <li className="nav-item">
                {state.favourites.length > 0 &&
                  <Link
                    to='/favs'
                    className="nav-link">
                    Favourites
                  </Link>
                }
              </li>
            </ul>

            <Card className="card">
              <div className="card-body">
                <p>This example uses a fake API to get data using <a href="https://github.com/typicode/json-server" rel="noopener noreferrer" target="_blank">JSON server</a>.</p>

                <p>Instead of redux it uses the newer React Hooks functionality & xstyled for theming.</p>
              </div>
            </Card>
          </Header>

          {props.children}
        </div>
      </Body>
    </ThemeProvider>
  )
}
