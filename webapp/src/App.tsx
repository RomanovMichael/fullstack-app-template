import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'

export const App = () => {
  const x: number = 'ff'

  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}
