import styled from 'styled-components'
import Link from 'next/link'

const CausesWrapper = styled.div`
.cause {
    width: 48%;
    padding: 0 1em;
    margin-bottom: 1em;
    //  padding-left: 0;
    transition: all 0.4s ease;
    position: relative;
    text-decoration: none;
    color: white;
    h3 {
      color: white;
      text-decoration: none;
    }
    &:after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: black;
      display: block;
      z-index: -1;
      opacity: 0.8;
    }
    &:hover {
      padding-left: 1.3em;
      &:after {
        opacity: 1;
      }
    }
`

const CausesComp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    .cause {
      width: 100%;
      margin-bottom: 16px;
    }
  }
`

const TitleLine = styled.h2`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  line-height: 60px;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    bottom: 0;
    height: 1px;
    background: black;
  }
`

const BtnRow = styled.div`
  display: block;
  margin: 2rem 0 2rem;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    .cause {
      width: 100%;
      margin-bottom: 16px;
    }
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

const randomCTA = styled(CTA)`
  border: 2px solid red;
  &:hover {
    background: blue;
  }
`

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

function Causes(props) {
  const {} = props

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const getRandomPageButton = () => {
    let num = getRandomInt(6)
    console.log('num', num)
    if (num === 0) {
      return (
        <Link href="/blacklivesmatter">
          <a className="cause">
            <h3> Black Lives Matter</h3>
          </a>
        </Link>
      )
    } else if (num === 1) {
      return (
        <Link href="/blacklivesmatter">
          <a className="cause">
            <h3> Black Lives Matter</h3>
          </a>
        </Link>
      )
    } else if (num === 2) {
      return (
        <Link href="/endsars">
          <a className="cause">
            <h3>End Sars</h3>
          </a>
        </Link>
      )
    } else if (num === 3) {
      return (
        <Link href="/helpyemen">
          <a className="cause">
            <h3>Help Yemen</h3>
          </a>
        </Link>
      )
    } else if (num === 4) {
      return (
        <Link href="/stopasianhate">
          <a className="cause">
            <h3>Stop Asian Hate</h3>
          </a>
        </Link>
      )
    } else if (num === 5) {
      return (
        <Link href="/endviolenceagainstwomen">
          <a className="cause">
            <h3>End Violence Against Women</h3>
          </a>
        </Link>
      )
    } else if (num === 6) {
      return (
        <Link href="/myanmar">
          <a className="cause">
            <h3>Justice for Myanmar</h3>
          </a>
        </Link>
      )
    }
  }

  return (
    <CausesWrapper>
      <TitleLine>Causes to support</TitleLine>
      <CausesComp>
        <Link href="/blacklivesmatter">
          <a className="cause blm">
            <h3>Black Lives Matter</h3>
          </a>
        </Link>
        <Link href="/yemen">
          <a className="cause yemen">
            <h3>Help Yemen</h3>
          </a>
        </Link>
        <Link href="/endsars">
          <a className="cause endsars">
            <h3>End Sars</h3>
          </a>
        </Link>
        <Link href="/stopasianhate">
          <a className="cause stopasianhate">
            <h3>Stop Asian Hate</h3>
          </a>
        </Link>
        <Link href="/endviolenceagainstwomen">
          <a className="cause endviolenceagainstwomen">
            <h3>End Violence Against Women</h3>
          </a>
        </Link>
        <Link href="/myanmar">
          <a className="cause myanmar">
            <h3>Justice for Myanmar</h3>
          </a>
        </Link>
      </CausesComp>

      <TitleLine>Randomly Selected Cause</TitleLine>
      <BtnRow className="blacklivesmatter">{getRandomPageButton()}</BtnRow>
    </CausesWrapper>
  )
}

export default Causes
