const hostname = '127.0.0.1';
const express = require('express')
const app = express()
const port = 2000

require('dotenv').config({
    path: '.env-dev'
})

const {
    graphql
} = require('@octokit/graphql')
const graphqlAuth = graphql.defaults({
    headers: {
        authorization: 'token ' + process.env.API_KEY
    },
})
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
app.use(express.static('public'));



app.get("/", (req, res) => {
    graphqlAuth(`query {
      repositoryOwner(login: "cmda-minor-web") {
        repository(name: "css-to-the-rescue-2122") {
          forks(first: 100) {
            edges {
              node {
                owner {
                  avatarUrl
                  login
                  url
                }
                url
                nameWithOwner
                shortDescriptionHTML
                updatedAt
              }
            }
          }
        }
      }
    }`).then((data) => {
    function random_item(projects) {
      return projects[Math.floor(Math.random()*projects.length)];     
    }
        res.render('home', {
            projects: data.repositoryOwner.repository.forks.edges,
            randomnpc: random_item(data.repositoryOwner.repository.forks.edges)
        })
    })
})

app.listen(port, () => {
    console.log(`Ai we live at http://${hostname}:${port}/`);
})

