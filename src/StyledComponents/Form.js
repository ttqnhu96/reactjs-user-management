import styled from 'styled-components';

export const Form = styled.form`
margin: 30px 0 0 0;
background-color: ${props => {return props.theme.bgColor}};
box-sizing: border-box;
padding: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`