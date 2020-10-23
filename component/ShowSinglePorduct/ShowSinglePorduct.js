import React from 'react'
import {Container, Button, Grid, Card, CardActionArea, CardMedia, CardActions, CardContent, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Delete } from '@material-ui/icons'
import {useStateValue} from '../../hoc/StateProvider'

const useStyles = makeStyles(theme=>({
    root: {
        maxWidth: 960,
        [theme.breakpoints.down('md')]:{
            maxWidth: 600,
        },
      },
    img: {
        [theme.breakpoints.down('md')]:{
            height: 300,
        }
    }  

}))

function ShowSinglePorduct({id, title, price, description, url}) {
    const classes = useStyles()

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

    return(
        <Container maxWidth="lg">
            <Grid item container xs={12} justify="center">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.img}
                    component="img"
                    alt="Contemplative Reptile"
                    height="640"
                    image={url}
                    title={title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
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
            </Grid>
        </Container>
    )
}

export default ShowSinglePorduct
