import styled from 'styled-components'

export const H1 = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.h1};
    font-size: ${({ theme }) => theme.fontSize.h1};
    padding: ${({ theme }) => theme.padding.h1};
`