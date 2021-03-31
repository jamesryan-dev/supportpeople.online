import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

import sanityClient from '../lib/sanityClient'
import groq from 'groq'
import Causes from '../components/Causes'

const getMyanmar = groq`*[_type == 'myanmar'] | order(title) {
  'title': title,
  'description': description,
  'url': url,
  'donateUrl': donateUrl,
  'type': type
}`

// import PropTypes from 'prop-types'
import styled from 'styled-components'
import BubbleText from '../components/BubbleText'

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
    opacity: 0.3;
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
    opacity: 0.3;
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

const CTA = styled.a`
  padding: 1rem;
  border: 1px solid black;
  text-decoration: none;
  background: black;
  margin-right: 0.25rem;
  &:link,
  &:visited {
    color: white !important;
    border: 1px solid #eee;
  }
  &:hover {
    background: #888;
    border: 1px solid black;
    transition: all 0.2s;
    color: black !important;
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

  li {
    margin-bottom: 6px;
  }

  padding-bottom: 20px;

  .small {
    font-size: 80%;
  }
`

const Names = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  h2 {
    margin-left: 1rem;
    &:first-of-type {
      margin-left: 0;
    }
  }
`

const Myanmar = ({ myanmar }) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const renderButtons = (l) => {
    if (l.type === 'petition') {
      return (
        <>
          {l.url && (
            <a className="button" href={l.url} target="_blank">
              View Info
            </a>
          )}
          {l.donateUrl && (
            <a className="button" href={l.donateUrl} target="_blank">
              + Make a Donation
            </a>
          )}
        </>
      )
    } else {
      return (
        <>
          {l.url && (
            <a className="button" href={l.url} target="_blank">
              Sign Petition
            </a>
          )}
        </>
      )
    }
  }

  return (
    <Layout pageTitle="#JUSTICEFORMYANMAR" childPage>
      <Head>
        <title>SUPPORTPEOPLE.ONLINE - #JUSTICEFORMYANMAR</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Alert className="alert">
        <p>
          Myanmar is home to 135 ethnic groups. In recent years, the country has
          experienced rapid change. A liberalisation process, which began in
          2010, has seen more than 40 years of military rule give way to
          democracy. The coup has changed this.
        </p>
        <p>
          For speaking out against the brutal, extreme military who have
          overthrown the government. Thousands have been imprisoned including
          elected leader Aung San Suu Kyi.
        </p>
        <p>
          On 1 February 2021, the Myanmar military staged a coup d'état by
          detaining members of the country’s democratically elected ruling
          party. A resistance movement is fighting to restore democracy to
          Myanmar.
        </p>

        <p>
          The military is trying to stifle the people’s voices by shutting down
          the internet - a clear violation of the right to freedom of
          expression. But Myanmar people will not be silenced.
        </p>

        <BubbleText />
      </Alert>

      <BtnRow className="blacklivesmatter">
        <CTA target="_blank" href={myanmar[getRandomInt(20)].donateUrl}>
          Random Fund
        </CTA>
      </BtnRow>

      <FlexBox>
        {myanmar &&
          myanmar.map((l) => {
            return (
              <Outer className="myanmar">
                <Title>
                  <a href={l.url} target="_blank">
                    {l.title}
                  </a>
                </Title>
                <Info>{renderButtons(l)}</Info>
              </Outer>
            )
          })}
      </FlexBox>
      <Causes />
    </Layout>
  )
}

export default Myanmar

export const getStaticProps = async () => {
  const myanmar = await sanityClient.fetch(getMyanmar)
  return {
    props: {
      myanmar,
    },
  }
}
