import React from 'react'
import { 
    Grid, 
    Box, 
    Text, 
    Container 
} from '@chakra-ui/layout'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"

import { Image } from '@chakra-ui/image'

export default function Card() {
    return (
            <Grid
                templateColumns="1fr 1fr"
                mt="8px"
                m="10px 0px 0px 30px"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                width="100%"
                >

                <Container
                    display="flex"
                    flexDirection="column"
                    gridGap="20px"
                    bgPosition="center"
                    width="100%"
                    height="800px"
                    border= "1px"
                    bgColor="#FFFFFF"
                    opacity="0.9"
                    color="white"
                    fontSize="100px"
                    justifyContent="center"
                    alignItems="center"
                    borderStyle="groove" 
                    boxShadow="0px 5px 10px black"
                    >
                        <Text color="black" fontSize="0.5em" mt="10px">
                            Apple Pie
                        </Text>

                        <Box 
                        bgImage="url(https://github.com/ironhack-labs/lab-css-recipes-clone/blob/master/apple-pie/images/apple-pie.jpg?raw=true)"
                        bgSize="100%"
                        width="100%"
                        height="100%"
                        bgRepeat="no-repeat"
                        />

                        <Image 
                        src="https://raw.githubusercontent.com/ironhack-labs/lab-css-recipes-clone/master/apple-pie/images/cooking-info.png"> 
                        
                        </Image>


                </Container>

                <Container
                    display="flex"
                    flexDirection="column"
                    gridGap="20px"
                    bgPosition="center"
                    width="80%"
                    height="800px"
                    border= "1px"
                    bgColor="#FFFFFF"
                    opacity="0.9"
                    color="white"
                    fontSize="100px"
                    justifyContent="center"
                    alignItems="center"
                    borderStyle="groove" 
                    boxShadow="0px 5px 10px black"
                    >
                        
                        <Accordion 
                        color="white" 
                        defaultIndex={[0]} 
                        allowMultiple width="100%"
                        >  
                            <AccordionItem>
                                <h2>
                                <AccordionButton bgColor="#FF6A28" _hover={{bgColor: "#988856"}}>
                                    <Box flex="1" textAlign="left">
                                    Description
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel 
                                pb={4} 
                                fontSize="18px" 
                                color="black">
                                 Apple Pies This was my grandmother's apple pie recipe. I have never seen another one quite like it. It will always
                                be my favorite and has won me several first place prizes in local competitions. I hope it becomes one of your
                                favorites as well!
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton bgColor="#FF6A28" _hover={{bgColor: "#988856"}}>
                                    <Box flex="1" textAlign="left">
                                    Ingredients
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel 
                                pb={4} 
                                fontSize="18px" 
                                color="black"
                                p="4px 35px">
                                    <ul>
                                        <li> 1 recipe pastry for a 9 inch double crust pie </li> 
                                        <li> 1/2 cup unsalted butter 3 tablespoons </li>
                                        <li> all-purpose flour 1/4 cup water </li> 
                                        <li> 3 tablespoons all-purpose flour </li>
                                        <li> 1/4 cup water </li>
                                        <li> 1/2 cup white sugar </li> 
                                        <li> 1/2 cup packed brown sugar </li> 
                                        <li> 8 Granny Smith apples - peeled, cored and sliced </li>
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2> 
                                <AccordionButton bgColor="#FF6A28" _hover={{bgColor: "#988856"}}>
                                    <Box 
                                    flex="1" 
                                    textAlign="left">
                                    Direction
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel 
                                pb={4} 
                                fontSize="18px" 
                                color="black"
                                p="5px 35px">
                                    <ol>
                                        <li> 
                                            Preheat oven to 425 degrees F (220 degrees
                                            C). Melt the butter in a saucepan. Stir in flour to form a paste. Add water, white sugar and brown sugar, and bring
                                            to a boil. Reduce temperature and let simmer. 
                                        </li>
                                        <li>
                                            Place the bottom crust in your pan. Fill with apples, mounded
                                            slightly. Cover with a lattice work crust. Gently pour the sugar and butter liquid over the crust. Pour slowly so
                                            that it does not run off. 
                                        </li>
                                        <li>
                                            Bake 15 minutes in the preheated oven. Reduce the temperature to 350 degrees F (175
                                            degrees C). Continue baking for 35 to 45 minutes, until apples are soft.
                                        </li>
                                    </ol>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                </Container>

                
                
            </Grid>
    )
}
