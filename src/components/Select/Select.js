import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../constants';

import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect
                id="select"
                value={value}
                onChange={onChange}
                label={label}
            >
                {children}
            </NativeSelect>
            <PresentationalBit>
                {displayedValue}
                <IconWrapper>
                    <Icon id="chevron-down"/>
                </IconWrapper>
            </PresentationalBit>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
    color: ${COLORS.gray700};
  :hover {
      color: ${COLORS.black};
  }
`

const NativeSelect = styled.select`
    //hide the elemeent while keeping the inteaction available
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  appearance: none;
  border: none;
  color: transparent;
  cursor: pointer;
  border-radius: 8px;
`

const PresentationalBit = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  cursor: pointer; 

`

const IconWrapper = styled.div`
  margin-left: auto;
`

export default Select;
