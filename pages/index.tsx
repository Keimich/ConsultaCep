import type { NextPage } from 'next'
import Head from 'next/head'
import React from "react"
import { GetServerSideProps } from 'next' 
import prisma from '../prisma/client'
React.useLayoutEffect = React.useEffect 
import { NavBar } from '../components/NavBar'
import { Infos } from '../components/Infos'
import { Input } from '../components/Input'
import { Result } from '../components/Result'

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const prisma = new PrismaClient();
  const result = await prisma.queries.count()
  
  return { props: {result} }
}

const Home: NextPage = (result) => {
  
  return (
    <>
      <Head>
        <title>Consulta CEP</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <NavBar/>
      <main>
        <div className="container">
          <Infos amount={Object.values(result)[0]}/>
          <Input/>
          <Result/>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Home
