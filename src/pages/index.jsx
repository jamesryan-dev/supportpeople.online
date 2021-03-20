import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

import sanityClient from '@sanity/client'
import groq from 'groq'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import BubbleText from '../components/BubbleText'
const client = sanityClient({
  projectId: '7yu0uea0',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
})

import Causes from '../components/Causes'

const getAllCategories = groq`*[_type == 'category'] | order(title) {
  'title': title,
  'description': description,
  'links': links[]->{
    title,
    url,
    donateUrl
  },
}`

const Title = styled.div`
  font-size: 1.6rem;
  padding-bottom: 1rem;
  a:link,
  a:visited {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #888;
  }
  a:hover {
    opacity: 0.7;
  }
`

const Outer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (min-width: 840px) {
    width: 50%;
  }
`

const Info = styled.div`
  a {
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  a:link,
  a:visited {
    color: white;
    text-decoration: none;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  a:hover {
    border: 1px solid #fff;
    background: transparent;
    color: #111;
    opacity: 0.8;
  }
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const BoxHalf = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 0.4rem;
    opacity: 0.7;
  }
  p {
    font-size: 1.4rem;
    opacity: 0.5;
    margin: 0;
  }
`

const BtnRow = styled.div`
  display: block;
  margin: 2rem 0 2rem;
`

const Alert = styled.div`
  background: #fff;
  color: #111;
  padding: 0.2rem 0.8rem;
  margin-top: 1rem;
  border: 1px solid #111;
  @media (min-width: 640px) {
    margin-top: 2rem;
  }
`

const Bubble = styled.div`
  border-radius: 17px;
  padding: 2px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin-bottom: 16px;
  transition: all 0.4s ease;
  p {
    margin: 0;
    padding: 0;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: 12px;
    g {
      fill: white;
    }
  }
`

const LandingPage = ({ categories }) => {
  // console.log(categories)
  const navItems = [
    {
      name: 'Bail Funds',
      link: '#Bail%20Funds',
    },
    {
      name: 'Protestor Resources',
      link: '#Protestor%20Resources',
    },
    {
      name: 'Help for Black-Owned Businesses',
      link: '#Help%20for%20Black%20Businesses',
    },
    {
      name: 'Donations',
      link: '#Donations',
    },
  ]

  return (
    <Layout navigation={navItems} pageTitle="SUPPORT, LEARN, SHARE">
      <Head>
        <title>SUPPORTPEOPLE.ONLINE</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>

      <Alert className="alert">
        <p>
          Initially spurred on by the BlackLivesMatter movement we created
          supportpeople.online in an attempt to collate and collect resources
        </p>
        <p>
          With a wave of support online for those who are suffering we hope this
          place can extend and support those who need it most.
        </p>
        <p>
          Always eager to adapt, learn and develop please use the contact from
          below via 'Let us know' to inform us of any further information you
          might feel appropriate
        </p>
        <p>
          We’ve collated links to bail funds and GoFundMe campaigns, so you can
          use your one Instagram link to support multiple causes
        </p>
        <BubbleText />
      </Alert>

      <p>
        Are we missing anything?{' '}
        <a target="_blank" href="https://forms.gle/JKmAZTAh4am5Dawy7">
          Let us know
        </a>{' '}
      </p>

      <Causes />
    </Layout>
  )
}

export default LandingPage

// export const getStaticProps = async () => {
//   const categories = await sanityClient.fetch(getAllCategories)
//   return {
//     props: {
//       categories,
//     },
//   }
// }
