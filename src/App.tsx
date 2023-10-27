import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './routes'
import { ApolloProvider } from '@apollo/client'
import client from './api/apollo.client'

function App() {

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
