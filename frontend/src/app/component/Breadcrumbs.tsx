import { Link } from 'react-router-dom'

type crumb = {
  name: string
  pathname: string
}

type BeadcrumbsProps = {
  crumbs: crumb[]
}

const Beadcrumbs = ({ crumbs }: BeadcrumbsProps) => (
  <ol className="flex flex-row pt-4 pb-2 lg:py-4 lg:border-b border-gray-500">
    {crumbs.map((crumb, index) => (
      <li key={index} className="text-primary last:font-bold mr-1">
        {index > 0 && ' / '}
        <Link to={crumb.pathname}>{crumb.name}</Link>
      </li>
    ))}
  </ol>
)

export default Beadcrumbs
