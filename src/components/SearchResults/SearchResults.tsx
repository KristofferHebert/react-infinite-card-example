import { FC } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "stores/Global";

export const SearchResults: FC = () => {
  const { state } = useGlobalContext();
  const router = useRouter();

  return (
    <section className="container">
      {!state.isLoading && (
        <p className="text-3xl text-white mt-3 mb-3 text-center">
          Found {state.count} results for{" "}
          <em>
            <b>{router.query.search}</b>
          </em>
          .
        </p>
      )}
    </section>
  );
};

export default SearchResults;
