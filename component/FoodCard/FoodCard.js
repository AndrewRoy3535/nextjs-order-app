import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  Router, { useRouter }  from 'next/router'
import {useStateValue} from '../../hoc/StateProvider'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function FoodCard({id, title, price, description, url}) {
  const classes = useStyles();
  
  const router = useRouter();

  const [{cart}, dispatch] = useStateValue()

  const addToCart = () => {
    
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        price,
        description,
        url,
      }
    })
  }

  const showProductToPage = (e) => {
    // e.preventDefault()
    router.push('/showCake')

    //Exprementing
    dispatch({
      type: "SHOW_TO_PAGE",
      item: {
        id,
        title,
        price,
        description,
        url,
      }
    })

  }


  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => showProductToPage()}>
        <CardMedia
          className={classes.media}
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textTransform:"uppercase"}}>
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {"$" + " " +price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => addToCart()} size="small" color="secondary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}