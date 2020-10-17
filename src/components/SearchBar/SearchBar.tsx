import { FC } from 'react'
import { useGlobalContext } from '../../store/Global'
import { fetchMoreCards } from '../../utils/fetchMoreCards'

export const SearchBar: FC = () => {
    const { state, dispatch } = useGlobalContext()
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        dispatch({
            type: 'UPDATE_VALUE', payload: {
                submitted: true,
                cards: [],
                nextPageUrl: ''
            }
        })

        await fetchMoreCards(state, dispatch)
    }
    const handleSearchTermField = (e) => {
        e.preventDefault()

        dispatch({
            type: 'UPDATE_VALUE', payload: {
                searchTerm: e.target.value
            }
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchbar">
                Search
                <input type="text" id="searchbar" aria-label="Search" placeholder="Search by Name" onChange={handleSearchTermField} value={state.searchTerm} />
                <input aria-label="Search" type="submit" value="submit"/>
            </label>
        </form>
    )
}

export default SearchBar