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

const readableProject = (project) => {
  if (project === 'web-app-from-scratch-2122') {
    project = 'Web apps from scratch'
  }
  if (project === 'css-to-the-rescue-2122') {
    project = 'CSS to the rescue'
  }
  if (project === 'project-1-2122') {
    project = 'Project OBA'
  }
  if (project === 'progressive-web-apps-2122') {
    project = 'Progressive web apps'
  }
  if (project === 'browser-technologies-2122') {
    project = 'Browser Technologies'
  }
  if (project === 'project-2-2122') {
    project = 'Project GitHub'
  }
  return project
}

app.get("/", (req, res) => {
  const formProject = req.query.project
  const project = formProject ? formProject : 'css-to-the-rescue-2122'

    graphqlAuth(`{
      repositoryOwner(login: "cmda-minor-web") {
        repository(name: "${project}") {
          forks(first: 100) {
            edges {
              node {
                owner {
                  avatarUrl
                  login
                  url
                  repositories(first: 100) {
                    nodes {
                      id
                    }
                  }
                }
                url
                nameWithOwner
                shortDescriptionHTML(limit: 1000)
                updatedAt
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                }
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
            visitors: data.repositoryOwner.repository.forks.edges.length,
            projects: data.repositoryOwner.repository.forks.edges,
            randomnpc: random_item(data.repositoryOwner.repository.forks.edges),
            currentProject: readableProject(project)
        })
    })
})

app.listen(port, () => {
    console.log(`Ai we live at http://${hostname}:${port}/`);
})

