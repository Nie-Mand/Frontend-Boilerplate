const DefaultLayout = (props: Props) => {
  return (
    <div>
      <h1>Default Layout</h1>
      {props.children}
    </div>
  )
}
type Props = {
  children: JSX.Element | JSX.Element[]
}

export default DefaultLayout
