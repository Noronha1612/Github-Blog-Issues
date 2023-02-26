import { GithubIssueResponse } from '@/models/Issue'
import { GithubUserResponse } from '../models/User'
import { api } from '../services/api'

const ENV_USERNAME = import.meta.env.VITE_GITHUB_USERNAME ?? ''
const ENV_ISSUE_REPO_NAME = import.meta.env.VITE_ISSUES_REPO ?? ''

export class GithubRepository {
  public static getUserData() {
    return api.get<GithubUserResponse>(`/users/${ENV_USERNAME}`)
  }

  public static getIssues(query = '') {
    return api.get<GithubIssueResponse>(`/search/issues?q=${query}repo:${ENV_USERNAME}/${ENV_ISSUE_REPO_NAME}`)
  }
}
