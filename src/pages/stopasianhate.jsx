import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

import sanityClient from '../lib/sanityClient'
import groq from 'groq'
import Causes from '../components/Causes'

const getStopAsianHate = groq`*[_type == 'stopasianhate'] | order(title) {
  'title': title,
  'description': description,
  'url': url,
  'donateUrl': donateUrl
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

const StopAsianHate = ({ stopasianhate }) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  console.log('stopasianhate,', stopasianhate)
  return (
    <Layout pageTitle="#STOPASIANHATE" childPage>
      <Head>
        <title>SUPPORTPEOPLE.ONLINE - #stopasianhate</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Alert className="alert">
        <Names>
          <h2>Delaina Ashley Yaun</h2>
          <h2>Xiaojie Tan</h2>
          <h2>Daoyou Feng</h2>
          <h2>Paul Andre Michels</h2>
        </Names>
        <span>We are still waiting on four names.</span>

        <p>
          Far too long Asian women have been dehumanized and fetishized by the
          media. This can be traced from a violent history of colonization.
        </p>
        <p>
          Anti-Asian hate crimes have spiked by nearly 150%. Since Asian women
          have been historically treated as less-than-human in the past, it may
          make it easier for perpetrators to believe that their deranged actions
          are somehow justified. This needs to stop.
        </p>
        <p>
          Acknowledge their pain. 6 women should not have had to die for us to
          have this conversation. Hold your peers accountable.
        </p>
        <BubbleText />
      </Alert>

      <BtnRow className="blacklivesmatter">
        <CTA target="_blank" href={stopasianhate[getRandomInt(4)].donateUrl}>
          Random Fund
        </CTA>
      </BtnRow>

      <FlexBox>
        {stopasianhate &&
          stopasianhate.map((l) => {
            return (
              <Outer className="stopasianhate">
                <Title>
                  <a href={l.url} target="_blank">
                    {l.title}
                  </a>
                </Title>
                <Info>
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
                </Info>
              </Outer>
            )
          })}
      </FlexBox>
      <Causes />
    </Layout>
  )
}

export default StopAsianHate

export const getStaticProps = async () => {
  const stopasianhate = await sanityClient.fetch(getStopAsianHate)
  return {
    props: {
      stopasianhate,
    },
  }
}
