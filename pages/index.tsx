import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <>
    <h1>pre-rendering page</h1>
    <Link href='./users'>
     <a>Users</a>
    </Link>
    <Link href='./posts'>
        post
    </Link>
    </>
   
  )
}

export default Home
