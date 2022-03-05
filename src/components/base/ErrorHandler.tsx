import { Component } from 'react'
import InternalError from './InternalError'

type Props = {
  children: JSX.Element | JSX.Element[]
}

type State = {
  hasError: boolean
}

console.log(InternalError)

class ErrorHandler extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return <InternalError />
    return this.props.children
  }
}

export default ErrorHandler
