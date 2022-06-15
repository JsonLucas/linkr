import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyle';
import AppRoutes from './routes';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
