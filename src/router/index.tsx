import { Route, Routes, Navigate } from 'react-router-dom'
import Main from '@/views/Main'

const Router = () => {
    return (
        <Routes>
            <Route path='/main' element={<Main />} />
        </Routes>
    )
}

export default Router