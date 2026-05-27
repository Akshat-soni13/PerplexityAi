import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import {store} from "./app/app.store"
import {Provider} from "react-redux"
import { Toaster } from "sonner";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    <Toaster richColors position="top-right" />
    </Provider>
)
