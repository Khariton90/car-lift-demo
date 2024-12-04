import { Outlet } from 'react-router-dom'
import { MainAppBar } from '@/widgets/app-bar'

export function LayoutDefault(): JSX.Element {
	return (
		<div className='app'>
			<header className='header'>
				<MainAppBar />
			</header>
			{<Outlet />}
			<footer className='footer'>
				<div className='container'>...</div>
			</footer>
		</div>
	)
}
