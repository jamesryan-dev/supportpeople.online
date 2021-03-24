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
          <strong>Violence against women and girls</strong> is rooted in
          gender-based discrimination, social norms that accept violence, and
          gender stereotypes that continue cycles of violence. To date, efforts
          to eliminate violence against women and girls have mainly focused on
          responding to and providing services for survivors of violence.
          However, prevention—addressing the structural causes, as well as the
          risk and protective factors, associated with violence—is pivotal to
          eliminating violence against women and girls completely.
        </p>
        <p>
          Since March 2020, with the beginning of lockdowns, domestic abuse
          cases have skyrocketed, and last year, 1.6 million women experienced
          domestic violence in the UK. Three people a week are now killed by a
          partner, ex-partner or family member in the UK. This type of abuse can
          affect anyone, regardless of ages, gender or social background, and
          the affects can be devastating.
        </p>
        <p>
          We know that survivors require routes therapeutic services, economic
          stability, and a safety net to fall back on. Yet government funding
          for women’s support services is continually being cut, and it is
          falling on charities to support these women.
        </p>
        <p>
          Prevention is the only way to stop violence before it even occurs. It
          requires political commitment, implementing laws that promote gender
          equality, investing in women’s organizations, and addressing the
          multiple forms of discrimination women face daily.
        </p>

        <BubbleText />
      </Alert>

      <Alert>
        <h2>What YOU can do NOW to prevent violence against women</h2>
        <p>
          While both men and women can be victims of violence, violence against
          women, often at the hands of men, is a unique category of violence
          that relies on the historical and current unequal balance of power
          between men and women, boys and girls. Violence against women is the
          crucial element that reinforces men’s power and control over women
          throughout the world. On some level, most of us participate in the
          culture that supports and encourages violence against women and girls,
          in both small ways (calling them a ‘girl’ as an insult) to large ways
          (beating and raping women and girls). Here are some small and big ways
          we can work to end it, or at least interrupt it, every single day.
        </p>
        <p>For everyone:</p>
        <ul>
          <li>
            Educate yourself on violence against women; learn the facts and the
            prevalence
          </li>
          <li>Believe survivors</li>
          <li>
            Contact your local legislators and political leaders and advocate
            for tougher laws against perpetrators of violence against women
          </li>
          <li>
            Know that dating violence & sexual assault affects 1 in 3 girls and
            1 in 6 boys by the time they are 18
          </li>
          <li>
            Contact your local school board and ask them to address sexual
            harassment in schools
          </li>
          <li>Speak out against all forms of violence</li>
          <li>Question gender roles and assumptions</li>
          <li>Respect and embrace diversity</li>
          <li>Respect a person’s (even a child’s) right to say no</li>
          <li>
            Don’t blame victims, and reinforce that sexual violence is never the
            victim’s fault
          </li>
          <li>Speak out against the media’s portrayal of violence</li>
          <li>Learn how racism, sexism and homophobia are connected</li>
          <li>Acknowledge that it does happen in your own community</li>
          <li>Learn about power and control tactics</li>
          <li>Attend Take Back the Night events</li>
          <li>
            Ask permission before pursuing physical or sexual contact with
            someone
          </li>
          <li>
            Realize that sexual violence is about power and control, not sex
          </li>
          <li>
            Teach kids that respect is the minimum in a relationship, and lead
            by example
          </li>
          <li>Advocate for survivor’s rights</li>
          <li>
            If you are religious, ask your priest, rabbi, pastor, cleric, or
            spiritual leader to hold a special service to raise awareness and
            promote safety for victims and accountability for perpetrators.
          </li>
          <li>
            Avoid engaging in, supporting or encouraging sexual harassment by
            speaking up when you see or hear it
          </li>
          <li>Teach kids that violence will not solve problems</li>
          <li>
            Know that most sex offenders aren’t strangers: 86% are known to
            their victim
          </li>
          <li>
            Avoid making threats or using coercion and pressure to get sex
          </li>
          <li>
            Be courageous; don’t be afraid to speak up for those who have lost
            their voice or dignity
          </li>
          <li>
            Praise women and girls for something other than the way they look
          </li>
          <li>Speak out against racist, sexist or homophobic jokes</li>
          <li>Advocate for more youth violence prevention programs</li>
          <li>Get others to speak out against sexual violence</li>
          <li>
            Stop your sexual advances if the other person says no and encourage
            others to do the same
          </li>
          <li>Applaud others who speak out against violence and oppression</li>
          <li>
            Stop yourself or others from taking advantage of someone who is
            intoxicated
          </li>
          <li>
            Make a decision to become an active bystander by speaking up and
            calling for help when necessary
          </li>
          <li>Respect the choices victims and survivors make to survive</li>
          <li>Empathize</li>
          <li>Think globally and act locally</li>
          <li>
            Hold perpetrators accountable for disrespecting their partners when
            you see it or hear it
          </li>
          <li>Engage others in discussions about violence against women</li>
          <li>
            Learn about healthy boundaries and don’t be afraid to voice your
            feelings in your relationship
          </li>
          <li>Notice when someone invades your boundaries</li>
          <li>
            Report it if you witness sexual harassment in your school or
            workplace
          </li>
          <li>
            Post awareness materials in restrooms and break rooms for easy &
            confidential accessibility
          </li>
          <li>
            Celebrate all aspects of masculinity, including compassion and
            sensitivity
          </li>
        </ul>
        <p>For men:</p>
        <ul>
          <li>
            Choose your words carefully and respectfully when speaking of women
            in your life
          </li>
          <li>
            Show your strength by speaking up to men who are using their
            strength for hurting
          </li>
          <li>
            Understand that it takes more than just not being a batterer or a
            rapist to be a good guy
          </li>
          <li>Treat all women and girls with respect</li>
          <li>Don’t patronize sex workers or strip clubs</li>
          <li>Ask, don’t assume you know what your partner wants</li>
          <li>
            Refuse to coerce or manipulate your partner in order to get your
            way; be willing to compromise
          </li>
          <li>Orgs and resources to support/get involved with/engage with</li>
        </ul>
        <p>For boys/men:</p>
        <ul>
          <li>
            Men Can Stop Rape:{' '}
            <a href="https://mcsr.org/home" target="_blank">
              https://mcsr.org/home
            </a>
          </li>
          <li>
            Big Talk Education:{' '}
            <a
              href="https://www.bigtalkeducation.co.uk/bigtalk-education/"
              target="_blank"
            >
              https://www.bigtalkeducation.co.uk/bigtalk-education
            </a>
          </li>
          <li>
            Chris Hemmings{' '}
            <a href="https://www.chris-hemmings.com/writing" target="_blank">
              https://www.chris-hemmings.com/writing
            </a>
          </li>
        </ul>
        <p>For everyone:</p>
        <ul>
          <li>
            <a href="https://www.solacewomensaid.org/" target="_blank">
              https://www.solacewomensaid.org/
            </a>
          </li>
          <li>
            <a href="https://www.refuge.org.uk/" target="_blank">
              https://www.refuge.org.uk/
            </a>
          </li>
          <li>
            <a href="https://www.nationaldahelpline.org.uk/" target="_blank">
              https://www.nationaldahelpline.org.uk/
            </a>
          </li>
        </ul>
        <p className="small">
          Words by{' '}
          <a href="https://instagram.com/meme_meupsoftboi" target="_blank">
            {' '}
            meme_meupsoftboi
          </a>
        </p>
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
