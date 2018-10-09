import React, { Component } from 'react'
import apiUrl from '../apiConfig'
import axios from 'axios'

class Post extends React.Component {
  constructor () {
    super ()

    this.state = {
    }

  }

  postSighting () {
    console.log('tweet tweet')
  }

  render () {
    return (
      <React.Fragment>
        <h1> Post! </h1>
        <form onSubmit={this.postSighting}>
          <p><input id="entry" type="text" placeholder="entry"/></p>
          <p><input id="description" type="text" placeholder="description"/></p>
          <p><input id="image" type="text" placeholder="image"/></p>
          <button>submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Post
