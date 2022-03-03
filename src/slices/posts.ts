import { createSlice } from "@reduxjs/toolkit"
import { Post } from "../schema"

interface InitialState {
  posts: Post[]
}

const initialState: InitialState = {
  posts: []
}

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state.posts = payload
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload)
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload)
    },
    filterPosts: (state, { payload }) => {
      if (payload !== "") {
        state.posts = state.posts.filter((post) => post.name.includes(payload) || post.description.includes(payload))
      }
    }
  },
})

export const postReducer = postSlice.reducer
export const { getPosts, addPost, deletePost, filterPosts } = postSlice.actions