
import { useForm } from 'react-hook-form'
import * as S from './styles'

import { usePosts } from '@/contexts/Posts'
import { debounce } from 'debounce'
import { useEffect } from 'react'
import { PostCard } from './components/PostCard'

export const Posts = () => {
  const { register, watch } = useForm({
    defaultValues: {
      query: ""
    }
  })

  const queryInputRegistration = register('query')
  const handleQueryChange = debounce(queryInputRegistration.onChange, 1000)

  const { query } = watch()
  const { posts, updateQuery } = usePosts()

  useEffect(() => {
    updateQuery(query)
  }, [query, updateQuery])

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
