import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';

const alanKey = 'a2ce568569784bc0c0a838badbab8ff82e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey
        })
    }, []);

    return (
        <div>
            <h1>Testing</h1>
        </div>
    )
}

export default App;
