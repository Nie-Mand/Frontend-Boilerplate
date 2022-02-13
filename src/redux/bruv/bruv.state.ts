import { AsyncState } from 'app/types/redux'

const initialState: State = {
  createBruv: {
    loading: false,
    error: null,
    data: null,
  },
}
export default initialState

export type State = {
  createBruv: AsyncState<null | Bruv>
}

type Bruv = {
  message: string
}
