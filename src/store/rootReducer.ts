import { combineReducers } from 'redux-immutable'
import feed from '../screens/Feed/redux/reducer'
import profile from '../screens/Profile/redux/reducer'
import { Map } from 'immutable'
const appReducer = combineReducers(
  {
    feed,
    profile,
  }
)

function rootReducer(state: any, action: any) {
  if (action.type === 'SIGN_OUT') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer
