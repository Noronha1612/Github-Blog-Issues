import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

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
