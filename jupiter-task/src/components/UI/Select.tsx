import React, {Dispatch, FC, SetStateAction} from 'react';
import styled from "styled-components";

interface SelectProps {
    options: Array<any>;
    defaultValue: string;
    value?: string
    onChange: (catygory: string) => void
}

const SelectWrapper = styled.div`
  width: 100%;
`
const StyledSelect = styled.select`
  display: none;
  width: 100%;
  appearance: none;
  position: relative;
  background-color: #fff;
  outline: none;
  border-radius: 5px;
  border: 1px solid #f3d1bf;
  color: rgba(57, 20, 0, 0.64);
  font-size: 16px;
  padding: 17px;

  &::-ms-expand {
    display: none;
  }

  @media (max-width: 1040px) {
    display: block;
  }
`

const Select: FC<SelectProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <SelectWrapper>
            <StyledSelect
                value={value}
                onChange={event => onChange(event.target.value)}
            >


                <option value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                )}
            </StyledSelect>
        </SelectWrapper>
    );
};

export default Select;