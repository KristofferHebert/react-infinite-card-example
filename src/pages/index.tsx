import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/Layout"));
const CardList = dynamic(() => import("components/CardList"));

export const Home = () => {
  return (
    <Layout title="React Infinite Card Example">
      <CardList />
    </Layout>
  );
};

export default Home;
