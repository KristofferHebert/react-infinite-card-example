
import { memo, FC } from 'react'

export interface CardItemProps {
    name: string;
    imageUrl: string;
    text: string;
    type: string;
    set: {
        _self: string,
        id: string,
        name: string
    };
}

export const CardItem: FC<CardItemProps> = ({ name, imageUrl, text, type, set }) => (
    <div className="cardItem">
        <img src={imageUrl} alt={`Image of ${name}`} />
        <h3>{name}</h3>
        <p>{text}</p>

        <p>Type: {type}</p>
        <p>Set: {set.name}</p>

    </div>
)

// React.memo is used because state does not change after initial render
export default memo(CardItem)