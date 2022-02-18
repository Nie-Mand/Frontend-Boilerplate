import { AsyncState } from 'app/types/redux'

const initialState: GlobalState = {
  isAuthentificated: null,
  login: {
    loading: false,
    error: null,
    data: null,
  },
}
export default initialState

export type GlobalState = {
  isAuthentificated: boolean | null
  login: AsyncState<null>
}
