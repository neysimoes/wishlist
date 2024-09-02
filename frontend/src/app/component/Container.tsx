import type { ReactNode } from 'react'

type ContainerProps = {
  className?: string
  children: ReactNode
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={`max-w-screen-xl w-full m-auto px-5 ${className}`}>{children}</div>
)

export default Container
