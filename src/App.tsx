import Router from '@/router'
import { useState } from 'react'

const App = () => {

    const [ global, setGlobal ] = useState({})
    
    return (
        <div className='wrap'>
            <h1>Main No Router</h1>
        </div>
    );
}

export default App;
