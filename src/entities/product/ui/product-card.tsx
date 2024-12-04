import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material'
import styles from './styles.module.scss'
import { Product } from '../model/types'

interface Props {
	product: Product
}

function formatDescription(description: string) {
	let str = description
	str = str.replace('<p>', '')
	str = str.replace('</p>', '')
	str = str.replace('</b>', '')
	return str
}

export function ProductCard({ product }: Props): JSX.Element {
	return (
		<article className={styles.card}>
			<Card sx={{ maxWidth: 300, height: '100%' }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image={product.picture}
						alt='green iguana'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{product.name}
						</Typography>
						<Typography
							className={styles.description}
							variant='body2'
							sx={{ color: 'text.secondary' }}
						>
							{formatDescription(product.description)}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<CardActions className={styles.button}>
				<Button size='small' color='primary' variant='contained'>
					Подробнее
				</Button>
			</CardActions>
		</article>
	)
}
