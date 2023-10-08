import { call, put, takeLatest } from 'redux-saga/effects'
import { dispatchGetPosts } from './actions'
import feedApi from '@api/feed'

function* getPostsSaga(): Generator<any, void, any> {
  console.log('🚀 ~ function*getPostsSaga:')
  try {
    const postsResult = yield call(feedApi.getPosts)
    console.log('🚀 ~ function*getPostsSaga ~ postsResult:', postsResult)
    if (postsResult?.data) {
      const posts = postsResult.data
      yield put(dispatchGetPosts.success({ posts }))
    } else {
      yield put(dispatchGetPosts.error())
    }
  } catch (e) {
    yield put(dispatchGetPosts.error(e))
  }
}

export default [takeLatest(dispatchGetPosts.toString(), getPostsSaga)]
