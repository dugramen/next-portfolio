import React from 'react'
import App from '../components/App';

export const GitHubDataContext = React.createContext(null)

export default function Home(props) {
  const repos = props?.repos?.data?.user?.pinnedItems?.nodes

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
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            id
            name
            openGraphImageUrl
            description
            homepageUrl
            url
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            languages(first: 10) {
              nodes {
                name
                color
              }
            }
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