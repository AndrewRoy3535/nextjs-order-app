import React from 'react'
import { Grid, List, TextField, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {useStateValue} from '../../hoc/StateProvider'
import { Delete } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '100ch',
    backgroundColor: '#FFFAFA'
  },
  inline: {
    display: 'inline',
  },

})


function CheckoutProducts({id, title, price, description, url}) {
  
  const [{cart}, dispatch] = useStateValue();

  const classes = useStyles()
  
  const removeProduct = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id:id,
    })
  }

  // const increaseWeight = () => {
  //   for(i)
  // }


  return (
    <List className={classes.root}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={url} />
      </ListItemAvatar>
      <ListItemText>
      <Grid item container justify="space-evenly" alignContent="center" alignItems="center">
        <Grid>
          <ListItemText>
            <Typography variant="subtitle1" style={{textTransform:"uppercase", fontWeight:"400"}}>
            {title}
            </Typography>
          </ListItemText>
        </Grid>
        <Grid>
          <ListItemText>
            <Typography variant="subtitle1" style={{fontWeight:"600"}}>
            $
            {price}
            </Typography>
          </ListItemText>  
        </Grid>
      </Grid>
      </ListItemText>
      <IconButton
      color="secondary"
      onClick={() => removeProduct()}
      >
        <Delete/>
      </IconButton>
    </ListItem>
    <Divider variant="inset" component="li" />
  </List>
  )
}

export default CheckoutProducts

