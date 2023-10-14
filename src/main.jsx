import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './RoutesConfig.jsx'
import {RouterProvider} from 'react-router-dom'
import { DateProvider } from './context/DateContext'
import { TimeProvider } from './context/TimeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateProvider>
      <TimeProvider>
        <RouterProvider router={router} />
      </TimeProvider>
    </DateProvider>
  </React.StrictMode>
)
