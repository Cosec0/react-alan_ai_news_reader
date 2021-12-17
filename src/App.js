import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';
import NewsCards from './components/NewsCards/NewsCards';
import InfoCards from './components/InfoCards/InfoCards';
import Header from './components/Header/Header';

const alanKey = 'a2284e68a0f6b574c0a838badbab8ff82e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [highlightedArticle, setHighlghtedArticle] = useState(0)

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, highlightedArticle, highlightedArticleIndex }) => {
                switch(command) {
                    case 'newsHeadlines':
                        setNewsArticles([]);
                        // console.log(articles);
                        setNewsArticles(articles)
                        break;
                    case 'goBack':
                        setNewsArticles([]);
                        break;
                    case 'highlight':
                        setHighlghtedArticle(+highlightedArticleIndex);
                        break;
                    default:
                        break;
                }
            }
        })

        return alanBtn;
    }, []);

    return (
        <div>
            <Header/>
            <br/>
            {
                newsArticles.length > 0 ?
                (<NewsCards articles={newsArticles} highlightedArticle={highlightedArticle}/>) :
                (<InfoCards/>)
            }
        </div>
    )
}

export default App;
