import React from 'react'
import App from '../components/App'

export default function Home(props) {
  const repos = props?.repos?.data?.user?.repositories?.nodes

  return <App
    repos={repos}
  />
}

export async function getStaticProps() {
  const query = `
    query {
      user(login: "dugramen") {
        repositories(first: 20, privacy: PUBLIC) {
          nodes {
            name
            openGraphImageUrl
            description
            homepageUrl
            url
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