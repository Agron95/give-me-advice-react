import axios from "axios";

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/'

const config = {
    headers: {
        'X-RapidAPI-Key': 'f8291d99abmshd7c46cb7235c0dcp17fbfdjsn13cc2bbf98be'
    },
    transformResponse: response => response
}

export default async () => {
    const { data } = await axios.get(url, config)
    return data
}

