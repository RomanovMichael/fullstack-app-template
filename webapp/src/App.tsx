import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'

export const App = () => {
  const x: number = '1'

  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}
