import { Link } from "react-router-dom"
import styled from "styled-components"

export const CardContainer = styled(Link)`
  text-decoration: none;
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
      line-height: 130%;

      color: ${({ theme }) => theme.baseTitle};
    }

    & > span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.baseSpan};
      text-align: end;
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