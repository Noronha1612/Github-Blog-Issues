
import { Issue } from '@/models/Issue'
import { RouteName } from '@/routes'
import { injectUrlParameter } from '@/utils/routing'
import * as S from './styles'

type PostCardProps = {
  post: Issue
}

const MAX_CARD_BODY_LENGTH = 200

const parseBody = (body: string) => {
  const sanitizedBody = Array.from(body).filter(letter => letter.match(/^[.,a-zA-Z\s]*$/)).join('')

  if (sanitizedBody.length > MAX_CARD_BODY_LENGTH) {
    return `${sanitizedBody.substring(0, MAX_CARD_BODY_LENGTH - 1)}...`
  }

  return sanitizedBody
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <S.CardContainer to={injectUrlParameter(RouteName.DETAILS, { id: post.id })}>
      <header>
        <h3>{post.title}</h3>

        <span>Há 1 dia</span>
      </header>

      <S.Content>{parseBody(post.body)}</S.Content>
    </S.CardContainer>
  )
}
