import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LenisProvider } from './components/LenisProvider.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </StrictMode>,
)

