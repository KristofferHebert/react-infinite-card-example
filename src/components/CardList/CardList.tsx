import { FC, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useGlobalContext } from '../../store/Global'
import { CardItem, CardItemProps } from '../CardItem'
import { fetchMoreCards } from '../../utils/fetchMoreCards'

const CardList: FC = () => {

    const { state, dispatch } = useGlobalContext()

    useEffect(() => {
        fetchMoreCards(state, dispatch)
    }, [])

    return ( <div className="cardlist">
        <InfiniteScroll
            dataLength={state.cards.length}
            next={() => fetchMoreCards(state, dispatch)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            {state.cards.map(( card: CardItemProps ) => (
                <div key={card.name}>
                    <CardItem 
                        name={card.name} 
                        imageUrl={card.imageUrl} 
                        text={card.text} 
                        type={card.type} 
                        set={card.set} />
                </div>
            ))}
        </InfiniteScroll>
    </div> )
}

export default CardList