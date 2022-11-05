// TODO: TS
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import Router from '@/router'
import Store from '@/store'
import Theme from '@/theme'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />

        <RouterProvider router={Router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
