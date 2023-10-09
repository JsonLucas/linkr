import { ApolloProvider } from '@apollo/client'
import { AppRoutes } from './routes'
import { apolloClient } from './api/apollo.config'

function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <AppRoutes />
    </ApolloProvider>
  )
}

export default App
