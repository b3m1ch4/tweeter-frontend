/* ===== required files ===== */
import React, { Component } from 'react'
import apiUrl from '../apiConfig'
import { withRouter } from 'react-router-dom'
import { handleErrors, signUp, signIn, handlePost } from '../auth/api'
import messages from '../auth/messages'
import Header from '../header/Header.js'
import user from '../apiConfig.js'

export const deleteWithFetch = (sighting, user) => {
  return fetch(apiUrl + '/sightings/' + sighting, {
    method: 'delete',
    'headers': {
      'Authorization': `Token token=${user.token}`,
      'Content-Type': 'application/json'
    }
  })
}

export const updateWithFetch = (id, sighting, user) => {
  return fetch(apiUrl + '/sightings/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      sighting: {
        entry: sighting.entry,
        description: sighting.description
      }
    })
  })
}
