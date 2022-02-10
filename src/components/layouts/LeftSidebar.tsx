const LeftSideBarLayout = (props: Props) => {
  return (
    <div>
      <h1>Left Side Layout</h1>
      {props.children}
    </div>
  )
}
type Props = {
  children: JSX.Element | JSX.Element[]
}

export default LeftSideBarLayout
