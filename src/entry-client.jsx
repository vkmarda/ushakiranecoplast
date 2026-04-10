import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// In production, pre-rendered HTML is already in the root — hydrate it.
// In dev (empty root), fall back to a fresh render so HMR works normally.
if (root.innerHTML) {
  hydrateRoot(root, tree)
} else {
  createRoot(root).render(tree)
}
