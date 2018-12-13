import React, { Component } from 'react'
import './home.scss'
import { Route, Link } from 'react-router-dom'
import AuthenticatedRoute from '../auth/components/AuthenticatedRoute'
import Header from '../header/Header'
import SignUp from '../auth/components/SignUp'
import SignIn from '../auth/components/SignIn'
import SignOut from '../auth/components/SignOut'
import ChangePassword from '../auth/components/ChangePassword'
import DisplayPublic from '../components/DisplayPublic.js'
import DisplayPrivate from '../components/DisplayPrivate.js'
import SpeciesEntry from '../components/SpeciesEntry'
import Post from '../components/Create.js'
import Update from '../components/Update.js'
import apiUrl from '../apiConfig.js'

const home = () => (
  <p> </p>
)
class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route exact path='/' render={home} />
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <Route path='/publicindex' render={() => (
            <DisplayPublic flash={this.flash} />
          )} />
          <AuthenticatedRoute user={user} path='/privateindex' render={() => (
            <DisplayPrivate flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/encyclopedia' render={() => (
            <SpeciesEntry flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/post' render={() => (
            <Post flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/update/:id/' render={() => (
            <Update flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App