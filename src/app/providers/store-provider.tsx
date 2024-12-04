import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

interface Props {
	children: ReactNode
}

export function StoreProvider({ children }: Props): JSX.Element {
	return <Provider store={store}>{children}</Provider>
}
