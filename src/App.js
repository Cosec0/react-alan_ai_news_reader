import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = 'a2284e68a0f6b574c0a838badbab8ff82e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newsHeadlines') {
                    setNewsArticles([]);
                    console.log(articles);
                    setNewsArticles(articles)
                }
                else if(command === 'goBack') {
                    setNewsArticles([]);
                }
            }
        })
    }, []);

    return (
        <div>
            <h1>Testing</h1>
            <br/>
            {
                newsArticles.length > 0 ?
                (<NewsCards articles={newsArticles}/>) :
                'No news'
            }
        </div>
    )
}

export default App;
