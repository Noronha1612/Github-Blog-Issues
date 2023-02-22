import BannerLeftSVG from '@/assets/banner-left.svg'
import BannerRightSVG from '@/assets/banner-right.svg'
import LogoSVG from '@/assets/logo.svg'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <S.Banner>
        <img src={BannerLeftSVG} />
        <img src={LogoSVG} />
        <img src={BannerRightSVG} />
      </S.Banner>
    </S.Container>
  )
}
