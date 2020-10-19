import { fetchData } from "./fetchData";
import { config } from "config";
export const fetchMoreCards = async (router, state, dispatch) => {
  try {
    dispatch({ type: "UPDATE_VALUE", payload: { isLoading: true } });

    // Default to first page of card api
    let url = `${config.API_URL}/v1/cards?page=1&pageSize=${config.PAGE_SIZE}`;
    if (router.query.clear) {
      // use default if clear parameter is set
    } else if (state.nextPageURL !== "") {
      url = state.nextPageURL;
    } else if (router.query.search) {
      url += `&name=${router.query.search}`;
    }

    const response = await fetchData(url);

    const { cards, _links, _totalCount } = response.data;
    let newCards;

    // Clear card if query contains clear parameter
    // If next page of cards exist, append to existing array of cards
    if (_links && !router.query.clear) {
      // Modify array in place
      // Memory Optimized for large card arrays
      newCards = state.cards;
      newCards.push(...cards);
    } else {
      // Reset All cards if no _links and clear parameter
      newCards = cards;
    }

    let payload = {
      cards: newCards,
      count: _totalCount,
      nextPageURL: _links && _links.next ? _links.next : "",
      isLoading: false,
      searchTerm: router.query.clear ? "" : state.searchTerm,
      error: null,
    };

    dispatch({ type: "UPDATE_VALUE", payload });

    // Clear query without firing useEffect again
    if (router.query.clear) {
      router.push("/", undefined, { shallow: true });
    }
  } catch (error) {
    // TBD Add error message component to homepage
    console.error(error);
    dispatch({ type: "UPDATE_VALUE", payload: { error } });
  }
};

export default fetchMoreCards;
