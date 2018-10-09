import React, { Component } from 'react'
import apiUrl from '../apiConfig'
import axios from 'axios'

class DisplayPrivate extends React.Component {
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

  updateSighting (event) {
    console.log(event.target)
  }

  deleteSighting (event) {
    console.log(event.target)
  }

  render () {

    const displayTable = this.state.sightings.map(sighting => {
      return (
        <tbody key={sighting._id}>
          <tr>
            <td>{sighting._id}</td>
            <td>{sighting.entry}</td>
            <td>{sighting.description}</td>
            <td><button onClick={this.updateSighting} className="update-button">update</button></td>
            <td><button onClick={this.deleteSighting} className="delete-button">delete</button></td>
          </tr>
        </tbody>
      )
    })

    return (
      <React.Fragment>
        <h1>backend origin is {this.state.origin}</h1>
        <table>{displayTable}</table>
      </React.Fragment>
    )
  }
}

export default DisplayPrivate
