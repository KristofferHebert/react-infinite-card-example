import { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import { useGlobalContext } from "stores/Global";
import { useRouter } from "next/router";
import { fetchMoreCards } from "utils/fetchMoreCards";

const Layout = dynamic(() => import("components/Layout"));
const CardList = dynamic(() => import("components/CardList"));

export const Home: FC = () => {
  const { state, dispatch } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    fetchMoreCards(router, state, dispatch);
    // Adding state and dispatch to useEffect will cause a infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Layout title="React Infinite Card Example">
      <CardList />
    </Layout>
  );
};

export default Home;
