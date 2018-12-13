import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import apiUrl from '../apiConfig'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

class LogEntryCard extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="./goldfinch.jpg"
            title="Placeholder Bird"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.entry}
            </Typography>
            <Typography component="p">
              {this.props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

LogEntryCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LogEntryCard)
