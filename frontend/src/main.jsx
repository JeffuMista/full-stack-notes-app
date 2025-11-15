import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';

//import publishableKey
const PUB_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUB_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
