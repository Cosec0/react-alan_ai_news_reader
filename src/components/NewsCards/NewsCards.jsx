import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';


import NewsCard from "./NewCard/NewsCard";
import InfoCard from '../InfoCards/InfoCard/InfoCard';
import { goBackInfo } from '../InfoCards/infoCardDetails';

const NewsCards = ({ articles, highlightedArticle }) => {

    useEffect(() => {
        let scroll = document.getElementById(highlightedArticle || "1");
        scroll.scrollIntoView();

        return scroll;
    }, [highlightedArticle]);

    return (
        <>
            <Container>
                <InfoCard cardHeight='5rem' cardDetails={goBackInfo}/>
                <Grid container spacing={2} sx={{ marginTop: '0.5rem' }}>
                    {
                        articles.map((article, i) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <NewsCard 
                                    key={i} 
                                    article={article} 
                                    i={i+1} 
                                    highlightedArticle={highlightedArticle}
                                />
                            </Grid>
                        ))
                    }
                </Grid>     
            </Container>
        </>
    )
}

export default NewsCards;
