const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.username = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    events: [],
    setEvents(events) {
        this.events = events
    },
    setRepositories(repositories) {
        this.repositories = repositories
        this.repositories.forEach(repo => {
            repo.language = repo.language ?? 'Não possui linguagem definida.'
            repo.forks_count = repo.forks_count ?? 0
            repo.stargazers_count = repo.stargazers_count ?? 0
            repo.watchers_count = repo.watchers_count ?? 0
        })
    }
}

export { user }