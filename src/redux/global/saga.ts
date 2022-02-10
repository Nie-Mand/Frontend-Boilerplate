import { call, put, takeLatest, all } from 'redux-saga/effects'
import { push } from 'redux-first-history'
import type { Action } from '../../@types/redux'
import * as constants from './constants'
import * as api from 'services/hello'

function* exampleSaga() {
  yield takeLatest(constants.init.request, function* (action: Action) {
    try {
      type Response = any
      // const response: Response = yield call(api.helloWorld)
      const response: Response = 'hello world'
      console.log(response)

      if (response) {
        yield put({
          type: constants.init.success,
          payload: {},
        })
        yield put(push('/login'))
      } else {
        yield put({
          type: constants.init.failure,
          payload: {
            error: response.error,
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.init.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}

export default function* () {
  yield all([exampleSaga()])
}
