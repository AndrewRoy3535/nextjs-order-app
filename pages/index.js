import { Container, Divider } from '@material-ui/core';
import React from 'react';
import LandingPage from '../component/LandingPage/LandingPage'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import { StateProvider } from '../hoc/StateProvider'


const Index = React.forwardRef((props, ref) => {

  return (
    <React.Fragment>
        <Header/>
        <LandingPage/>
        <Footer/>
    </React.Fragment>  
  );
})

export default Index;