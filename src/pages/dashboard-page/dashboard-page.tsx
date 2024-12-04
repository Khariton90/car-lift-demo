import styles from './styles.module.scss'
import { AddProductsFile } from '@/features/product'

export function DashboardPage(): JSX.Element {
	return (
		<main className='main'>
			<div className='container'>
				<section className={styles.content}>
					<AddProductsFile />
				</section>
			</div>
		</main>
	)
}
