import React from 'react'
import App from '../components/App'

export const GitHubDataContext = React.createContext(null)

export default function Home(props) {
  const repos = props?.repos?.data?.user?.repositories?.nodes

  return <GitHubDataContext.Provider value={repos}>
    <App
      repos={repos}
    />
  </GitHubDataContext.Provider>
}

export async function getStaticProps() {
  const query = `
  {
    user(login: "dugramen") {
      repositories(first: 20, privacy: PUBLIC) {
        nodes {
          name
          openGraphImageUrl
          description
          homepageUrl
          url
          languages(first: 10) {
            nodes {
              name
              color
            }
          }
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
          id
        }
      }
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            id
            name
          }
        }
      }
    }
  }
  `
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({query}),
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })
  const repos = await res.json()

  return {
    props: {
      repos,
    },
  }
}