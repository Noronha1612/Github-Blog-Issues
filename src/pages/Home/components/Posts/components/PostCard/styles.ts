import { Link } from "react-router-dom"
import styled from "styled-components"

export const CardContainer = styled(Link)`
  padding: 2rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.basePost};

  cursor: pointer;

  & > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;

    & > h3 {
      font-weight: 700;
      font-size: 1.25rem;

      color: ${({ theme }) => theme.baseTitle};
    }

    & > span {
      white-space: nowrap;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.baseSpan};
    }
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.primary};
  }
`

export const Content = styled.div`
  color: ${({ theme }) => theme.baseText};
  font-size: 1rem;
  
  margin-top: 1.25rem;
`