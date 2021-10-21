import React from 'react'
import {
    Flex,
    Text,
    Container
  } from "@chakra-ui/react"
import { Avatar } from '@chakra-ui/avatar'

export default function Header() {

    return (
       
            <Flex
            bg="#FF6A28"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            width="115%" 
            height="80px" 
            border="1px" 
            borderStyle="groove"
            borderColor="grey" 
            boxShadow="0px 5px 10px black"
            >
              <Container  
              width="auto" 
              height="90%" 
              ml="20px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              >
                  <Avatar />
                  <Text> Ana Maria Braga </Text>
              </Container>

            </Flex>
    )
}
