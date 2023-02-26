export type GithubIssueResponse = {
	total_count: number
	items: Issue[]
}

export type Issue = {
	id: number
	title: string
	body: string
	html_url: string
	comments: number
	created_at: string
	user: {
		login: string
	}
}
