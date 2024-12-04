import styles from './styles.module.scss'

export function Nothing(): JSX.Element {
	return (
		<section className={styles.nothing}>
			<h2>Каталог пуст</h2>
		</section>
	)
}
