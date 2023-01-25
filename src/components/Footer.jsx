import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend as SendIcon} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column","row"]} >
        <VStack alignItems={"stretch"} w={"full"}> 
          <Heading size={"md"} textTransform={"uppercase"}>Subscribe to our newsletter.</Heading>
        <HStack
        borderBottom={"2px solid white"}
        py={"2"}
        >
          <Input placeholder='Enter email here' border={"none"} borderRadius={"none"}  focusBorderColor={"none"} />
          <Button p={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"} >
            <SendIcon/>
          </Button>
        </HStack>
        </VStack>

        <VStack w={"full"}
        borderLeft={["none" , "1px solid white"]}
        borderRight={["none" , "1px solid white"]}
        >
            <Heading textTransform={"uppercase"} textAlign={"center"}>Box office</Heading>
            <Text textAlign="center" marginTop={["0px","100px"]}> All rights reserved</Text>
        </VStack>

        <VStack w={"full"}>

        <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>Social Media</Heading>
<Button variant={"link"}>
  <a href='https://www.youtube.com'>Youtube</a>
  </Button>  
<Button variant={"link"}>
  <a href='https://www.youtube.com'>Instagram</a>
  </Button>  
<Button variant={"link"}>
  <a href='https://www.youtube.com'>Github</a>
  </Button>  
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer