const movieLimitation = 6;
const API_BASE = 'http://localhost:4000/movies';
const API_URL = `http://localhost:4000/movies?limit=${movieLimitation}`;

export default async function getData(query = '', filter = 'All', sort = 'release_date') {
    let queryWithParameters = API_URL + (filter === 'All' ? '' : ('&filter=' + filter));
    queryWithParameters += '&sortOrder=desc&sortBy=' + sort;
    queryWithParameters += '&searchBy=title&search=' + query;
    
    const data = await fetch(queryWithParameters)
        .then(response => response.json());

    return {
        ...data,
        filter,
        sort,
    };
}

export async function createMovieAPI(movie) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    };

    const data = await fetch(API_BASE, requestOptions).then(response => response.json())

    return {
        ...data,
    };
}

export async function updateMovieAPI(movie) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    };

    const data = await fetch(API_BASE, requestOptions).then(response => response.json());

    return {
        ...data,
    };
}

export async function deleteMovieAPI(movie) {
    const requestOptions = {
        method: 'DELETE',
    };

    const state = await fetch(`${API_BASE}/${movie.id}`, requestOptions).then(response => response.status);

    return { ...state };
}

