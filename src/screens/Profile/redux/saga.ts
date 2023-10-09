import { call, put, takeEvery, select } from 'redux-saga/effects'
import { dispatchGetProfile } from './actions'
import profileApi from '@api/profile'
import { selectProfiles } from './selectors'

export default [takeEvery(dispatchGetProfile.toString(), getProfileSaga)]

function* getProfileSaga({ payload }: { payload: { userId: number } }): Generator<any, void, any> {
  try {
    const { userId } = payload
    const existUsers = yield select(selectProfiles())
    const existUser = existUsers[userId]
    if (existUser) return
    const postsResult = yield call(profileApi.getProfile, userId)
    if (postsResult?.data) {
      const profile = postsResult.data
      console.log('🚀 ~ function*getProfileSaga ~ profile:', profile)
      yield put(dispatchGetProfile.success({ profile }))
    } else {
      yield put(dispatchGetProfile.error())
    }
  } catch (e) {
    yield put(dispatchGetProfile.error(e))
  }
}
