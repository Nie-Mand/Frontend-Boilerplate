import { call, put, takeLatest, all } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './global.constants'
import * as api from './global.services'

// FIXME: add routing in sagas

export function* exampleSaga() {
  yield takeLatest(constants.createUser.request, function* (action: Action) {
    try {
      type Response = any
      // const response: Response = yield call(api.helloWorld)
      const response: Response = 'hello world'
      console.log(response)

      if (response) {
        yield put({
          type: constants.createUser.success,
          payload: {},
        })
      } else {
        yield put({
          type: constants.createUser.failure,
          payload: {
            error: response.error,
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createUser.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}
