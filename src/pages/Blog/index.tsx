import { Helmet } from 'react-helmet-async'
import Blog from './Blog'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const BlogPage = () => {
  const t = useMessages('Blog')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Blog />
    </>
  )
}

export default BlogPage
