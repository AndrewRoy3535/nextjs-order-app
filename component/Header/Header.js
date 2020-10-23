import React, {useState} from 'react'
import {Box, AppBar, Toolbar, IconButton, Typography, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, Drawer} from '@material-ui/core'
import { Apps, AssignmentInd, ContactMail, Home, Instagram, Facebook, Twitter, Search, ShoppingBasket} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import {useStateValue} from '../../hoc/StateProvider'
import Router from 'next/router'


const useStyles = makeStyles((theme) => ({
    menuPageStyle: {
        width: 250,
        height: "100%",
        backgroundColor: '#f2f3f4',
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
      },
    listStyle: {
        color: "#FB6464",
    },
}))

const menuItems = [
    {
        listIcon: <Home/>,
        link: "/",
        listText: "Home",
    },
    {
        listIcon: <AssignmentInd/>,
        link: "/cakeman",
        listText: "Cakeman",
    },
    {
        listIcon: <Apps/>,
        link: "/PizzaRiya",
        listText: "PizzaRiya",
    },
    {
        listIcon: <ContactMail/>,
        link: "/Contact",
        listText: "Contact",
    },
]

export default function Header() {

    const [{cart}] = useStateValue()

    console.log(cart)

    const [state, setState] = useState({
        show: false,
    })

    const toggleSlider = ((side, open) => () => {
        setState({...state, [side]: open});
    })

    const classes = useStyles();

    const sidediv = side => (
        <Box className={classes.menuPageStyle} component ="div">
            <Avatar 
            src="/assets/img/logo.png" 
            variant="square" 
            className= {classes.avatar}/>
            <Divider/>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key ={index}>
                        <ListItemIcon className={classes.listStyle}>
                            {item.listIcon}
                        </ListItemIcon>
                        <Link href={item.link}>
                            <ListItemText 
                            className={classes.listStyle} 
                            primary={item.listText}>
                            </ListItemText>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return(
        <React.Fragment>       
        <Box component ="nav" style={{marginBottom:"5.5rem"}}>
           <AppBar position="fixed" color="primary">
                <Toolbar>
                    <div style={{width: "50%", display:"flex", justifyContent: "flex-start", textAlign: "center"}}>
                        <IconButton onClick={toggleSlider("show", true)} color= "secondary">
                            <MenuIcon/>
                        </IconButton>
                        <Drawer 
                        anchor="left"
                        open={state.show}
                        onClose ={toggleSlider("show", false)}>
                            {sidediv("show")}
                        </Drawer>
                    </div>
                    <div style={{width: "50%", display:"flex", justifyContent: "flex-end", textAlign: "center"}}>
                        <IconButton color="secondary">
                            <Facebook/>
                        </IconButton>
                        <IconButton color="secondary">
                            <Instagram/>
                        </IconButton>
                        <IconButton color="secondary">
                            <Twitter/>
                        </IconButton>
                        <Divider orientation="vertical" flexItem />
                        <IconButton
                        onClick={() => Router.push('/checkout')} 
                        color="secondary">
                            <ShoppingBasket/>
                            <span 
                            style={{padding: "10px"}}
                            >
                                {cart?.length}
                            </span>
                        </IconButton>
                    </div>
                    
                </Toolbar>   
            </AppBar> 
        </Box>
        </React.Fragment>
    )
}
