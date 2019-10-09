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

export const Storage = {
    save,
    load
}