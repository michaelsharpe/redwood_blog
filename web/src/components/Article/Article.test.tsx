import { render } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const article = {
  id: 1,
  body: 'testing',
  title: 'test',
  createdAt: '1',
}

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={article} />)
    }).not.toThrow()
  })
})
