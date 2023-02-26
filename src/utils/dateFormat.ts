import { formatDistanceToNow } from 'date-fns'
import localePtBR from 'date-fns/locale/pt-BR'

type OptionsRaw = Parameters<typeof formatDistanceToNow>[1]

type Options = OptionsRaw extends undefined ? undefined : Omit<NonNullable<OptionsRaw>, 'locale'>

export const formatDistanceToNowPtBr = (date: Date, options?: Options) => {
  return formatDistanceToNow(date, {
    ...options,
    locale: localePtBR
  })
}