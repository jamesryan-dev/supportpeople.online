import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

import sanityClient from '../lib/sanityClient'
import groq from 'groq'
import Causes from '../components/Causes'

const getAfganistan = groq`*[_type == 'afgan'] | order(title) {
  'type': buttonType,
  'title': title,
  'description': desc,
  'url': url,
  'donateUrl': donateUrl,
  
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 16px;
  }
`

const Desc = styled.p`
  padding: 4px 12px;
  font-weight: 400;
  display: inline-block;
  border-radius: 28px;
  opacity: 0.85;
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

  @media only screen and (max-width: 768px) {
    width: 100%;
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
  p {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    a {
      margin-left: 1rem;
      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  h3 {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    p {
      flex-direction: column;
      a {
        margin-left: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
`

const Afgan = ({ afganistan }) => {
  console.table('table sanity:', afganistan)
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const renderButtons = (l) => {
    if (l.type === 'petition' && l.donateUrl !== undefined) {
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
            <a className="button" href={l.donateUrl} target="_blank">
              + Make a Donation
            </a>
          )}
          {l.url && (
            <a className="button" href={l.url} target="_blank">
              View Info
            </a>
          )}
        </>
      )
    }
  }

  const renderRandomUrl = (afganistan) => {
    console.log('renderRandomUrl fired')
    if (typeof afganistan.donateUrl !== undefined) {
      let url = '';
      url = afganistan[getRandomInt(30)].donateUrl
      console.log('url:', url)
      return url
    }
  }

  return (
    <Layout pageTitle="#afganistan" childPage>
      <Head>
        <title>SUPPORTPEOPLE.ONLINE - #afganistan</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Alert className="alert">
        <p>Links sourced from the great work of:</p>
        <Names>
          <p>
            <a href="https://www.instagram.com/manillasen/">
              <h3>@manillasen</h3>
            </a>

            <a href="https://www.instagram.com/elsalik/">
              <h3>@elsalik</h3>
            </a>
            <a href="https://www.instagram.com/emilieadelinamonies/">
              <h3>@emilieadelinamonies</h3>
            </a>
            <a href="https://www.instagram.com/natashaalhariri/">
              <h3>@natashaalhariri</h3>
            </a>
            <a href="https://www.instagram.com/mursalpopalzaii/">
              <h3>@mursalpopalzaii</h3>
            </a>
          </p>
        </Names>

        <p>Faith Over Fear || Rise to Peace</p>

        <BubbleText />
      </Alert>

      <BtnRow className="blacklivesmatter">
        <CTA random-cta target="_blank" href={renderRandomUrl(afganistan)}>
          + Donate to a Randomly Selected Fund
        </CTA>
      </BtnRow>

      <FlexBox>
        {afganistan &&
          afganistan.map((l) => {
            return (
              <Outer className="afganistan-refugees">
                <Title>
                  <a href={l.url} target="_blank">
                    {l.title}
                  </a>
                  <Desc className="desc">{l.description}</Desc>
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

export default Afgan

export const getStaticProps = async () => {
  const afganistan = await sanityClient.fetch(getAfganistan)
  return {
    props: {
      afganistan,
    },
  }
}
