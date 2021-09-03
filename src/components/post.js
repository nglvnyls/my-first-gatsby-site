import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const Post = () => {
    const data= 'post1'
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default Post
