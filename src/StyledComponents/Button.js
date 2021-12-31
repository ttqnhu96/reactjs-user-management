import styled from 'styled-components'
//----------------button-------------------
export const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${props => props.theme.btnColor};
    color: ${props => props.theme.color};
    margin-top: 25px;
    margin-right: 15px;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    padding: 4px 20px 0;
    text-align: center;
    text-vertical-align: center;
    transition: all .5s;
    height: calc(1.5em + .75rem + 8px);
    width: 100px;
    cursor: pointer;
    &:hover:enabled {
        color: ${props => props.theme.hoverTextColor};
        background-color:${props => props.theme.hoverBgColor};
    };
    &:disabled {
        cursor:auto;
        color: ${props => props.theme.color};
    }
`;