import { GithubUser } from './../models/User'
import { api } from './../services/api'

export class UserRepository {
  public static getUserData(username: string) {
    return api.get<GithubUser>(`/users/${username}`)
  }
}
