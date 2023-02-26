import { StyledPageCard } from '@/styles/components/PageCard'
import Markdown from 'react-markdown'
import styled from 'styled-components'

export const HeaderCard = styled(StyledPageCard)`
  flex-direction: column;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  & > h1 {
    font-size: 1.5rem;
    font-weight: 700;

    color: ${({ theme }) => theme.baseTitle};
    margin-bottom: 0.5rem;
  }
`

export const GoBack = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background: none;
  border: none;

  color: ${({ theme }) => theme.primary};

  cursor: pointer;

  & > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`

export const MarkdownWrapper = styled(Markdown)`
  color: ${({ theme }) => theme.baseText};

  p {
    margin-bottom: 2rem;
  }

  a {
    color: ${({ theme }) => theme.primary};
  }
`