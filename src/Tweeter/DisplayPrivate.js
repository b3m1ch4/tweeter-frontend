import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import apiUrl from '../apiConfig'
import axios from 'axios'
import messages from '../auth/messages'
import Header from '../header/Header.js'
import {deleteWithFetch} from '../fetch/verbs.js'
import { handleErrors, signUp, signIn, handlePost } from '../auth/api'

class DisplayPrivate extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      origin: apiUrl,
      sightings: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/sightings`)
    this.setState({sightings: response.data.sightings})
  }

  deleteSighting = event => {
    event.preventDefault()
    const { entry, description, image } = this.state
    const { flash, setUser, user } = this.props

    deleteWithFetch(event.target.id, user)
      .then(handleErrors)
      .then(() => flash(messages.deleteSuccess, 'flash-success'))
      .catch(() => flash(messages.failure, 'flash-error'))
  }

  render () {
    const displayTable = this.state.sightings.map(sighting => {
      return (
        <tbody key={sighting._id}>
          <tr>
            <td>entry: {sighting.entry}</td>
            <td>description: {sighting.description}</td>
            <td><button onClick={this.deleteSighting} id={sighting._id} className="delete-button">delete</button></td>
            <td><Link to={`/update/${sighting._id}`}><button onClick={this.updateSighting} id={sighting._id} className="update-button">update</button></Link></td>
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

export default withRouter(DisplayPrivate)
