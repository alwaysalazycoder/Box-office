import { Box} from '@chakra-ui/react'
import React from 'react'
import MyCarousel from './MyCarousel';
import ContainerHomePage from './ContainerHomePage';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (

        <Box>
        
            <MyCarousel />
            <ContainerHomePage/>
        </Box>
    )
}


export default Home