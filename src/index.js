import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { StateContextProvider } from './context'
import App from './App'
import GlobalStyle from './GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={ChainId.Goerli}>
        <BrowserRouter>
            <StateContextProvider>
                <App />
                <GlobalStyle />
            </StateContextProvider>
        </BrowserRouter>
    </ThirdwebProvider>
)