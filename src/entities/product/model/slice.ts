import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './types'

interface State {
	isLoading: boolean
	products: Product[]
}

const initialState: State = {
	isLoading: false,
	products: [],
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		findAll: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
	},
})

export const { findAll, setIsLoading } = productSlice.actions
