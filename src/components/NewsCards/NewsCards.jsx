import { Container, Grid } from '@mui/material';


import NewsCard from "./NewCard/NewsCard";

const NewsCards = ({ articles }) => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {
                        articles.map((article, i) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <NewsCard key={i} article={article} i={i+1}/>
                            </Grid>
                        ))
                    }
                </Grid>     
            </Container>
        </>
    )
}

export default NewsCards;
