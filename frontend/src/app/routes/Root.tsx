import { Outlet, useMatches } from 'react-router-dom'
import Header from '../component/Header'
import Container from '../component/Container'
import Beadcrumbs from '../component/Breadcrumbs'

type handleProps = { crumb?: string }

const Root = () => {
  const matches = useMatches()

  const crumbs = matches
    .filter((match) => Boolean((match.handle as handleProps)?.crumb))
    .map((match) => ({
      name: (match.handle as handleProps).crumb as string,
      pathname: match.pathname,
    }))

  return (
    <>
      <Header />
      <Container>
        <Beadcrumbs crumbs={crumbs} />
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
