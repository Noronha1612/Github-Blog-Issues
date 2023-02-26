import { ReactNode } from 'react'
import { FaShareSquare } from 'react-icons/fa'

import * as S from './styles'

type ExternalLinkProps = {
  url: string
  children: ReactNode
}

export const ExternalLink = ({ url, children }: ExternalLinkProps) => {
  return (
    <S.ExternalLink href={url}>
      <span>{children}</span>
      <FaShareSquare size={12} />
    </S.ExternalLink>
  )
}