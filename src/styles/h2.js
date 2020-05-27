import styled from 'styled-components'

export const H2 = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.h2};
    font-size: ${({ theme }) => theme.fontSize.h2};
    padding: ${({ theme }) => theme.padding.h2};
`