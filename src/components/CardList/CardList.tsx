import { FC, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import shortid from "shortid";
import { useRouter } from "next/router";

import { useGlobalContext } from "stores/Global";
import { CardItem, CardItemProps } from "../CardItem";
import { SearchResults } from "../SearchResults";
import { ScrollToTop } from "../ScrollToTop";
import { fetchMoreCards } from "utils/fetchMoreCards";
import { Loading } from "components/Loading";

const CardList: FC = () => {
  const { state, dispatch } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    fetchMoreCards(router, state, dispatch);
  }, [router, router.query.search]);

  return (
    <section className="cardList">
      {state.isLoading && <Loading />}
      {router.query.search && <SearchResults />}
      {state.cards.length !== 0 && (
        <div className="container mt-5 pt-5">
          <InfiniteScroll
            dataLength={state.cards.length}
            next={() => fetchMoreCards(router, state, dispatch)}
            hasMore={true}
            loader={<div />}
            className="grid grid-cols-4 gap-3 auto-cols-max"
          >
            {state.cards.map((card: CardItemProps) => (
              <div key={shortid()}>
                <CardItem
                  name={card.name}
                  imageUrl={card.imageUrl}
                  text={card.text}
                  type={card.type}
                  set={card.set}
                />
              </div>
            ))}
          </InfiniteScroll>
          {state.cards.length > 10 && <ScrollToTop />}
        </div>
      )}
    </section>
  );
};

export default CardList;
