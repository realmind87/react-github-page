import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

interface DetailState {
    userId: string;
    title: string;
    date: string;
    content: any;
    comments: []
}

interface PostState {
    id: string;
    userId: string;
    posts: []
}

export const post = createSlice({
    name: 'post',
    initialState: {},
    reducers: {}
})

export default post.reducer