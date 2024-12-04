import { ProductList } from '@/widgets/product-list/ui/product-list'

export function HomePage(): JSX.Element {
	return (
		<main className='main'>
			<div className='container'>
				<section className='content'>
					<ProductList />
				</section>
			</div>
		</main>
	)
}
