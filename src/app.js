import React, { useEffect, useContext } from 'react'
import { Link } from '@reach/router'
import { ThemeProvider } from '@xstyled/styled-components'

import theme from './theme'
import { Store } from './store'

import { themeName } from './utils'

import { Body, Navbar, Header, Card, Hyperlink, Button } from './templates/index'

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

  return (
    <ThemeProvider theme={theme(state.selectedTheme)}>
      <Body>
        <div className="container">
          <Header>
            <h1><Link to="/">Using a Local API with React Hooks & Theming</Link></h1>

            <Navbar>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Button
                    onClick={updateTheme}>
                    Change Theme to {themeName(state.selectedTheme)}
                  </Button>
                </li>
                <li className="nav-item">
                  {state.favourites.length > 0 &&
                    <Hyperlink>
                      <Link
                        to="/favs"
                        className="nav-link">
                        <i className="fas fa-heart" /> Your Favourites ({state.favourites.length})
                      </Link>
                    </Hyperlink>
                  }
                </li>
              </ul>
            </Navbar>

            <Card className="card">
              <div className="card-body">
                <p>This example uses a local API to get data using <a href="https://github.com/typicode/json-server" rel="noopener noreferrer" target="_blank">JSON server</a>.</p>

                <p>Instead of redux it uses the newer <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener noreferrer" target="_blank">React Hooks</a> functionality & <a href="https://www.smooth-code.com/open-source/xstyled/" rel="noopener noreferrer" target="_blank">xstyled</a> for theming.</p>

                <p>Run the following commands to run the project locally.</p>

                <pre>
                  <p>git clone https://github.com/bronsondunbar/using-a-local-api-with-react-hooks-and-theming</p>

                  <p>npm install</p>

                  <p>npm start</p>
                </pre>
              </div>
            </Card>
          </Header>

          {props.children}
        </div>
      </Body>
    </ThemeProvider>
  )
}
