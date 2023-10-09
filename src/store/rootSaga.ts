import { all } from 'redux-saga/effects'
import feedSaga from '../screens/Feed/redux/saga'
import profileSaga from '../screens/Profile/redux/saga'
function* rootSaga() {
  yield all([...feedSaga, ...profileSaga])
}

export default rootSaga
