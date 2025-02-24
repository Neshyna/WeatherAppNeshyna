import { useNavigate } from "react-router-dom"

import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  Header,
  NavContainer,
  Main,
  StyledNavLink,
  Title
  } from "./styles"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <Title>Weather App</Title>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/history"
          >
            History
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
