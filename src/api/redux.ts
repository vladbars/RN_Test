import { call } from 'redux-saga/effects'

function* apiSaga(method: any, uri: string, params?: any): Generator<any, any, any> {
  try {
    const result: any = yield call(method, { uri, params })
    if (result instanceof Error) {
      return yield Promise.reject(result)
    }
    return yield result
  } catch (error) {
    return yield Promise.reject(error)
  }
}

export { apiSaga }
