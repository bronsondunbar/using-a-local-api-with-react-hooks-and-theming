import React, { Component } from 'react';

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
      <div className="container">
        <h1>React With Dummy REST API</h1>
      </div>
    )
  }
}

export default App;
