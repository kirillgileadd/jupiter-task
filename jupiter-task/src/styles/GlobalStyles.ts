import styled, {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  color: #fff;
  font-size: 16px;
  font-family: 'Epilogue', sans-serif;
  background-color: #FDF0E9;
}
`

interface ContainerProps {
    width?: string
}

export const Container = styled.div<ContainerProps>`
  max-width: ${props => props.width || '1200px'};
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
`