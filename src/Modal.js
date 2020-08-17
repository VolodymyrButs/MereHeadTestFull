import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>
}
