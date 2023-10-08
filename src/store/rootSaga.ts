import { all } from 'redux-saga/effects'
import feedSaga from '../screens/Feed/redux/saga'
function* rootSaga() {
  yield all([...feedSaga])
}

export default rootSaga
