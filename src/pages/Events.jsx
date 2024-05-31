import React from 'react';
import { Box, Heading, Text, VStack, Spinner, Container } from '@chakra-ui/react';
import { useEvents } from '../integrations/supabase/index.js';

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Text color="red.500">Failed to load events: {error.message}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Events</Heading>
        {events.length === 0 ? (
          <Text>No events available.</Text>
        ) : (
          events.map(event => (
            <Box key={event.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{event.name}</Heading>
              <Text mt={4}>{event.description}</Text>
              <Text mt={2} color="gray.500">{new Date(event.date).toLocaleDateString()}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Events;