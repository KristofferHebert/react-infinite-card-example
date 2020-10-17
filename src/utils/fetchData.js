import fetch from 'isomorphic-fetch'

export const fetchData = async (url) => {
    try {
        let response = await fetch(url)
        let statusCode = response.statusCode
        response = await response.json()
        
        return {
            message: 'success',
            statusCode,
            data: response
        }

    } catch (error) {
        return {
            message: 'Failed to fetch Data',
            error
        }
    }
}

export default fetchData