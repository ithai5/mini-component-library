import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const fontSize = size === "small" ? 1 : 1.5
  return <Wrapper style={{"--font-size" :`${fontSize}rem` }}>
    <label htmlFor={label}>
    <IconWrapper>
    <Icon id={icon} size={fontSize*16}></Icon></IconWrapper>
    <Input type="text" name={label} placeholder={placeholder} style={{"--font-size":`${fontSize}rem` , "--width":`${width}px`}} size={size}/></label>
  </Wrapper>
};

const Wrapper = styled.label`
  display: inline-block;
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  position:relative;
  &:hover {
      color: ${COLORS.black};
  }
`

const Input = styled.input`
  //width: 100%;/*var(--width);*/
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  font-size: var(--font-size);
  width: var(--width);
  
  outline-offset: 2px;
  &[type="text"] {
    padding-left: ${props => (props.size === 'small' ? `18px` : '30px')};
    font-size: var(--font-size);
    font-weight: 700;
    };
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

/*    &::placeholder {
      color: ${COLORS.black};
      font-weight: 400;
    }*/
  }
`
const IconWrapper = styled.div`
  color: inherit;
  position: absolute;
  top: 2px;
  bottom: 0;
  left: 0;
  pointer-events: none;
`

export default IconInput;
