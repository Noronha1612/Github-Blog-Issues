import BannerLeftSVG from '@/assets/banner-left.svg'
import BannerRightSVG from '@/assets/banner-right.svg'
import LogoSVG from '@/assets/logo.svg'
import { Outlet } from "react-router-dom"

import * as S from './styles'

export const PageWrapper = () => {
  return (
    <S.Container>
      <S.Banner>
        <img src={BannerLeftSVG} />
        <img src={LogoSVG} />
        <img src={BannerRightSVG} />
      </S.Banner>

      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  )
}