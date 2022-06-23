import React from 'react';
import {SubTitleText, TitleText, TitleSection} from "./TitleStyles";

const Title = () => {
    return (
        <TitleSection>
            <TitleText>
                Portfolio
            </TitleText>
            <SubTitleText>
                Agency provides a full service range including technical skills, design, business understanding.
            </SubTitleText>
        </TitleSection>
    );
};

export default Title;