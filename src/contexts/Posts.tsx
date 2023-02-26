import { useFetchPosts } from '@/hooks/useFetchPosts'
import { Issue } from '@/models/Issue'
import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

type PostsContextProps = {
  posts: Issue[]
  loading: boolean

  updateQuery(q: string): void
}

export const PostsContext = createContext({} as PostsContextProps)

export const PostsContextProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('')

  const { posts, loading } = useFetchPosts(query)

  const updateQuery = useCallback((q: string) => setQuery(q), [])

  return (
    <PostsContext.Provider value={{ posts, updateQuery, loading }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)