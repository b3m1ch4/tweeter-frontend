import React, { Component } from 'react'
import apiUrl from '../apiConfig'
import { withRouter } from 'react-router-dom'
import { handleErrors, signUp, signIn, handlePost } from '../auth/api'
import messages from '../auth/messages'
import Header from '../header/Header.js'
import user from '../apiConfig.js'
import axios from 'axios'

class Post extends React.Component {
  constructor () {
    super ()

    this.state = {
      entry: '',
      description: '',
      image: null
    }
  }

  logSighting = async (sighting, user) => {
    event.preventDefault()
    const response = await axios.post(`${apiUrl}/sightings`, { sighting }, {
      'headers': {
        'Authorization': `Token token=${user.token}`
      }
    })
    return response
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleUpload = event => this.setState({
    [event.target.name]: event.target.files[0]
  })

  postSighting = event => {
    event.preventDefault()
    const { entry, description, image } = this.state
    const { flash, setUser, user } = this.props
    const data = (this.state)

    this.logSighting(data, user)
      .then(handlePost)
      .then(() => flash(messages.postSuccess, 'flash-success'))
      .catch(() => flash(messages.failure, 'flash-error'))
  }

  render () {
    return (
      <div>
        <h1> Post! </h1>
        <form action="/sightings" onSubmit={this.postSighting} encType="multipart/form-data" id="sightings-form">
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

            <label htmlFor="image">image</label>
            <input
              name="image"
              value={this.image}
              type="file"
              placeholder="image"
              onChange={this.handleUpload}
            />

            <button type="submit">post a bird sighting!</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default withRouter(Post)
