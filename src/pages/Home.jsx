import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
    return <Box textAlign="center" height="100vh" position="relative">
        <Box position="absolute" top="50%" left="50%" m="0" transform="translate(-50%, -50%)" >
            <Heading as="h1" size="2xl" mb="4">No code - No problems.</Heading>
            <Text fontSize="lg">Create a website without coding.</Text>
            <Link to="/editor/demo/demo/"><Button bgColor="#0388fc" color="white" size="md" my="4" _hover={{ opacity: 0.8 }} _focus={{ opacity: 0.8 }}  >Get Started</Button></Link>
        </Box>
    </Box>
}

export default Home;