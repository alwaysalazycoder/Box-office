import React from 'react'
import { Box, Heading, Image} from '@chakra-ui/react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";




const headingOptions = {
    pos: "absolute",
    left: ["10%","37%"],
    // right:["50%"],   
    top: ["50px","50%"],
    tranform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4"

}

const MyCarousel = () => {
  return (
    <Box>
         <Carousel  autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
                <Box w={"full"} h={["37vh","49vh","100vh"]}  >
                    <Image src={img1} />
                    <Heading bg={"blackAlpha.600"} color={"white"}  {...headingOptions}>Watch the future</Heading>
                </Box>
                <Box w={"full"} h={["37vh","49vh","100vh"]} >
                    <Image src={img2} />
                    <Heading bg={"whiteAlpha.900"} color={"black"} {...headingOptions}>Future is Gaming</Heading>
                </Box>
               
            </Carousel>
    </Box>
  )
}

export default MyCarousel