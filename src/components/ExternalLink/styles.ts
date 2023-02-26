import styled from 'styled-components'

export const ExternalLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 160%;

  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`