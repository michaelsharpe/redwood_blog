import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from '../../components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>Home</main>
      <ArticlesCell />
    </>
  )
}

export default HomePage
