import { call, put, takeLatest } from 'redux-saga/effects'
import { getProfile } from './actions'
import profileApi from '@api/profile'

export default [takeLatest(getProfile.toString(), getProfileSaga)]

function* getProfileSaga({ payload }: { payload: { userId: string } }): Generator<any, void, any> {
  console.log('🚀 ~ function*getProfileSaga ~ getProfileSaga:', getProfileSaga)
  try {
    const { userId } = payload
    const postsResult = yield call(profileApi.getProfile, userId)
    if (postsResult?.data) {
      const profile = postsResult.data
      yield put(getProfile.success({ profile }))
    } else {
      yield put(getProfile.error())
    }
  } catch (e) {
    yield put(getProfile.error(e))
  }
}
