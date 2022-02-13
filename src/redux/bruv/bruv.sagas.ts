import { call, put, takeLatest, all } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './bruv.constants'
import * as api from './bruv.services'

export function* bruvSaga() {
  yield takeLatest(constants.createBruv.request, function* (action: Action) {
    try {
      type Response = {
        data: {
          bruv: {
            message: string
          }
        }
      }
      const response: Response = yield call(api.createBruv, action.payload)

      if (response) {
        yield put({
          type: constants.createBruv.success,
          payload: {},
        })
      } else {
        yield put({
          type: constants.createBruv.failure,
          payload: {
            error: 'error',
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createBruv.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}
