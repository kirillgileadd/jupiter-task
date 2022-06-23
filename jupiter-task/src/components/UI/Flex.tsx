import React, {FC} from 'react';
import styled from "styled-components";
import {layout, space, SpaceProps, LayoutProps} from "styled-system";

interface StyleFlexProps {
    children: React.ReactNode
    direction?: string
    align?: string;
    justify?: string;
    grow?: number;
}

const StyleFlex = styled.div<StyleFlexProps & SpaceProps & LayoutProps>`
  ${space};
  ${layout};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-grow: ${props => props.grow || 0};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
`

const Flex: FC<StyleFlexProps & SpaceProps & LayoutProps> = ({children, ...props}) => {
    return <StyleFlex {...props}>{children}</StyleFlex>
};

export default Flex;