import { AppProvider } from "./providers"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from '@/routes';
import Header from '@/components/Header'

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
