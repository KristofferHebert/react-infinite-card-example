import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout'));
const SearchBar = dynamic(() => import('../components/SearchBar'));
const CardList = dynamic(() => import('../components/CardList'));

import styles from '../styles/Home.module.css'

export const Home = () => {
  return (
    <Layout title="React Infinite Card Example">
      <SearchBar />
      <CardList />
    </Layout>
  )
}

export default Home