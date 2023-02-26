import { GithubIssueResponse } from '@/models/Issue'
import { GithubUserResponse } from './../models/User'
import { api } from './../services/api'

export class UserRepository {
  private static _username = import.meta.env.VITE_GITHUB_USERNAME ?? ''
  private static _issuesRepoName = import.meta.env.VITE_ISSUES_REPO ?? ''

  public static getUserData() {
    return api.get<GithubUserResponse>(`/users/${this._username}`)
  }

  public static getIssues(query = '') {
    return api.get<GithubIssueResponse[]>(`/search?q=${query}repo:${this._username}/${this._issuesRepoName}`)
  }
}
