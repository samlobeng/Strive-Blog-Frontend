import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import BlogItem from "../blog-item"

const BlogList = () => {
  const [posts, setPosts] = useState(null)
 
  const fetchPosts = async () => {
    const apiURL = process.env.REACT_APP_BE_URL
    const response = await fetch(`${apiURL}/posts`)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setPosts(data)
    } else {
      console.log("error with fetching posts")
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Row>
      {posts &&
        posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} refresh={fetchPosts} />
          </Col>
        ))}
    </Row>
  )
}

export default BlogList
