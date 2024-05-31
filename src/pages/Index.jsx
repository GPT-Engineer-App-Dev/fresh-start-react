import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="calc(100vh - 64px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white" p={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" color="black">Welcome to Your Blank Canvas</Heading>
        <Text fontSize="lg" color="gray.700">Start building your amazing application with React and Chakra UI.</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;