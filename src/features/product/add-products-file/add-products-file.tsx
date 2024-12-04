import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { findAll, setIsLoading } from '@/entities/product/model/slice'
import { delay } from '@/shared/lib/delay'
import { xmlParser } from '@/entities/product/lib/xml-parser'
import { Button, CircularProgress } from '@mui/material'
import styles from './styles.module.scss'

export function AddProductsFile(): JSX.Element {
	const [xmlFile, setXMLFile] = useState<string | null>(null)
	const dispatch = useAppDispatch()
	const isLoading = useAppSelector(({ products }) => products.isLoading)
	const length = useAppSelector(({ products }) => products.products.length)
	const navigate = useNavigate()

	const handleChange = async (evt: ChangeEvent<HTMLInputElement>) => {
		const files = evt.target.files
		if (files && files.length > 0) {
			dispatch(setIsLoading(true))
			await delay()
			try {
				const text = await files[0].text()
				setXMLFile(text)
			} catch (error) {
				console.error(error)
			} finally {
				dispatch(setIsLoading(false))
			}
		} else {
			console.error('Нет файла для загрузки!')
		}
	}

	useEffect(() => {
		if (xmlFile) {
			const products = xmlParser(xmlFile)
			dispatch(findAll(products))
			setXMLFile(() => null)
		}
	}, [dispatch, xmlFile])

	return (
		<form>
			<label className={styles.file}>
				<input type='file' name='file' id='file' onChange={handleChange} />
				<span className={styles.fileBtn}>Выберите файл</span>
				{length && !isLoading ? (
					<>
						<span className={styles.fileText}>Загружено 100 наименований</span>

						<Link to='/car-lift-demo/'>Перейти в каталог</Link>
					</>
				) : null}
				{isLoading && <CircularProgress />}
			</label>
		</form>
	)
}
