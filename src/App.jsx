import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useScrollTop } from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop()

  return (
    <div className='app'>
      <AppHeader />
      <Suspense fallback={<h2>Loading...</h2>}>
        <div className="page">
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App