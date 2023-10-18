import axios from "axios"
import { Await } from "react-router-dom"

const apiUrl = import.meta.env.VITE_REACT_BASE_URL

export const getRecomendations = async() => {
    const response = await axios.get(`${apiUrl}/api/recomendation`)
    return response
}

export const getAll = async() => {
    const response = await axios.get(`${apiUrl}/api/all`)
    return response
}

export const getPopuler = async() => {
    const response = await axios.get(`${apiUrl}/api/populer`)
    return response
}

export const search = async(page, query) => {
    const response = await axios.get(`${apiUrl}/api/s/${page}/${query}`)
    return response
}

export const getDetails = async(endpoint, ch = 0) => {
    const response = await axios.get(`${apiUrl}/api/details/${endpoint}/${ch}`)
    if (response.data.status === 404) throw true
    return response
}

export const getChapter = async(endpoint, ch) => {
    const chapteList = await getDetails(endpoint, ch)
    const chapter = await axios.get(`${apiUrl}/api/komik/ch/${ch}`)
    
    const response = {
        title : chapteList.data.newDetail[0].title,
        endpoint: chapteList.data.newDetail[0].endpoint,
        page_title : chapter.data.page[0].title,
        page_list : chapter.data.page[0].page_list,
        chapter_list : chapteList.data.newDetail[0].chapter_list,
    }
    return response
}