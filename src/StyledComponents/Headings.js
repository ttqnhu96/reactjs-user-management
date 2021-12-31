import styled from 'styled-components';

export const Heading1 = styled.h1`
    padding: 15px;
    margin-top:0;
    font-size:4rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.headingColor}}
`

export const Heading2 = styled.h2`
    padding: 15px;
    margin-top:0;
    font-size:3rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.headingColor}}
`

export const Heading3 = styled.h3`
    font-family: 'Poppins', sans-serif;
    padding: 15px;
    margin-top:0;
    font-size:2rem;
    font-weight:700;
    line-height:1.2;
    color: ${props => {return props.theme.headingColor}}
`

export const Heading4 = styled.h4`
    font-family: 'Poppins', sans-serif;
    padding: 15px;
    margin-top:0;
    font-size:1rem;
    font-weight:600;
    line-height:1.2;
    color: ${props => {return props.theme.headingColor}};
    background-color: ${props => {return props.theme.bgColor}}
    
`

export const Heading5 = styled.h5`
    padding: 15px;
    margin-top:0;
    font-size:0.5rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.headingColor}};
    background-color: ${props => {return props.theme.bgColor}}

`

