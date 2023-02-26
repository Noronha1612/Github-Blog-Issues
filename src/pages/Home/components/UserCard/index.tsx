
import { ExternalLink } from '@/components/ExternalLink'
import { useFetchUser } from '@/hooks/useFetchUser'
import { StyledPageCard, StyledPageCardFooter } from '@/styles/components/PageCard'
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'

import * as S from './styles'

export const UserCard = () => {
  const { user, loading } = useFetchUser()

  if (loading) return <></>

  return (
    <StyledPageCard>
      <S.AvatarImage src={user?.avatar_url} alt="Avatar" />

      <S.Content>
        <div className="flex-sp-btw">
          <h1>{user?.name}</h1>

          <ExternalLink url={user?.html_url ?? '#'}>Github</ExternalLink>
        </div>

        <p>{user?.bio}</p>

        <StyledPageCardFooter>
          <span><FaGithub size={18} />{user?.login}</span>
          <span><FaBuilding size={18} />{user?.company}</span>
          <span><FaUserFriends size={18} />{user?.followers} seguidores</span>
        </StyledPageCardFooter>
      </S.Content>
    </StyledPageCard>
  )
}