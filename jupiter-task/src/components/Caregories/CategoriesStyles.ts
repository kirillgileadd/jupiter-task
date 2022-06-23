import styled from "styled-components";
import React from "react";


interface CategoryItemProps {
    active?: boolean;
}

export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  color: #9F8D83;
  width: 563px;
  @media (max-width: 1040px) {
    display: none;
  }

`
export const CategoryItem = styled.li<CategoryItemProps>`
  list-style-type: none;
  color: ${props => props.active ? '#16cd53' : "rgba(57,20,0,0.64 )"};
  cursor: pointer;
`