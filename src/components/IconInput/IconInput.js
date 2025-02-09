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
  return <Wrapper style={{ "--width":`${width}px`, "--font-size": `${fontSize}rem` }}>
    <label htmlFor={label}>
    <IconWrapper>
    <Icon id={icon} size={fontSize*16}></Icon></IconWrapper>
    <Input type="text" name={label} placeholder={placeholder} style={{"--font-size":`${fontSize}rem`}} size={size}/></label>
  </Wrapper>
};

const Wrapper = styled.div`
  width: var(--width);
  font-size: var(--font-size);
  position:relative;
`

const Input = styled.input`
  width: 100%;/*var(--width);*/
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  font-size: var(--font-size);
  &[type="text"] {
    padding-left: ${props => (props.size === 'small' ? `18px` : '30px')};
    18px
  };
    font-size: var(--font-size);
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 2px;
  bottom: 0;
  left: 0;
`

export default IconInput;
