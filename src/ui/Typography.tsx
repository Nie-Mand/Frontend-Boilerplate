import { Typography, styled, TypographyProps } from '@mui/material'

const H1Typography = (props: TypographyProps) => (
  <Typography variant="h1" {...props} />
)
export const H1 = styled(H1Typography)`
  && {
    color: red;
  }
`
