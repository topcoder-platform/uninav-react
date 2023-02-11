import React from 'react'
import ReactDOM from 'react-dom'
import { FooterNavigation, MarketingNavigation, ToolNavigation } from '../lib'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ToolNavigation
      toolName='Tools Name'
      onReady={() => console.log('tool nav ready')}
      uniNavUrl='http://localhost:8083/v1/tc-universal-nav.js'
    />
    <MarketingNavigation
      onReady={() => console.log('marketing nav ready')}
      uniNavUrl='http://localhost:8083/v1/tc-universal-nav.js'
      currentLocation={location.href}
    />
    <FooterNavigation
      onReady={() => console.log('footer nav ready')}
      uniNavUrl='http://localhost:8083/v1/tc-universal-nav.js'
    />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement,
)
