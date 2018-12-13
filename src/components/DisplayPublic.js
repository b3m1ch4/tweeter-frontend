import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import apiUrl from '../apiConfig'
import axios from 'axios'
import { handleErrors, signUp, signIn, handlePost } from '../auth/api'
import LogEntryCard from './LogEntryCard.js'

class DisplayPublic extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      say: 'tweet tweet',
      origin: apiUrl,
      sightings: [],
    }

  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/sightings`)
    this.setState({sightings: response.data.sightings})
  }

  render () {
    console.log('display state', this.state)

    const displayTable = this.state.sightings.map(sighting => {

      return (

        <LogEntryCard key={sighting._id}
          id={sighting._id}
          name={sighting.entry}
          description={sighting.description}
        />
      )

    })

    return (
      <React.Fragment>
        {displayTable}
      </React.Fragment>
    )
  }
}

export default withRouter(DisplayPublic)
