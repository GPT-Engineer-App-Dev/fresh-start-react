import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Spacer, Button, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";

const Navbar = () => (
  <Box bg="white" px={4} py={2} boxShadow="sm">
    <Flex align="center">
      <NavLink to="/" exact>
        <Button variant="ghost" color="teal.500">Home</Button>
      </NavLink>
      <NavLink to="/events">
        <Button variant="ghost" color="teal.500">Events</Button>
      </NavLink>
      <Spacer />
    </Flex>
  </Box>
);

const Footer = () => (
  <Box bg="gray.100" px={4} py={2} mt={8}>
    <Flex justify="center">
      <Text fontSize="sm" color="gray.600">© 2023 Your Company. All rights reserved.</Text>
    </Flex>
  </Box>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;