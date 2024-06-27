import axios from "axios"
import { FetchType } from "./fetch.types"

export default async function fetch<T>(searchWord: string[], page: number): Promise<T> {
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

    const { data } = await axios.get<T>(BASE_URL, { params, headers }) 
    return data
}