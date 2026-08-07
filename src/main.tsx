import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Prevent zoom-in and zoom-out across all devices (Desktop, Laptops, Mac, Mobile)
const preventZoom = () => {
  // 1. Prevent desktop mouse wheel / trackpad Ctrl+wheel & Cmd+wheel zoom
  window.addEventListener(
    'wheel',
    (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
      }
    },
    { passive: false }
  )

  // 2. Prevent keyboard zoom shortcuts (Ctrl / Cmd + '+', '-', '0', '=')
  window.addEventListener('keydown', (e) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === '+' ||
        e.key === '-' ||
        e.key === '=' ||
        e.key === '_' ||
        e.key === '0' ||
        e.code === 'NumpadAdd' ||
        e.code === 'NumpadSubtract')
    ) {
      e.preventDefault()
    }
  })

  // 3. Prevent Safari & Mac Trackpad gestures
  window.addEventListener('gesturestart', (e) => e.preventDefault())
  window.addEventListener('gesturechange', (e) => e.preventDefault())
  window.addEventListener('gestureend', (e) => e.preventDefault())

  // 4. Prevent mobile multi-touch pinch zoom
  window.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    },
    { passive: false }
  )

  window.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    },
    { passive: false }
  )
}

preventZoom()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
