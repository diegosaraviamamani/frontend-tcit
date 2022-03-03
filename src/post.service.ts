import { Post } from './schema';
const POST_API_URL = 'https://backend-tcit.herokuapp.com/posts'

export const getPosts = async () => {
  const response = await fetch(POST_API_URL)
  const posts = await response.json()
  return posts
}

export const deletePost = async (id: number) => {
  const response = await fetch(`${POST_API_URL}/${id}`, {
    method: 'DELETE',
  })
  const post = await response.json()
  return post
}

export const addPost = async (post: Omit<Post, 'id'>) => {
  const response = await fetch(POST_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
  const newPost = await response.json()
  return newPost
}