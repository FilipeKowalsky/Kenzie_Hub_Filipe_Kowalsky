import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App.jsx"
import { GlobalStyle } from "./styles/global"
import { UserProvider } from "./providers/ContextApi";
import { TechProvider } from "./providers/TechContextApi.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <GlobalStyle />
          <App />
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
