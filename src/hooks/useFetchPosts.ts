import { GithubRepository } from '@/repositories/GithubRepository'
import { useQuery } from 'react-query'
import { QueryKey } from './QueryKey'

export const useFetchPosts = (query?: string) => {
  const { data: response, isLoading } = useQuery([QueryKey.GetPosts, query], () => GithubRepository.getIssues(query), {
    staleTime: 1000 * 60 * 30, // 30 min
    retry: 0
  })

  return {
    posts: response?.data.items ?? [],
    loading: isLoading
  }
}