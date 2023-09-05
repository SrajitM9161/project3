import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-mpu38kebttk8wp1t.us.auth0.com"
    clientId="CZBLbQC09wePRKvrCXFSoVS2MehK6LHJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
