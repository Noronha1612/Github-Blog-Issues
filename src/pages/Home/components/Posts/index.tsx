
import { useForm, useWatch } from 'react-hook-form'
import * as S from './styles'

import { usePosts } from '@/hooks/usePosts'
import { debounce } from 'debounce'
import { PostCard } from './components/PostCard'

export const Posts = () => {
  const { register, control } = useForm({
    defaultValues: {
      query: ""
    }
  })

  const queryInputRegistration = register('query')
  const handleQueryChange = debounce(queryInputRegistration.onChange, 1000)

  const { query } = useWatch({ control })
  const { posts } = usePosts(query)

  return (
    <S.Posts>
      <header>
        <h1>Publicações</h1>

        <span>6 publicações</span>
      </header>

      <S.SearchInput
        {...queryInputRegistration}
        placeholder='Buscar conteúdo'
        onChange={handleQueryChange}
      />

      <S.CardWrapper>
        {posts.map(post => (
          <PostCard post={post} key={post.id} />
        ))}
      </S.CardWrapper>
    </S.Posts>
  )
}
