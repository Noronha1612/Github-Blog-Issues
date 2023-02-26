
import { FaBuilding, FaGithub, FaShareSquare, FaUserFriends } from 'react-icons/fa'

import * as S from './styles'

export const UserCard = () => {
	return (
		<S.Container>
			<S.AvatarImage src='https://avatars.githubusercontent.com/u/56375499?v=4' />

			<S.Content>
				<div className="flex-sp-btw">
					<h1>Gabriel Noronha</h1>

					<a href="#">github <FaShareSquare size={12} /></a>
				</div>

				<p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

				<footer>
					<span><FaGithub size={18} /> Noronha1612</span>
					<span><FaBuilding size={18} /> Banco Inter</span>
					<span><FaUserFriends size={18} /> 20 seguidores</span>
				</footer>
			</S.Content>
		</S.Container>
	)
}