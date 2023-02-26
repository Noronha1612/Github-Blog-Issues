
import { useUser } from '@/hooks/useUser'
import { FaBuilding, FaGithub, FaShareSquare, FaUserFriends } from 'react-icons/fa'

import * as S from './styles'

export const UserCard = () => {
	const { user, loading } = useUser()

	if (loading) return <></>

	return (
		<S.Container>
			<S.AvatarImage src={user?.avatar_url} alt="Avatar" />

			<S.Content>
				<div className="flex-sp-btw">
					<h1>{user?.name}</h1>

					<a href={user?.html_url}>github <FaShareSquare size={12} /></a>
				</div>

				<p>{user?.bio}</p>

				<footer>
					<span><FaGithub size={18} /> {user?.login}</span>
					<span><FaBuilding size={18} /> {user?.company}</span>
					<span><FaUserFriends size={18} /> {user?.followers} seguidores</span>
				</footer>
			</S.Content>
		</S.Container>
	)
}