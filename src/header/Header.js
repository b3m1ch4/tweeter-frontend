import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/post">Log a Sighting</Link>
    <Link to="/privateindex"> Sighting Log</Link>
    <Link to="/publicindex">Sightings Log (Read Only)</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)


const Header = ({ user }) => (
  <header className="main-header">
    <h1>Tweeter</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
