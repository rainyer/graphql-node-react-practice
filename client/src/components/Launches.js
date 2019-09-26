import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'

const LAUNCHES = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`
export default class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES}>
          {({ loading, error, data }) => {
            if (loading) return <h1 children="LOADING" />
            if (error) return <h1 children="ERROR" />
            if (data)
              return data.launches.map((item, i) => (
                <LaunchItem key={i} launch={item} />
              ))
          }}
        </Query>
      </div>
    )
  }
}
