import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import apiUrl from '../apiConfig'
import axios from 'axios'
import messages from '../auth/messages'
import Header from '../header/Header.js'
import { handleErrors, signUp, signIn, handlePost } from '../auth/api'

class SpeciesEntry extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      headers: {},
      allEntries: []
    }
  }

  async componentDidMount() {
    const { flash, user } = this.props
    const response = await axios.get(apiUrl + '/species', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      }
    })
    this.setState({ allEntries: response.data.allSpecies })
  }

  render () {
    const encyclopedia = this.state.allEntries.map(species => {
      return (
        <SpeciesEntry key={species._id}
          name={species.englishName}
        />
      )
    })

    return (
      <React.Fragment>
        {encyclopedia}
      </React.Fragment>
    )
  }
}

export default withRouter(SpeciesEntry)
