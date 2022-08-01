import axios from "axios"

const fetchPosts = async (page, limit = 5) => {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    // console.log(url);
    const response = await axios.get(url)
    return response.data
}

export { fetchPosts }