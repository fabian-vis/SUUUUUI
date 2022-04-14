# Randomize Github Repository Choser

De opdracht was om vier dagen lang iets creatiefs te maken met de GitHub GraphQl API.

### Gemaakt door
- [Fabian Vis](https://github.com/fabian-vis)
- [Sietse Roos](https://github.com/sietse333)

### Resultaat

<img width="1530" alt="Schermafbeelding 2022-04-14 om 11 10 52" src="https://user-images.githubusercontent.com/70572501/163354860-b564d9cd-16e5-4f48-b844-5c479ccd30d3.png">


### User story

> As an indecesive person, i want someone to pick a repository for me so i can get inspiration from his/her project.

### Keuzes

- We kiezen ervoor om niet 100% responsive te werk tegaan omdat we met figuren gaan werken en vanwege de beperkte tijd.
- We hebben samen gewerkt met de live server extension van visual studio code

### Features

- Er kan een bepaald vak gekozen worden. De toeschouwers veranderden dan (Gebaseerd op het aantal forks van het vak)
- Er wordt een random penalty taker gekozen uit het publiek
- Als je op de penalty nemer klikt gaat hij de penalty nemen
- De keeper is een random docent van de minor
- Als er gescoord word komt er een pop-up met de repository van de penalty nemer

### Hoe installeer je dit project op je lokale machine?

1. In je CLI plak deze code: `git clone https://github.com/fabian-vis/SUUUUUI` (of gebruik github desktop)

2. Cd SUUUUUI of hoe jij de folder genoemd heb

3. typ npm install in de terminal

4. typ npm start om de server te starten

5. kopieer de link gegeven in de terminal en plak deze in een browser naar keuze

Vergeet niet om je eigen API key aan te vragen op github. Vervolgens moet je een .env-dev bestand aanmaken en daar zet je je key in.

### API Documentatie
Hier kan je alle informatie vinden over de api: [GraphQL Documentatie](https://docs.github.com/en/graphql)

De explorer hebben we gebruikt om de query te genereren: [GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer)


Met de volgende query halen we de gewenste data uit de API op:

```javascript 
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
    }`)
```
### Licence

Dit project is voorzien van een MIT licence.

### Resources
- Docenten en Student-Assistenten
- https://docs.github.com/en/graphql
- Medestudenten :)
