import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../layouts/default'
import { HomePage } from '@/pages/home-page/home-page'
import { StoreProvider } from './store-provider'
import { DashboardPage } from '@/pages/dashboard-page/dashboard-page'

export function AppProvider(): JSX.Element {
	return (
		<StoreProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/car-lift-demo' element={<LayoutDefault />}>
						<Route index path='/car-lift-demo' element={<HomePage />} />
						<Route
							path='/car-lift-demo/dashboard'
							element={<DashboardPage />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</StoreProvider>
	)
}
