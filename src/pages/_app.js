import React, { useState } from 'react'
import BaseApp, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/theme.js'
import { GlobalStyles } from '../components/global.js'
import styled from 'styled-components'
import DarkModeToggle from '../components/toggle/toggleMode'

const Background = styled.div``

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Background>
        <Container>
          <DarkModeToggle />

          <Component {...pageProps} key={router.route} />
        </Container>
      </Background>
    </ThemeProvider>
  )
}

export default MyApp
