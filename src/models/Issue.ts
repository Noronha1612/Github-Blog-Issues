export type GithubIssueResponse = {
	total_count: number
	items: Issue[]
}

export type Issue = {
	id: number
	title: string
	body: string
	repository_url: string
	comments_url: string
	created_at: string
	user: {
		login: string
	}
}
