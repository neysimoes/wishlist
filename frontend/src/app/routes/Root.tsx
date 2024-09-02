import { Link, Outlet, useMatches } from 'react-router-dom'
import Header from '../component/Header'
import Container from '../component/Container'

type handleProps = { crumb?: string }

const Root = () => {
  const matches = useMatches()

  const crumbs = matches
    .filter((match) => Boolean((match.handle as handleProps)?.crumb))
    .map((match) => ({
      name: (match.handle as handleProps).crumb,
      pathname: match.pathname,
    }))

  return (
    <>
      <Header />
      <Container>
        <ol className="flex flex-row py-4 border-b border-gray-500">
          {crumbs.map((crumb, index) => (
            <li key={index} className="text-primary last:font-bold mr-1">
              {index > 0 && ' / '}
              <Link to={crumb.pathname}>{crumb.name}</Link>
            </li>
          ))}
        </ol>
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
