import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";
import bgImage from '../assets/img.jpg';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 80px;
  color: white;
  gap: 10px;
  background-color:rgba(18, 45, 77, 0.42); 
 `;

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
  `;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;

export const Title = styled.div`
 text-decoration: none;
  font-size: 20px;
  color: white;
`