import { fetchData } from './fetchData'
import { config } from '../config'
export const fetchMoreCards = async (state, dispatch) => {
    // Default to first page of card api
    let url = `${config.API_URL}/v1/cards?page=1&pageSize=${config.PAGE_SIZE}`

    // Handle searchTerm and submit if it exists
    if(state.submitted && state.searchTerm !== '') {
        url += `&name=${state.searchTerm}`

    } else if(state.nextPageUrl !== '') {
        url = state.nextPageUrl
    }
    
    console.log(url, state, 6)
    const response = await fetchData(url)

        const { cards, _links, _totalCount } = response.data
        let newCards

        if(state.submitted && state.searchTerm !== '') {
            newCards = cards
            // Reset submit 
            dispatch({ type: 'UPDATE_VALUE', payload: {
                submitted: false
            }})
        } else {
        // Modify array in place
        // Memory Optimized for large card arrays
        newCards = state.cards
        newCards.push(...cards)
        }

        let payload = {
            cards: newCards,
            count: _totalCount
        }

        if(_links && _links.next){
            payload.nextPageUrl = _links.next
        }

        dispatch({ type: 'UPDATE_VALUE', payload })



}

export default fetchMoreCards