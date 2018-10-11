import React, { Component } from 'react'
import apiUrl from '../apiConfig'
import { withRouter } from 'react-router-dom'
import { handleErrors, signUp, signIn, handlePost } from '../auth/api'
import messages from '../auth/messages'
import Header from '../header/Header.js'
import user from '../apiConfig.js'
import axios from 'axios'
import { updateWithFetch } from '../fetch/verbs.js'

class Update extends React.Component {
  constructor () {
    super ()

    this.state = {
      entry: '',
      description: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  updateSighting = async (event) => {
    event.preventDefault()
    const id = this.props.match.params.id
    const { entry, description } = this.state
    const { flash, setUser, user } = this.props
    const data = (this.state)

    updateWithFetch(id, this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.postSuccess, 'flash-success'))
      .catch(() => flash(messages.failure, 'flash-error'))
  }

  render () {
    const { entry, description} = this.state

    return (
      <div>
        <h1> Need to change something? </h1>
        <form action="/sightings" onSubmit={this.updateSighting} encType="multipart/form-data" id="sightings-form">
          <fieldset>
            <label htmlFor="entry">entry</label>
            <input
              required
              name="entry"
              value={this.entry}
              type="text"
              placeholder="entry"
              onChange={this.handleChange}
              pattern="[a-zA-Z0-9-\s]+"
            />

            <label htmlFor="description">description</label>
            <input
              required
              name="description"
              value={this.description}
              type="description"
              placeholder="entry"
              onChange={this.handleChange}
              pattern="[a-zA-Z0-9-\s]+"
            />

            <button type="submit">chirp!</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default withRouter(Update)
