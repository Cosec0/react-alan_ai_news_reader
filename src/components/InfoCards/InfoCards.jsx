import { Container, Grid } from '@mui/material';

import InfoCard from "./InfoCard/InfoCard";
import { latestInfoCard, categoriesInfoCard, termsInfoCard, sourcesInfoCard } from './infoCardDetails';

const InfoCards = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <InfoCard cardHeight='20rem' cardDetails={latestInfoCard}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <InfoCard cardHeight='20rem' cardDetails={categoriesInfoCard}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <InfoCard cardHeight='20rem' cardDetails={termsInfoCard}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <InfoCard cardHeight='20rem' cardDetails={sourcesInfoCard}/>
                    </Grid>
                </Grid>     
            </Container>
        </>
    )
}

export default InfoCards;
