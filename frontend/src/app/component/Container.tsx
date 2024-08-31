import type { ReactNode } from 'react'

type ContainerProps = {
  className?: string
  children: ReactNode
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={`container px-5 ${className}`}>{children}</div>
)

export default Container
