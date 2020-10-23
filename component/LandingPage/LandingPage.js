import React from 'react'
import {Button,  Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LandingPageCard from '../LandingPageCard/LandingPageCard'
import  Router  from 'next/router'

const useStyles = makeStyles(theme => ({
  firstGrid:{
    [theme.breakpoints.down('sm')]:{
      display: "block",
      margin: "auto",
      textAlign: "center",  
    }
  },
    img: {
      height: "30vh",
    },
  }));

const LandingPage = React.forwardRef((props, ref) => {
    const classes = useStyles();
    return (
    <>  
      <Grid item container md={12} sm={12} style={{paddingTop: "1rem"}} style={{padding: "40px 30px"}}>
        <Grid
          className={classes.firstGrid} 
          item 
          container 
          md={5}
          sm={12} 
          justify="flex-end" 
          style={{padding: "1rem"}}>
          <img src="/assets/img/logo.png" className={classes.img}/>
        </Grid>
        <Grid
        className={classes.firstGrid}
        item
        container      
        direction="column"      
        justify="center"
        alignItems="flex-start"
        md={7}
        sm={12}
        style={{padding: "1rem"}}>
            <Typography variant="h1" color="secondary" style={{fontSize: "3rem", letterSpacing: "0.5rem", fontWeight: "100",}}>
              Wellcome
            </Typography>
            <Typography variant="body1" color="secondary" style={{fontSize: "1.5rem",}}>
              It is a long established fact that a reader will be distracted.
            </Typography>
            <Typography variant="body1" color="secondary" style={{fontSize: "1.5rem",}}>
               The readable content of a page when looking at its layout. 
            </Typography>
            <Button 
              variant="outlined"
              color="secondary" 
              style={{marginTop:"15px"}}
              onClick={() => Router.push('/signin')}>
              Sing In
            </Button>
        </Grid>
      </Grid>
      <LandingPageCard/>
    </>

      )

})

export default LandingPage;

  