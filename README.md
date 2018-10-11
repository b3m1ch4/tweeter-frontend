# Tweeter ReadMe

## Links
Web application: https://b3m1ch4.github.io/tweeter-frontend/#/
Frontend repo: https://github.com/b3m1ch4/tweeter-frontend
Remote: https://git.heroku.com/tweeter-remote-0808.git
Backend repo: https://github.com/b3m1ch4/tweeter-backend

## Tweeter's Stack
<li> React </li>
<li> Express </li>
<li> MongoDB </li>
<li> GitHub </li>
<li> Heroku </li>

## Plan
Document your planning, process and problem-solving strategy

### (Known) Problems and future development
  <li> Create data stream using fetch or axios </li>
  <li> Create an encyclopedia entry resource </li>
  <li> Create a friends network </li>

### User Stories
  An embedded screenshot of the app
  Link to Entity Relationship Diagram (ERD).

<table>
Sightings
<tr> POST: /sightings uploads#create (client -> API -> Amazon S3 -> API -> client) </tr>
<tr> GET: /uploads/ uploads#index (client -> API -> client) </tr>
<tr> PATCH: /uploads/:id uploads#update (client -> API -> client) </tr>
<tr> DELETE: /uploads/:id uploads#destroy (client -> API -> Amazon S3 -> API -> client) </tr>
</table>

### Setup
  Fork and clone the frontend
  Fork and clone the backend
  Npm install
  Heroku remote
