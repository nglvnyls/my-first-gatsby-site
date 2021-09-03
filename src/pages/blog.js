import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/post'

const BlogPage = ({data}) => {
    
    const posts= data.allFile.nodes
    console.log(posts)
    return(
        <Layout>
            <p>aquest és la pagina a on hi haurà els post</p>
            <ul>
            {posts.map(post=>
                <li key={post.name}>
                    {post.name}
                </li>
            )}
            </ul>
            
            
        </Layout>
    )
}

export const query = graphql`
  query blogData {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage