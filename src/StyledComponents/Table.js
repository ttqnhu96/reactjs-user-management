import styled from 'styled-components';


export const Table = styled.table`
    color: ${props => props.theme.tableTextColor};
    width: 100%;
    max-width: 100%;
    border-spacing: 2px;
    background: rgba(255, 255, 255, .3);
  
`
export const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    color: ${props => {return props.theme.bgColor}};

`

export const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`
export const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-top: 1px solid ${props => props.theme.borderColor} !important;
    border-bottom: 1px solid ${props => props.theme.borderColor} !important;

`
export const Td = styled.td`
    padding: .75rem;
    vertical-align: middle;
    border-top: 1px solid ${props => props.theme.borderColor} !important;
    border-bottom: 1px solid ${props => props.theme.borderColor} !important;
`


export const Th = styled.th`
    color: ${props => props.theme.bgColor};
    vertical-align: bottom;
    text-align: inherit;
    border-top: 2px solid ${props => props.theme.borderColor} !important;
    border-bottom: 2px solid ${props => props.theme.borderColor} !important;
    color: ${props => props.theme.headingColor};
    background-color: ${props => {return props.theme.bgColor}};
    opacity: 0.7;
    padding: .75rem;
    vertical-align: top;
`

