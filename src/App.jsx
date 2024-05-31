import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Spacer, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";

const Navbar = () => (
  <Box bg="teal.500" px={4} py={2}>
    <Flex align="center">
      <NavLink to="/" exact>
        <Button variant="ghost" color="white">Home</Button>
      </NavLink>
      <NavLink to="/events">
        <Button variant="ghost" color="white">Events</Button>
      </NavLink>
      <Spacer />
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
    </Router>
  );
}

export default App;
