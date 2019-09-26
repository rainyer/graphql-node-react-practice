import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

export default class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params
    flight_number = parseInt(flight_number)
    return (
      <div>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h1 children="LOADING" />
            if (error) return <h1 children="ERROR" />
            if (data) console.log(data)
            return <Details launch={data.launch} />
          }}
        </Query>
      </div>
    )
  }
}

const Details = ({ launch }) => {
  return (
    <div style={{ color: 'white' }}>
      <p>{launch.flight_number}</p>
      <p>{launch.mission_name}</p>
      <p>{launch.rocket.rocket_name}</p>
    </div>
  )
}
