import { createReducer } from 'redux-act'

import { getProfile } from './actions'
import initialState from './state'

export default createReducer(
  {
    [getProfile]: (state) => state.set('isLoading', true),
    [getProfile.success]: (state, { profile = {} }) =>
      state.set('profile', profile).set('isLoading', false),
    [getProfile.error]: (state) => state.set('isLoading', false),
  },
  initialState
)
