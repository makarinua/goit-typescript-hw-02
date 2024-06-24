import axios from "axios"

export default async function fetch(searchWord, page) {
    const BASE_URL = `https://api.unsplash.com/search/photos`

    const params = {
        client_id: 'romuwQPowLxOF55i8dah2Z4aqNuJ6vdzWY2B2U9a4Jo',
        per_page: 20,
        query: searchWord,
        page,

    }

    const headers = {
        'Accept-Version': 'v1',

    }

    const data = await axios.get(BASE_URL, { params, headers })
    return data.data
}

