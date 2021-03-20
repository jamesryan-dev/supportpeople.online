import styled from 'styled-components'

const CausesComp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
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

function Causes(props) {
  const {} = props
  return (
    <>
      <TitleLine>Causes to support</TitleLine>
      <CausesComp>
        <a className="cause blm" href="/blacklivesmatter">
          <h3>Black Lives Matter</h3>
        </a>

        <a className="cause yemen" href="/yemen">
          <h3>Help Yemen</h3>
        </a>

        <a className="cause endsars" href="/endsars">
          <h3>End Sars</h3>
        </a>
      </CausesComp>
    </>
  )
}

export default Causes
