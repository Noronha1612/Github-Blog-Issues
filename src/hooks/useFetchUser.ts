import { GithubRepository } from "@/repositories/GithubRepository"
import { useQuery } from "react-query"
import { QueryKey } from "./QueryKey"

export const useFetchUser = () => {
  const { data: response, isLoading } = useQuery(QueryKey.GetUserData, GithubRepository.getUserData, {
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    retry: 0
  })

  return {
    user: response?.data,
    loading: isLoading
  }
}