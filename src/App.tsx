import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, addPost, deletePost } from './slices/posts'
import { TStore } from './store'
import * as PostService from './post.service'

function App() {
  const [name, setName] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [filter, setFilter] = React.useState<string>('')
  const [hasFilter, setHasFilter] = React.useState<boolean>(false)
  const isFormDisabled = name === '' || description === ''

  const dispatch = useDispatch()
  const { posts } = useSelector((state: TStore) => state.postReducer)

  useEffect(() => {
    PostService.getPosts().then((posts) => {
      dispatch(getPosts(posts))
    })
  }, [dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'name') {
      setName(value)
    } else if (name === 'description') {
      setDescription(value)
    } else if (name === 'filter') {
      setHasFilter(false)
      setFilter(value)
    }
  }

  const handleSubmit = async () => {
    if (!isFormDisabled) {
      const newPost = await PostService.addPost({ name, description })
      dispatch(addPost(newPost))
      setName('')
      setDescription('')
    }
  }

  const handleDelete = (id: number) => {
    PostService.deletePost(id).then(() => {
      dispatch(deletePost(id))
    })
  }

  const handleFilter = () => {
    if (filter !== '') {
      setHasFilter(true)
    } else {
      setHasFilter(false)
    }
  }

  const dataPosts = hasFilter
    ? posts.filter(
        (post) =>
          post.name.toLowerCase().includes(filter.toLowerCase()) ||
          post.description.toLowerCase().includes(filter.toLowerCase())
      )
    : posts

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          name="filter"
          className="form-control mt-3"
          placeholder="Filtro"
          onChange={handleChange}
        />
        <button className="mt-3 btn btn-primary" onClick={handleFilter}>
          Filtrar
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataPosts.map((post) => (
            <tr key={post.id}>
              <th>{post.id}</th>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            name="name"
            className="form-control"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <input
            name="description"
            className="form-control"
            value={description}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className={`btn btn-primary ${isFormDisabled && 'disabled'}`}
        >
          Crear
        </button>
      </div>
    </div>
  )
}

export default App
