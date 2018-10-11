# Tweeter ReadMe
Tweeter is an application that allows users to track bird sightings.

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

### (Known) Problems
  <li> Create data stream using fetch or axios </li>

### User Stories and future development
As a user, I should be able to:
</li> sign-up, sign-in, sign-out and change my possword </li>
</li> create a bird sighting log </li>
</li> a bird sighting log </li>
</li> a bird sighting log </li>
</li> see all bird sightings on Tweeter other users have made </li>
</li> be informed when I've used the application correctly </li>
</li> be informed when I've used the application incorrectly </li>

As a user, I would some day like to be able to:
<li> manage my own resources specifically </li>
<li> learn more about birds through encyclopedia entries </li>
<li> post, view and delete images of birds I've seen in real life </li>
<li> view images other users have posted </li>
<li> make friends with other bird watchers </li>

  An embedded screenshot of the app
  Link to Entity Relationship Diagram (ERD).

<blockquote>
Sightings
<p> POST: /sightings uploads#create (client -> API -> Amazon S3 -> API -> client) </p>
<p> GET: /uploads/ uploads#index (client -> API -> client) </p>
<p> PATCH: /uploads/:id uploads#update (client -> API -> client) </p>
<p> DELETE: /uploads/:id uploads#despoy (client -> API -> Amazon S3 -> API -> client) </p>
</blockquote>

### Setup
Thank you for reading about Tweeter! If you'd like to use my code to make your
own bird watching app, please fork and clone the backend and frontend repos listed
above. Additionally, you'll need to setup:

<li>node modules in package.json with the terminal command npm install</li>
<li>a react application with the terminal commend create-react-app</li>
<li>setup a remote server (I suggest Heroku)</li>
