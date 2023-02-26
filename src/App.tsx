import { ThemeProvider } from 'styled-components'

import { RouterProvider } from 'react-router-dom'

import { PostsContextProvider } from './contexts/Posts'
import { router } from './routes'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </PostsContextProvider>
    </ThemeProvider>
  )
}
