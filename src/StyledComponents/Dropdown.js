import styled from 'styled-components';
import { Label } from './Label';

export const Select = styled.select`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: calc(1.5em + .75rem + 8px);
    padding: 4px 20px 0;
    font-size: 1rem;
    font-weight: 400;
    color:  ${props => props.theme.color};
    background-color: ${props => props.theme.textFieldBg};
    box-sizing: border-box;
    border: 0;
    border-radius: 12px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /* Adding transition effect */
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
    &:hover {
        color: ${props => props.theme.hoverTextColor};
        background-color: ${props=>props.theme.hoverBgColor};
        border-bottom-color: #DCDCDC;
    }
    &:focus {
        outline: none; 
    }
`




export const Dropdown = ({ label, ...props }) => {
    return <span>
        <Label>
            {label}
        </Label>
        <br/>
        <Select {...props} />
    </span>
}