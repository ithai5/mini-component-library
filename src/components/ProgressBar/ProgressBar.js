/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({value, size}) => {
    const height = size === "large" ? 24 :   size === "medium" ? 12 : 8
    return <Wrapper max={100} size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0"
                    aria-valuemax="100">
        <BarWrapper>
            <ProgressBarValue value={value}  style={{ "--height": `${height}px` }} size={size}/>
        </BarWrapper>
    </Wrapper>
};

export default ProgressBar;

const BarWrapper = styled.div`
    border-radius: inherit;
    overflow: hidden;
`

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px;
    padding: ${props => props.size === "large" ? "4" : '0'}px;
   
`

const ProgressBarValue = styled.div`
    background-color: ${COLORS.primary};
    width: ${props => props.value}%;
    height: var(--height);
    border-radius: 4px 0 0 4px;
`