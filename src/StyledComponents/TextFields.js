import React from 'react';
import styled from 'styled-components';
import { Label } from './Label';

const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: calc(1.5em + .75rem + 8px);
    padding: 4px 20px 0;
    font-size: 1rem;
    font-weight: 400;
    color:  ${props => props.theme.color};
    background-color: ${props => props.theme.textFieldBg} !important;
    box-sizing: border-box;
    border: 0 !important;
    border-radius: 12px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill {
        transition: 5000s ease-in-out 0s;
    }
    &:hover {
        border: 1px solid ${props => props.theme.color};
    }
    &:focus {
        outline: none; 
        border: 1px solid ${props => props.theme.color} !important;
    }
  
`

export const TextField = ({ label, ...props }) => {
    return <span>
        <Label>
            {label}
        </Label>
        <br />
        <Input {...props} />
    </span>
}
