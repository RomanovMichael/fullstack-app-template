import { TrpcProvider } from './lib/trpc'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'

import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
          <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
