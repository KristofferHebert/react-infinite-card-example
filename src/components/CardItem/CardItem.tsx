import { memo, FC } from "react";

export interface CardItemProps {
  name: string;
  imageUrl: string;
  text: string;
  type: string;
  set: {
    _self: string;
    id: string;
    name: string;
  };
}

export const CardItem: FC<CardItemProps> = ({
  name,
  imageUrl,
  text,
  type,
  set,
}) => (
  <div className="cardItem text-white border bg-black">
    <img src={imageUrl} alt={name} className="cardImage mx-auto" />
    <div className="pt-0 p-6">
      <h3 className="text-xl">{name}</h3>
      <p className="text-base mt-1 mb-3">{text}</p>

      <p>Type: {type}</p>
      <p>Set: {set.name}</p>
    </div>
  </div>
);

// React.memo is used because state does not change after initial render
export default memo(CardItem);
