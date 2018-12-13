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
    const { flash, user } = this.props
    const response = await axios.get(apiUrl + '/sightings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      }
    })
    const allSightings = response.data.sightings
    let mySightings = []

    const checkOwner = (sighting) => {
      if (sighting.owner == user._id)
        return sighting
    }

    const filterOwner = (allSightings, user) => {
      mySightings = allSightings.filter(checkOwner)
    }

    filterOwner(allSightings, user)

    this.setState({sightings: mySightings})
  }

  deleteSighting = event => {
    event.preventDefault()
    const { entry, description, image } = this.state
    const { flash, history, setUser, user } = this.props

    deleteWithFetch(event.target.id, user)
      .then(handleErrors)
      .then(this.setState({
        sightings: this.state.sightings.filter(sighting => sighting._id !== event.target.id)
      }))
      .then(() => flash(messages.deleteSuccess, 'flash-success'))
      .then(() => history.push('/privateindex'))
      .catch(() => flash(messages.failure, 'flash-error'))
  }

  render () {
    const displayTable = this.state.sightings.map(sighting => {
      return (
        <tbody key={sighting._id}>
          <tr>
            <td>entry: {sighting.entry}</td>
            <td>description: {sighting.description}</td>
            <td>image: <img src={sighting.image} /></td>
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
