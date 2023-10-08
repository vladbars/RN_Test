import { createReducer } from 'redux-act'

import { dispatchGetPosts } from './actions'
import initialState from './state'

export default createReducer(
  {
    [dispatchGetPosts]: (state) => state.set('isLoading', true),
    [dispatchGetPosts.success]: (state, { posts = [] }) =>
      state.set('posts', posts).set('isLoading', false),
    [dispatchGetPosts.error]: (state) => state.set('isLoading', false),
  },
  initialState
)
