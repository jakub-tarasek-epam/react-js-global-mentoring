const movieLimitation = 6;
const API_URL = `http://localhost:4000/movies?limit=${movieLimitation}`;

export default async function getData(filter = 'All', sort = 'release_date') {
    let queryWithParameters = API_URL + (filter === 'All' ? '' : ('&filter=' + filter));
    queryWithParameters += '&sortOrder=desc&sortBy=' + sort;
    const data = await fetch(queryWithParameters)
        .then(response => response.json());

    return {
        ...data,
        filter,
        sort,
    };
}
