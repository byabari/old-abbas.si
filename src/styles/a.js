import styled from 'styled-components'

export const A = styled.a`
    font-weight: ${({ theme }) => theme.fontWeight.a};
    font-size: ${({ theme }) => theme.fontSize.a};
    padding: 20px;
    margin: 5px;
    text-decoration: none;
    color: white;
    border-radius: 35px;
    &:hover{
        background-color: #1636c7;
    }
    &:active{
        background-color: #4564f5;
    }
`