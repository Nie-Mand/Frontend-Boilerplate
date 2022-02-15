import { AsyncState } from 'app/types/redux'

const initialState: State = {
  createMena: {
    loading: false,
    error: null,
    data: null,
  },
}
export default initialState

export type State = {
  createMena: AsyncState<null | Mena>
}

type Mena = {
  message: string
}
