import styled, { keyframes } from 'styled-components'

// const LoadingContainer = styled.div`
//   border: 4px solid rgba(0, 0, 0, 0.1);
//   border-top: 4px solid #3498db;
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   animation: ${spin} 1.2s linear infinite;
// `

const load = keyframes`
  0% {
    left: -100px;
  }
  100% {
    left: 220px;
  }
`

const LogoImage = styled.img`
  width: 50rem;
  height: 30rem;
`

const Content = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`
const Section = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Wrapper = styled.div`
  margin-top: 20rem;
`
const Loader = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  border-bottom: 1px solid #303030;
  background: #151515;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1;
`
const Inner = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: -100px;
  width: auto;
  height: 78px;
  color: #ee533f;
  text-align: center;
  text-shadow: 0 0 20px #ee533f;
  font-size: 50px;
  z-index: 2;
  animation: ${load} 2s infinite linear;
`

const Loading = () => (
  <>
    <Content>
      {/* <LoadingContainer></LoadingContainer> */}
      <Section>
        <LogoImage src="/img/logoorbi.png" alt="Logo Orbi" />

        <Wrapper>
          <Loader>
            <Inner>●●●</Inner>
          </Loader>
        </Wrapper>
      </Section>
    </Content>
  </>
)

export default Loading
