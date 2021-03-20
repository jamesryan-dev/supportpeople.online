import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

import sanityClient from '../lib/sanityClient'
import groq from 'groq'
import Causes from '../components/Causes'

const getEndViolenceAgainstWomen = groq`*[_type == 'endviolenceagainstwomen'] | order(title) {
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

const EndViolenceAgainstWomen = ({ endviolenceagainstwomen }) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  console.log('stopasianhate,', endviolenceagainstwomen)
  return (
    <Layout pageTitle="#STOPASIANHATE" childPage>
      <Head>
        <title>SUPPORTPEOPLE.ONLINE - #endviolenceagainstwomen</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Alert className="alert">
        <p>
          <strong>One in three</strong> women worldwide experience physical or
          sexual violence, mostly by an intimate partner. Violence against women
          and girls is a human rights violation, and the immediate and long-term
          physical, sexual, and mental consequences for women and girls can be
          devastating, including death.
        </p>

        <p>
          Violence negatively affects women’s general well-being and prevents
          women from fully participating in society. It impacts their families,
          their community, and the country at large. It has tremendous costs,
          from greater strains on health care to legal expenses and losses in
          productivity.
        </p>
        <BubbleText />
      </Alert>

      <BtnRow className="blacklivesmatter">
        <CTA
          target="_blank"
          href={endviolenceagainstwomen[getRandomInt(7)].donateUrl}
        >
          Random Fund
        </CTA>
      </BtnRow>

      <FlexBox>
        {endviolenceagainstwomen &&
          endviolenceagainstwomen.map((l) => {
            return (
              <Outer className="endviolenceagainstwomen">
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

export default EndViolenceAgainstWomen

export const getStaticProps = async () => {
  const endviolenceagainstwomen = await sanityClient.fetch(
    getEndViolenceAgainstWomen
  )
  return {
    props: {
      endviolenceagainstwomen,
    },
  }
}
