const save = (id) => {
    if (!localStorage.getItem('movies')) {
        const movies = [id]
        localStorage.setItem('movies', JSON.stringify(movies))
    } else {
        let movies = JSON.parse(localStorage.getItem('movies'))
        movies.push(id)
        localStorage.setItem('movies', JSON.stringify(movies))
    }
}

const load = () => {
    if (localStorage.getItem('movies')) {
        return JSON.parse(localStorage.getItem('movies'))
    } else {
        return []
    }
}

const remove = (id) => {
    if (localStorage.getItem('movies')) {
        const movies = JSON.parse(localStorage.getItem('movies'))
        const moviesUptated = movies.filter(m => {
            return m !== id
        })
        localStorage.setItem('movies', JSON.stringify(moviesUptated))
    } else {
        return []
    }
}

export const Storage = {
    save,
    load,
    remove
}