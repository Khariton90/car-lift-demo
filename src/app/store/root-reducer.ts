import { combineReducers } from '@reduxjs/toolkit'
import { productSlice } from '@/entities/product/model/slice'

export const reducer = combineReducers({
	[productSlice.name]: productSlice.reducer,
})
