import React from 'react'
import {useStateValue} from '../../hoc/StateProvider'
import { makeStyles } from '@material-ui/core/styles'
import {Container, Grid, Typography, Card, CardContent, Button, CardActions} from '@material-ui/core';
import CheckoutProducts from '../../component/CheckoutProducts/CheckoutProducts'
import Subtotal from '../../component/Subtotal/Subtotal'


function index() {

    const [{cart}, dispatch] = useStateValue()


    return (
        <div>
            
            {cart?.length === 0 ? (
                <Container maxWidth="md">
                    <Typography variant="h2" align="center">
                        Your Cart is Empty
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                        You have no item in your cart.
                    </Typography>
                </Container>
            ) : (
                <Container maxWidth="md">        
                    <Grid container item  xs={12} spacing={2}>
                        <Grid container item xs={10} justify="center">
                        {
                            cart.map((item, index) =>
                                <CheckoutProducts
                                    key={index}
                                    id={item.id}
                                    price={item.price}
                                    title={item.title}
                                    description={item.description}
                                    url={item.url}
                                />
                            ) 
                        }
                        </Grid>
                        <Grid container item xs={2} direction="column" alignItems="center">
                            <Subtotal/>
                        </Grid>
                        
                    </Grid>
                </Container>        
                )} 
        </div>
    )
}

export default index
