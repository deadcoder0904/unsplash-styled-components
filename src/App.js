import React, { useState } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import { ReactComponent as MoonSVG } from './assets/logos/moon.svg'
import { ReactComponent as SearchSVG } from './assets/logos/search.svg'
import { ReactComponent as SunSVG } from './assets/logos/sun.svg'
import { ReactComponent as UnsplashLogoSVG } from './assets/logos/unsplash-logo.svg'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyle } from './components/Global'
import { Pic } from './components/Pic'
import { pics } from './utils/pics'
import { themes } from './utils/themes'

const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  box-sizing: border-box;
  height: 8.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: fixed;
  width: 100%;
  z-index: 2;
`

const UnsplashLogo = styled(UnsplashLogoSVG)`
  fill: ${props => props.theme.color};
  width: 4rem;
  height: 4rem;
  backface-visibility: hidden;
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: middle;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.color};
`

const Subtitle = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.searchBgColor};
  border-radius: 3rem;
  border: 0.05rem solid #cbd2d9;
  margin-left: 7rem;
  box-shadow: none;
  :hover {
    border: 0.12rem solid #cbd2d9;
  }
`

const SearchIcon = styled(SearchSVG)`
  fill: #9aa5b1;
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 1.2rem;
  margin-right: 1rem;
`

const SearchBar = styled.input`
  outline: none;
  border: none;
  width: 50rem;
  padding: 1rem 0;
  color: ${props => props.theme.categoryHoverColor};
  background: transparent;
  font-size: 1.4rem;
  font-weight: 300;
`

const ThemeIcon = css`
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  cursor: pointer;
`

const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon}
`

const SunIcon = styled(SunSVG)`
  ${ThemeIcon}
`

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Grid = styled.div`
  padding-top: 8.2rem;
  padding-left: 23rem;
  display: grid;
  grid-template-columns: repeat(3, 38rem);
  margin-bottom: 1.5rem;
`

const App = () => {
  const [theme, setTheme] = useState(lightTheme())
  const setDarkTheme = () => setTheme(darkTheme())
  const setLightTheme = () => setTheme(lightTheme())
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Nav>
          <UnsplashLogo />
          <TitleWrapper>
            <Title>Unsplash</Title>
            <Subtitle>Photos for Everyone</Subtitle>
          </TitleWrapper>
          <SearchWrapper>
            <SearchIcon />
            <SearchBar placeholder="Search free high-resolution photos" />
          </SearchWrapper>
          {theme.type === 'light' && <MoonIcon onClick={setDarkTheme} />}
          {theme.type === 'dark' && <SunIcon onClick={setLightTheme} />}
        </Nav>
        <CategoriesList />
        <GridWrapper>
          <Grid>
            {pics.map((pic, i) => (
              <Pic src={pic} key={i} i={i} />
            ))}
          </Grid>
        </GridWrapper>
      </>
    </ThemeProvider>
  )
}

export default App
