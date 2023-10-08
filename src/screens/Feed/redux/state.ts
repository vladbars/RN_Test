import { Map } from 'immutable'
import Post from '../types/Post'
const initialState = Map({
  posts: [] as Post[],
  isLoading: false,
})

export default initialState
