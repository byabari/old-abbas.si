import styled from 'styled-components'

export const P = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.p};
    font-size: ${({ theme }) => theme.fontSize.p};
    padding: ${({ theme }) => theme.padding.p};
`