import { combineReducers } from '@reduxjs/toolkit'
import post from './slices/post' 

const rootReducer = combineReducers({ post })

export default rootReducer