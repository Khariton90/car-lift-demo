import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './providers'
import './index.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppProvider />
	</StrictMode>
)
