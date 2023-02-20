import React from 'react'
import styled from 'styled-components'

const StyledCountBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        opacity: 0.65;
        font-size: small;
        font-weight: 500;
    }
`

const CountBox = ({ title, value }) => {
    return (
        <StyledCountBox>
            <h4>{value}</h4>
            <p>{title}</p>
        </StyledCountBox>
    )
}

export default CountBox