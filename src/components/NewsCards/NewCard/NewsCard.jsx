import { CardHeader, Box, Button, CardActions, Link, Typography, CardMedia, CardContent, Card } from '@mui/material';

import useStyles from './styles';
import formatDate from '../../../utils/formatDate';
import newsPlaceholder from'../../../assets/images/news-placeholder.png';

const NewsCard = ({ article, i }) => {
  const classes = useStyles();

  return (
    <Card key={i} className={classes.card}>
      <CardHeader subheader={formatDate(article.publishedAt)}/>
      <CardMedia
          component="img"
          height="140"
          image={article.urlToImage || newsPlaceholder}
          alt="news image"
      />
      <CardContent>
          <Typography variant="overline" color="text.secondary">
                {article.author}
          </Typography>
          <Typography variant="button" component="div">
            {`${article.title.slice(0, 80)}... `}
          </Typography>
          {
            article.description && (
              <Typography variant="body2" color="text.secondary">
                {`${String(article.description).slice(0, 250)}...`}
              </Typography>
            )
          }
      </CardContent>
      <CardActions>
        <Box className={classes.footer}>
          <Box className={classes.footerContent}>
            <Link href={article.url} underline="none" target="_blank">
              <Button variant="outlined">View Full Article</Button>
            </Link>
            <Box className={classes.articleIndex}>
              <Typography variant="subtitle1">
                {i}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}

export default NewsCard;