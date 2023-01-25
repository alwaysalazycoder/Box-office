import React from 'react'
import { Box,Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import img5 from "../assests/5.png";


const ContainerHomePage = () => {
    return (

        <Container minH={"100vh"} minW={"90vw"} p={0}>


            <Box display={"flex"} w={"100%"} m={"0"} alignItems={"center"} justifyContent={"center"} >
                <Heading borderBottom={"solid"} textTransform={"uppercase"} borderBottomWidth={"3px"}>Services</Heading>

            </Box>

            <Stack
                h={"full"}
                p="4"
                alignItems={"center"}
                direction={['column', 'column', 'column', 'row', 'row']}
                justifyContent={"center"}
            >

                <Image src={img5} h={[40, 400]} filter={"hue-rotate(-130deg)"} />
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur amet numquam aliquam cumque nisi aut quasi itaque quaerat cum eum ipsam, ad eos impedit illo! Amet iusto alias corporis temporibus voluptate dignissimos quam consectetur perferendis! Ut quaerat, impedit libero officia optio voluptates, nisi voluptatum tenetur voluptate fuga nesciunt? Vel iure molestiae repudiandae sequi architecto reprehenderit impedit illum quidem, doloremque temporibus quia voluptatum dignissimos possimus labore, neque nobis libero voluptas commodi obcaecati illo aliquam incidunt. Tenetur iusto praesentium sint nihil non reprehenderit ratione esse eligendi, iure pariatur nobis, nemo ex corporis error, quis laborum officia at mollitia sit vero recusandae?
                </Text>
            </Stack>

        </Container>
    )
}

export default ContainerHomePage