import React, {useState, useEffect} from 'react';
import {Container, Button,  Grid, Typography} from '@material-ui/core'
import FoodCard from '../FoodCard/FoodCard'

const LandingPageCard =() => {


    const data = [
        {
            id: 1,
            title: "cake 1",
            price: 59.58,
            description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
            url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80",
        },
        {
            id: 5,
            title: "cake 2",
            price: 50.85,
            description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
            url: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80",
        },
        {
            id: 6,
            title: "cake 3",
            price: 158.47,
            description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
            url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=849&q=80",
        },
        {
            id: 2,
            title: "cake 4",
            price: 100.00,
            description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
            url: "https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 3,
            title: "cake 5",
            price: 100.00,
            description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
            url: "https://images.unsplash.com/photo-1546856139-46fb2b57ff21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 4,
            title: "cake 6",
            price: 78.58,
            description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
            url: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80",
        },
    ]

    // const [data, setData] = useState([])

    // useEffect(() => {

    //     async function fetchData() {
    //         setData(
    //           await  fetch('https://reqres.in/api/users?page=2')
    //             .then(res =>res.json())
    //             .then(res=> res.data)
    //             .catch(err=> console.log(err, "Error occours"))
    //         )
    //     }
    //     fetchData();
    // }, []);

    return(
        <Container maxWidth="md" style={{padding: "30px 30px"}}>
            <Grid item container spacing={10}>
                {data.map((item, index) => 
                <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
                    <FoodCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    url={item.url}
                    />
                </Grid>    
                )}    
            </Grid>
        </Container >
    )

}

export default LandingPageCard;