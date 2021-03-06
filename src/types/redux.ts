export type AsyncState<T> = {
  data: T
  loading: boolean
  error: string | null
}

export type Action = {
  type: string | AsyncActionType
  payload: any
}

export type AsyncActionType = {
  failure: string
  success: string
  request: string
  reset: string
}
