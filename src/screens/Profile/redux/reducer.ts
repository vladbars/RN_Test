import { createReducer } from 'redux-act'

import { dispatchGetProfile } from './actions'
import initialState from './state'
import User from '../types/User'

export default createReducer(
  {
    [dispatchGetProfile]: (state) => state.set('isLoading', true),
    [dispatchGetProfile.success]: (state, { profile = {} }) => {
      const { id } = profile
      const profiles: { [key: number]: User } = state.get('profiles') || {}
      profiles[id] = profile
      return state.set('profiles', profiles).set('isLoading', false)
    },
    [dispatchGetProfile.error]: (state) => state.set('isLoading', false),
  },
  initialState
)
