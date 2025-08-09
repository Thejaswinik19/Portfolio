import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS (for components like navbar toggle)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import your custom CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
