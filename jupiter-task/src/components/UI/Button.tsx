import React, {FC} from 'react';
import styled from "styled-components";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    primary?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  padding: 18px 29px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  border: ${props => props.primary ? "none" : "1px solid rgba(255, 255, 255, 0.3)"} ;
  background-color: ${props => props.primary ? "#fff" : "transparent"};
  color: ${props => props.primary ? "#9F8D83" : "#fff"};
  box-shadow: ${props => props.primary ? "4px 4px 8px 0px rgba(34, 60, 80, 0.2)" : "none"}; 
`

const Button: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;