import React from 'react'
import './App.css'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import Launches from './components/Launches'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>Space X</h1>
          <Route path="/" exact component={Launches} />
          <Route path="/launch/:flight_number" exact component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
