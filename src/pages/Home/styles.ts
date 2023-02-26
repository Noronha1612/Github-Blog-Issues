import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Banner = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  z-index: -10;
  
  padding-bottom: 3rem;

  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.bannerBackground};
    filter: blur(100rem);
  }

  img {
    background-size: cover;
  }
`

export const Content = styled.main`
  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 2rem;

  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  gap: 5rem;
`