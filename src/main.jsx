import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/main.css'
import { Provider } from 'react-redux'
import stores from '@/store'
import { PersistGate } from 'redux-persist/integration/react'


console.log(stores())
const { store, persistor } = stores()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
