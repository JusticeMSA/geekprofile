import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/theme'

export default function Footer() {
    return (
        <FooterContainer>Created using <span> Reactjs ,</span><span>GitHubAPI ,</span><span>Chartjs </span>and more..</FooterContainer>
    )
}
const FooterContainer = styled.div`
    font-size: 0.9rem;
    color: ${colors.lightGrey};
    display: flex;
    justify-content: center;
    gap: 10px;
    position: absolute;
    bottom: 15px;

    span{
        color: ${colors.purple};
    }
`