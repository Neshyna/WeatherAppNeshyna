import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 80px;
  filter: blur(17.8px);
  color: white;
  gap: 10px;
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