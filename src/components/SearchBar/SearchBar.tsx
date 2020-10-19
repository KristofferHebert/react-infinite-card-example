import { FC } from "react";
import { useRouter } from "next/router";

import { useGlobalContext } from "stores/Global";

export const SearchBar: FC = () => {
  const { state, dispatch } = useGlobalContext();
  const handleSubmit = (router) => async (e) => {
    e.preventDefault();

    // Reset current cards and nextPageURL
    dispatch({
      type: "UPDATE_VALUE",
      payload: {
        cards: [],
        count: 0,
        nextPageURL: "",
      },
    });

    // Using a query makes card searches shareable and crawlable
    router.push(`/?search=${state.searchTerm}`);
  };

  // Pass search term input value to state
  const handleSearchTermFieldInput = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_VALUE",
      payload: {
        searchTerm: e.target.value,
      },
    });
  };

  const router = useRouter();

  return (
    <form onSubmit={handleSubmit(router)}>
      <div className="w-full relative">
        <label htmlFor="searchbar">
          <span className="hidden">Search</span>
          <input
            type="text"
            id="searchbar"
            aria-label="Search"
            placeholder="Search by Name"
            className="input focus:outline-none w-full"
            onChange={handleSearchTermFieldInput}
            value={state.searchTerm}
            min="1"
            max="25"
            required
          />
          <button type="submit" className="searchIcon">
            <img src="/images/search.svg" width="16" alt="search" />
          </button>
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
