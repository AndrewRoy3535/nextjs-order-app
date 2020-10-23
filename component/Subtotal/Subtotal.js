import React from 'react'
import {useStateValue} from '../../hoc/StateProvider'
import { makeStyles } from '@material-ui/core/styles'
import {Container, Typography, Card, CardContent, Button,} from '@material-ui/core';
import CurrencyFormat from 'react-currency-format'
import {getCartTotal} from '../../store/reducer/reducer'

const useStyles = makeStyles({
    root: {
        minWidth: 180,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
})

export default function Subtotal() {

    const classes = useStyles()

    const [{cart}, dispatch] = useStateValue()

    return (
                <CurrencyFormat
                    renderText ={(value) => (
                    <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography
                        style={{textTransform:"uppercase", fontSize: "10px"}} 
                        className={classes.title}           color="textSecondary" 
                        gutterBottom>
                            Proceed To Checkout
                        </Typography>
                        <Typography 
                        variant="h5" 
                        component="h2">
                                {value}
                        </Typography>
                        <Typography variant="body2" component="p">
                                Total items: {cart?.length}
                        </Typography>
                        <Button
                        style={{marginTop: "5px"}} 
                        size="small" 
                        variant="outlined" 
                        color="secondary">CHEKOUT NOW</Button>    
                    </CardContent>
                    
                </Card>
                        )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />      
    )
}
