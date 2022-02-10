import { all } from 'redux-saga/effects'
import globalSaga from './global/saga'

export default function* rootSaga() {
  yield all([globalSaga()])
}
