export type GithubIssueResponse = {
	body: string
	repository_url: string
	comments_url: string
	created_at: string
	user: {
		login: string
	}
}
