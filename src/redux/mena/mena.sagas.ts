import { call, put, takeLatest, all } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './mena.constants'
import * as api from './mena.services'

export function* menaSaga() {
  yield takeLatest(constants.createMena.request, function* (action: Action) {
    try {
      type Response = {
        data: {
          mena: {
            message: string
          }
        }
      }
      const response: Response = yield call(api.createMena, action.payload)

      if (response) {
        yield put({
          type: constants.createMena.success,
          payload: {},
        })
      } else {
        yield put({
          type: constants.createMena.failure,
          payload: {
            error: 'error',
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createMena.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}
