import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PageLoader from './components/UI/PageLoader/PageLoader'
const HomeLazy = lazy(() => import('./components/Pages/Home/Home'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='*' element={<HomeLazy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
