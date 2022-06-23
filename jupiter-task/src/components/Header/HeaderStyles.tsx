import styled from "styled-components";
import Flex from "../UI/Flex";

export const HeaderBackground = styled.div`
  background-color: #28293E;
`
export const HeaderContainer = styled.header`
  padding: 16px 0;
  display: flex;
  align-items: center;

  @media (max-width: 1040px) {
    justify-content: center;
    div {
      flex-grow: initial;
    }
  }
`
export const HeaderTitle = styled.header`
  font-size: 24px;
  margin-left: 15px;
  font-weight: 700;
`

export const NavBar = styled.nav`
  flex-grow: 5;
  
  @media (max-width: 1040px) {
    display: none;
  }
`

export const NavBarList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`
export const NavBarItem = styled.li`
  list-style-type: none;
`

export const ButtonWrapper = styled(Flex)`
  @media (max-width: 1040px) {
    display: none;
  }
`