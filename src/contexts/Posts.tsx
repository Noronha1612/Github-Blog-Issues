import { useFetchPosts } from "@/hooks/useFetchPosts";
import { Issue } from "@/models/Issue";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";

type PostsContextProps = {
  posts: Issue[]

  updateQuery(q: string): void
  getPostById(id: string): void
}

export const PostsContext = createContext({} as PostsContextProps)

export const PostsContextProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('')

  const { posts } = useFetchPosts(query)

  const updateQuery = useCallback((q: string) => setQuery(q), [])

  const getPostById = useCallback((id: string) => posts.find(post => post.id.toString() === id), [])

  return (
    <PostsContext.Provider value={{ posts, updateQuery, getPostById }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)