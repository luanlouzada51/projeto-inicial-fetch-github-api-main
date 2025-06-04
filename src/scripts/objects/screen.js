const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                <div class="data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado.'}</h1>
                                    <p>${user.bio ?? 'Não possui bio cadastrada.'}</p>
                                    <p>👤${user.followers} seguidores</p>
                                    <p>👥${user.following} seguindo</p>
                                </div>
                            </div>`

        if (user.events && user.events.length > 0) {
            let eventsItems = ''
            user.events.forEach(event => {
                if (event.type === 'PushEvent') {
                    event.payload.commits.forEach(commit => {
                        eventsItems += `
                    <li>
                        <strong>${event.repo.name}</strong>: ${commit.message}
                    </li>
                `
                    })
                } else if (event.type === 'CreateEvent') {
                    eventsItems += `
                <li>
                    <strong>${event.repo.name}</strong>: Repositório criado (${event.payload.ref_type})
                </li>
            `
                }
            })
            this.userProfile.innerHTML += `
        <div class="events section">
            <h2>Últimas atividades</h2>
            <ul>${eventsItems}</ul>
        </div>
    `
        }

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <span>🍴: ${repo.forks_count}</span>
                    <span>⭐: ${repo.stargazers_count}</span>
                    <span>👀: ${repo.watchers_count}</span>
                    <span>👩‍💻: ${repo.language}</span>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItems}</ul>
                                    </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado!</h3>`
    }
}
export { screen };