import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import { CartProvider } from './CartContext.jsx'
import { store } from './store/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
