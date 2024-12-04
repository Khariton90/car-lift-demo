import { ProductCard } from '@/entities/product'
import { useAppSelector } from '@/shared/lib/hooks'
import styles from './styles.module.scss'
import { Nothing } from './nothing'

export function ProductList(): JSX.Element {
	const products = useAppSelector(({ products }) => products.products)

	if (!products.length) {
		return <Nothing />
	}
	return (
		<section className={styles.list}>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	)
}
