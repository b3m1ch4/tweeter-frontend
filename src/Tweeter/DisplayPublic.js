import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import apiUrl from '../apiConfig'
import axios from 'axios'
import { handleErrors, signUp, signIn, handlePost } from '../auth/api'

class DisplayPublic extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      say: 'tweet tweet',
      origin: apiUrl,
      sightings: []
    }

  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/sightings`)
    this.setState({sightings: response.data.sightings})
  }

  render () {

    const displayTable = this.state.sightings.map(sighting => {
      return (
        <tbody key={sighting._id}>
          <tr>
            <td>entry: {sighting.entry}</td>
            <td>description: {sighting.description}</td>
          </tr>
        </tbody>
      )
    })

    return (
      <React.Fragment>
        <table>{displayTable}</table>
      </React.Fragment>
    )
  }
}

export default withRouter(DisplayPublic)
