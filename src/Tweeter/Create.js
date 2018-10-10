import React, { Component } from 'react'
import apiUrl from '../apiConfig'
import { withRouter } from 'react-router-dom'
import { handleErrors, signUp, signIn } from '../auth/api'
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

   logSighting = (formData, user) => {
     console.log('sending', formData)
     console.log('token is', user.token)
     console.log('apiUrl is', apiUrl)
     return fetch(apiUrl + '/sightings', {
       method: 'POST',
       headers: {
         'Content-Type': false,
         'Process-Data': false,
         'Authorization': `Token token=${user.token}`,
       },
       data: formData
     })
   }


  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleUpload = event => this.setState({
    [event.target.name]: event.target.files[0]
  })

  postSighting = event => {
    event.preventDefault()
    const { entry, description, image} = this.state
    const { flash, history, setUser, user } = this.props
    // const formData = new FormData(event.target)
    const formData = (this.state)
    console.log('image is', this.state.image)
    console.log('image should be the object from this form', formData)


    this.logSighting(formData, user)
      .then(handleErrors)
      .then(res => res.json())
      .then(() => flash(messages.postSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.postFailure, 'flash-error'))
  }

  render () {
    return (
      <React.Fragment>
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
              required
              name="image"
              value={this.image}
              type="file"
              placeholder="image"
              onChange={this.handleUpload}
            />

            <button type="submit">chirp!</button>
          </fieldset>
        </form>
      </React.Fragment>
    )
  }
}

export default Post
