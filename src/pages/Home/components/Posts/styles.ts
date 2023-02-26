import styled from "styled-components"

export const Posts = styled.section`
  width: 100%;

  header {
    width: 100%;
    
    margin-bottom: 0.75rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${({ theme }) => theme.baseSubtitle};
    }

    span {
      color: ${({ theme }) => theme.baseSpan};
    }
  }

`

export const SearchInput = styled.input`
  width: 100%;
  
  background-color: ${({ theme }) => theme.baseInput};
  border: 1px solid ${({ theme }) => theme.baseBorder};
  border-radius: 6px;

  padding: 0.75rem 1rem;

  font-size: 1rem;

  color: ${({ theme }) => theme.baseText};

  &::placeholder {
    color: ${({ theme }) => theme.baseLabel};
  }

  &:active, &:focus {
    outline: 1px solid${({ theme }) => theme.primary};
  }
`