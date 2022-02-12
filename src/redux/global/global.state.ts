import { AsyncState } from 'app/types/redux'

const initialState: State = {
  isAuthentificated: null,
  login: {
    loading: false,
    error: null,
    data: null,
  },
}
export default initialState

export type State = {
  isAuthentificated: boolean | null
  login: AsyncState<null>
}
